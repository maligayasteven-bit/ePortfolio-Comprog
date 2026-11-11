/**
 * Tiny Java simulator for beginner console programs.
 *
 * Supports:
 * - System.out.print / println / printf, String.format
 * - Scanner (nextLine / nextInt / nextDouble / next / hasNext / hasNextInt / ...)
 * - Variables (block scoped), assignments, compound assignments (+=, -=, *=, /=, %=)
 * - ++ / -- (prefix and postfix)
 * - Arithmetic (+ - * / %), string concatenation, parentheses, casts like (int) / (double)
 * - Comparisons (== != < > <= >=), logical operators (&& || !) with short-circuiting
 * - Ternary operator (cond ? a : b)
 * - if / else if / else
 * - while, do-while, for (with break and continue)
 * - switch statements: classic (case X: with break / fall-through) and arrow (case X ->),
 *   on ints, chars and Strings, with multiple labels (case 1, 2:) and default
 * - A few String methods (length, charAt, equals, substring, ...) and Math / parse helpers
 *
 * Does NOT support arrays, switch expressions (x = switch ...), methods other than main, classes, try/catch,
 * enhanced for-each loops, or labeled break/continue.
 */

const TYPES =
  "int|long|short|byte|double|Double|float|String|char|boolean|Integer|Long|Boolean|Character|var";

const INTS = new Set(["int", "long", "short", "byte", "Integer", "Long"]);
const FLOATS = new Set(["double", "Double", "float"]);

const DECL = new RegExp(`^(?:final\\s+)?(${TYPES})\\s+([\\s\\S]+)$`);
const ASSIGN = /^([A-Za-z_]\w*)\s*(=|\+=|-=|\*=|\/=|%=)(?!=)\s*([\s\S]+)$/;

// Operator precedence, lowest to highest. Longer operators first within a level.
const LEVELS = [
  ["||"],
  ["&&"],
  ["==", "!="],
  ["<=", ">=", "<", ">"],
  ["+", "-"],
  ["*", "/", "%"]
];

const STATIC_CLASSES = new Set(["Math", "Integer", "Double", "String"]);
const SCANNER_METHODS = new Set([
  "nextLine", "next", "nextInt", "nextDouble",
  "hasNext", "hasNextInt", "hasNextDouble", "hasNextLine"
]);

const BREAK = Symbol("break");
const CONTINUE = Symbol("continue");
const RETURN = Symbol("return");
const UNSET = Symbol("unset");

/* ------------------------------------------------------------------ */
/* Values                                                              */
/* ------------------------------------------------------------------ */

// Java ints are plain JS numbers; Java doubles are wrapped so that
// 5.0 prints as "5.0" and (double) a / b divides without truncating.
class Dbl {
  constructor(v) {
    this.v = v;
  }
}

const isNum = (v) => typeof v === "number" || v instanceof Dbl;
const num = (v) => (v instanceof Dbl ? v.v : v);

const typeName = (v) =>
  typeof v === "boolean" ? "boolean"
  : v instanceof Dbl ? "double"
  : typeof v === "number" ? "int"
  : typeof v === "string" ? "String"
  : "Object";

const fmtDouble = (n) => (Number.isInteger(n) ? n.toFixed(1) : String(n));

const str = (v) =>
  v === null || v === undefined
    ? "null"
    : v instanceof Dbl
      ? fmtDouble(v.v)
      : String(v);

const unescape = (s) =>
  s.replace(/\\(.)/g, (_, c) => ({
    n: "\n",
    t: "\t",
    r: "\r",
    "0": "\0"
  }[c] ?? c));

/* ------------------------------------------------------------------ */
/* String helpers                                                      */
/* ------------------------------------------------------------------ */

function splitTop(s, sep) {
  const parts = [];
  let cur = "";
  let depth = 0;
  let q = null;

  for (let i = 0; i < s.length; i++) {
    const c = s[i];

    if (q) {
      cur += c;

      if (c === "\\") {
        cur += s[++i] ?? "";
      } else if (c === q) {
        q = null;
      }

      continue;
    }

    if (c === '"' || c === "'") {
      q = c;
      cur += c;
      continue;
    }

    if (c === "(") depth++;
    else if (c === ")") depth--;

    if (c === sep && depth === 0) {
      parts.push(cur);
      cur = "";
      continue;
    }

    cur += c;
  }

  parts.push(cur);
  return parts;
}

// Index of the ")" that closes the "(" at `open`, or -1.
function matchParen(s, open) {
  let depth = 0;
  let q = null;

  for (let i = open; i < s.length; i++) {
    const c = s[i];

    if (q) {
      if (c === "\\") i++;
      else if (c === q) q = null;
      continue;
    }

    if (c === '"' || c === "'") {
      q = c;
      continue;
    }

    if (c === "(") depth++;
    else if (c === ")" && --depth === 0) return i;
  }

  return -1;
}

// Finds the last top-level binary operator from `ops` (left-associative).
function findOp(e, ops) {
  let depth = 0;
  let q = null;
  let found = null;

  for (let i = 0; i < e.length; i++) {
    const c = e[i];

    if (q) {
      if (c === "\\") i++;
      else if (c === q) q = null;
      continue;
    }

    if (c === '"' || c === "'") {
      q = c;
      continue;
    }

    if (c === "(") {
      depth++;
      continue;
    }

    if (c === ")") {
      depth--;
      continue;
    }

    if (depth !== 0) continue;

    // Skip ++ and --
    if ((c === "+" || c === "-") && e[i + 1] === c) {
      i++;
      continue;
    }

    const op = ops.find((o) => e.startsWith(o, i));
    if (!op) continue;

    // Distinguish unary +/- from binary +/-
    if (op === "+" || op === "-") {
      let j = i - 1;
      while (j >= 0 && /\s/.test(e[j])) j--;

      if (j < 0) continue;

      const afterPostfix =
        (e[j] === "+" || e[j] === "-") && e[j - 1] === e[j];

      if (!afterPostfix && "+-*/%(<>=!&|?:".includes(e[j])) continue;
    }

    found = { i, op };
    i += op.length - 1;
  }

  return found;
}

// Splits `cond ? a : b` at the top level, or returns null.
function splitTernary(e) {
  let depth = 0;
  let q = null;
  let qm = -1;
  let nest = 0;

  for (let i = 0; i < e.length; i++) {
    const c = e[i];

    if (q) {
      if (c === "\\") i++;
      else if (c === q) q = null;
      continue;
    }

    if (c === '"' || c === "'") {
      q = c;
      continue;
    }

    if (c === "(") depth++;
    else if (c === ")") depth--;
    else if (depth === 0) {
      if (c === "?") {
        if (qm < 0) qm = i;
        else nest++;
      } else if (c === ":" && qm >= 0) {
        if (nest === 0) {
          return [e.slice(0, qm), e.slice(qm + 1, i), e.slice(i + 1)];
        }
        nest--;
      }
    }
  }

  return null;
}

// Splits "target.method(args)" where the call closes at the very end.
function splitCall(a) {
  if (!a.endsWith(")")) return null;

  let depth = 0;
  let q = null;

  for (let i = 0; i < a.length; i++) {
    const c = a[i];

    if (q) {
      if (c === "\\") i++;
      else if (c === q) q = null;
      continue;
    }

    if (c === '"' || c === "'") {
      q = c;
      continue;
    }

    if (c === "(") {
      depth++;
      continue;
    }

    if (c === ")") {
      depth--;
      continue;
    }

    if (c === "." && depth === 0) {
      const m = /^\.([A-Za-z_]\w*)\(/.exec(a.slice(i));

      if (m) {
        const open = i + m[0].length - 1;

        if (matchParen(a, open) === a.length - 1) {
          return {
            target: a.slice(0, i),
            name: m[1],
            args: a.slice(open + 1, -1)
          };
        }
      }
    }
  }

  return null;
}

/* ------------------------------------------------------------------ */
/* printf / String.format                                              */
/* ------------------------------------------------------------------ */

function format(fmt, args) {
  if (typeof fmt !== "string") {
    throw new Error("error: format string must be a String");
  }

  let k = 0;

  return fmt.replace(
    /%(-?)(0?)(\d+)?(?:\.(\d+))?([sdfbcn%])/g,
    (m, left, zero, w, p, t) => {
      if (t === "%") return "%";
      if (t === "n") return "\n";

      if (k >= args.length) {
        throw new Error(
          `java.util.MissingFormatArgumentException: Format specifier '${m}'`
        );
      }

      const a = args[k++];
      let s;

      if (t === "d") {
        if (typeof a !== "number") {
          throw new Error(
            "java.util.IllegalFormatConversionException: d != " +
            (a instanceof Dbl ? "java.lang.Double" : "java.lang.String")
          );
        }

        s = String(a);
      } else if (t === "f") {
        if (!isNum(a)) {
          throw new Error(
            "java.util.IllegalFormatConversionException: f != java.lang.String"
          );
        }

        s = num(a).toFixed(p === undefined ? 6 : +p);
      } else if (t === "b") {
        s = a === null ? "false" : typeof a === "boolean" ? String(a) : "true";
      } else {
        s = str(a);
      }

      if (!w) return s;
      if (left) return s.padEnd(+w);

      if (zero && (t === "d" || t === "f")) {
        return s.startsWith("-")
          ? "-" + s.slice(1).padStart(+w - 1, "0")
          : s.padStart(+w, "0");
      }

      return s.padStart(+w);
    }
  );
}

/* ------------------------------------------------------------------ */
/* Parsing: source -> block tree                                       */
/* ------------------------------------------------------------------ */

function stripComments(src) {
  let out = "";
  let q = null;

  for (let i = 0; i < src.length; i++) {
    const c = src[i];

    if (q) {
      out += c;

      if (c === "\\") out += src[++i] ?? "";
      else if (c === q) q = null;

      continue;
    }

    if (c === '"' || c === "'") {
      q = c;
      out += c;
      continue;
    }

    if (c === "/" && src[i + 1] === "/") {
      while (i < src.length && src[i] !== "\n") i++;
      out += "\n";
      continue;
    }

    if (c === "/" && src[i + 1] === "*") {
      const end = src.indexOf("*/", i + 2);
      i = end < 0 ? src.length : end + 1;
      out += " ";
      continue;
    }

    out += c;
  }

  return out;
}

/**
 * Node types:
 *  { type: "simple", text }
 *  { type: "block", body: [...] }
 *  { type: "if", cond, then, els }
 *  { type: "while", cond, body }
 *  { type: "do", cond, body }
 *  { type: "for", init, cond, update, body }
 *  { type: "empty" }
 */
function parseProgram(source) {
  const code = stripComments(source);
  const m = code.search(/void\s+main\s*\(/);

  if (m < 0) throw new Error("No main method found");

  const open = code.indexOf("{", m);
  if (open < 0) throw new Error("error: '{' expected");

  let i = open + 1;

  const ws = () => {
    while (i < code.length && /\s/.test(code[i])) i++;
  };

  const peekWord = () => /^[A-Za-z_]\w*/.exec(code.slice(i, i + 24))?.[0];

  const readParens = () => {
    ws();

    if (code[i] !== "(") throw new Error("error: '(' expected");

    const close = matchParen(code, i);
    if (close < 0) throw new Error("error: ')' expected");

    const inner = code.slice(i + 1, close);
    i = close + 1;
    return inner;
  };

  // Reads up to the next top-level ";"
  const readSimple = () => {
    let cur = "";
    let q = null;
    let paren = 0;

    for (; i < code.length; i++) {
      const c = code[i];

      if (q) {
        cur += c;

        if (c === "\\") cur += code[++i] ?? "";
        else if (c === q) q = null;

        continue;
      }

      if (c === '"' || c === "'") {
        q = c;
        cur += c;
        continue;
      }

      if (c === "(") paren++;
      else if (c === ")") paren--;

      if (c === ";" && paren === 0) {
        i++;
        return cur.trim();
      }

      cur += c;
    }

    throw new Error("error: ';' expected");
  };

  const parseBlockBody = () => {
    const body = [];

    for (;;) {
      ws();

      if (i >= code.length) {
        throw new Error("error: reached end of file while parsing");
      }

      if (code[i] === "}") {
        i++;
        return { type: "block", body };
      }

      body.push(parseStmt());
    }
  };

  const parseStmt = () => {
    ws();

    if (i >= code.length) {
      throw new Error("error: reached end of file while parsing");
    }

    const c = code[i];

    if (c === "{") {
      i++;
      return parseBlockBody();
    }

    if (c === ";") {
      i++;
      return { type: "empty" };
    }

    const w = peekWord();

    if (w === "if") {
      i += 2;
      const cond = readParens();
      const then = parseStmt();

      ws();

      let els = null;

      if (peekWord() === "else") {
        i += 4;
        els = parseStmt();
      }

      return { type: "if", cond, then, els };
    }

    if (w === "while") {
      i += 5;
      const cond = readParens();
      const body = parseStmt();
      return { type: "while", cond, body };
    }

    if (w === "do") {
      i += 2;
      const body = parseStmt();

      ws();

      if (peekWord() !== "while") {
        throw new Error("error: 'while' expected");
      }

      i += 5;
      const cond = readParens();

      ws();

      if (code[i] !== ";") throw new Error("error: ';' expected");
      i++;

      return { type: "do", cond, body };
    }

    if (w === "for") {
      i += 3;
      const head = readParens();
      const parts = splitTop(head, ";");

      if (parts.length !== 3) {
        throw new Error(
          "error: only for (init; condition; update) loops are supported"
        );
      }

      const body = parseStmt();

      return {
        type: "for",
        init: parts[0].trim(),
        cond: parts[1].trim(),
        update: parts[2].trim(),
        body
      };
    }

    if (w === "switch") {
      i += 6;
      const subject = readParens();

      ws();

      if (code[i] !== "{") throw new Error("error: '{' expected");
      i++;

      const cases = [];
      let arrow = null;

      for (;;) {
        ws();

        if (i >= code.length) {
          throw new Error("error: reached end of file while parsing");
        }

        if (code[i] === "}") {
          i++;
          break;
        }

        const kw = peekWord();

        if (kw === "case") i += 4;
        else if (kw === "default") i += 7;
        else throw new Error("error: case, default, or '}' expected");

        // Read the label text up to ':' or '->'
        let text = "";
        let q = null;
        let depth = 0;
        let isArrow = false;

        for (;; i++) {
          if (i >= code.length) {
            throw new Error("error: ':' or '->' expected");
          }

          const ch = code[i];

          if (q) {
            text += ch;

            if (ch === "\\") text += code[++i] ?? "";
            else if (ch === q) q = null;

            continue;
          }

          if (ch === '"' || ch === "'") {
            q = ch;
            text += ch;
            continue;
          }

          if (ch === "(") depth++;
          else if (ch === ")") depth--;

          if (depth === 0 && ch === ":") {
            i++;
            break;
          }

          if (depth === 0 && ch === "-" && code[i + 1] === ">") {
            i += 2;
            isArrow = true;
            break;
          }

          text += ch;
        }

        let labels = null;

        if (kw === "case") {
          labels = splitTop(text, ",").map((x) => x.trim()).filter(Boolean);

          if (!labels.length) throw new Error("error: constant expression required");
        } else if (text.trim() !== "") {
          throw new Error("error: ':' or '->' expected after default");
        }

        if (arrow === null) arrow = isArrow;
        else if (arrow !== isArrow) {
          throw new Error("error: different case kinds used in the switch");
        }

        const body = [];

        if (isArrow) {
          body.push(parseStmt());
        } else {
          for (;;) {
            ws();

            if (i >= code.length) {
              throw new Error("error: reached end of file while parsing");
            }

            if (code[i] === "}") break;

            const nw = peekWord();
            if (nw === "case" || nw === "default") break;

            body.push(parseStmt());
          }
        }

        cases.push({ labels, body });
      }

      return { type: "switch", subject, arrow: !!arrow, cases };
    }

    if (w === "try") {
      throw new Error(`error: '${w}' statements are not supported yet`);
    }

    return { type: "simple", text: readSimple() };
  };

  return parseBlockBody();
}

/* ------------------------------------------------------------------ */
/* Interpreter                                                         */
/* ------------------------------------------------------------------ */

export function runJava(source, stdin = "", options = {}) {
  const maxSteps = options.maxSteps ?? 500000;
  const maxOutput = options.maxOutput ?? 1000000;

  let out = "";
  let pos = 0;
  let steps = 0;

  // In a real console the user presses Enter after the last value, so
  // non-empty input always ends with a newline.
  let input = stdin.replace(/\r\n?/g, "\n");
  if (input !== "" && !input.endsWith("\n")) input += "\n";

  let lastTokenEchoedNewline = false;

  /* ---- variables (block scoped) ---- */

  const scopes = [new Map()];

  const findVar = (name) => {
    for (let k = scopes.length - 1; k >= 0; k--) {
      if (scopes[k].has(name)) return scopes[k].get(name);
    }

    return undefined;
  };

  const getVar = (name) => {
    const v = findVar(name);

    if (!v) throw new Error("error: cannot find symbol: variable " + name);

    if (v.value === UNSET) {
      throw new Error(
        "error: variable " + name + " might not have been initialized"
      );
    }

    return v.value;
  };

  const declare = (name, type, value) => {
    if (findVar(name)) {
      throw new Error(
        `error: variable ${name} is already defined in method main(String[])`
      );
    }

    scopes[scopes.length - 1].set(name, { type, value });
  };

  // Applies Java's assignment conversion rules for the declared type.
  const coerce = (type, v, narrow = false) => {
    if (v === null || v === UNSET) return v;

    const bad = () =>
      new Error(
        `error: incompatible types: ${typeName(v)} cannot be converted to ${type}`
      );

    if (FLOATS.has(type)) {
      if (!isNum(v)) throw bad();
      return v instanceof Dbl ? v : new Dbl(v);
    }

    if (INTS.has(type)) {
      if (v instanceof Dbl) {
        if (narrow) return Math.trunc(v.v);

        throw new Error(
          `error: incompatible types: possible lossy conversion from double to ${type}`
        );
      }

      if (typeof v !== "number") throw bad();
      return v;
    }

    if (type === "String" && typeof v !== "string") throw bad();
    if ((type === "boolean" || type === "Boolean") && typeof v !== "boolean") {
      throw bad();
    }

    return v;
  };

  const tick = () => {
    if (++steps > maxSteps) {
      throw new Error(
        "Execution stopped: too many loop iterations (possible infinite loop)"
      );
    }

    if (out.length > maxOutput) {
      throw new Error("Execution stopped: too much output");
    }
  };

  /* ---- Scanner ---- */

  // Scanner.nextLine()
  const nextLine = () => {
    if (pos >= input.length) {
      throw new Error(
        'Exception in thread "main" java.util.NoSuchElementException: No line found'
      );
    }

    const end = input.indexOf("\n", pos);

    const line = end < 0 ? input.slice(pos) : input.slice(pos, end);

    pos = end < 0 ? input.length : end + 1;

    // Avoid displaying the same newline twice.
    if (!(line === "" && lastTokenEchoedNewline)) {
      out += line + "\n";
    }

    lastTokenEchoedNewline = false;

    return line;
  };

  // Scanner.next()
  const nextToken = () => {
    lastTokenEchoedNewline = false;

    while (pos < input.length && /\s/.test(input[pos])) {
      pos++;
    }

    if (pos >= input.length) {
      throw new Error(
        'Exception in thread "main" java.util.NoSuchElementException'
      );
    }

    const s = pos;

    while (pos < input.length && !/\s/.test(input[pos])) {
      pos++;
    }

    const token = input.slice(s, pos);
    const delimiter = input[pos];

    out += token;

    if (delimiter === "\n" || pos >= input.length) {
      out += "\n";
      lastTokenEchoedNewline = true;
    } else if (delimiter) {
      out += delimiter;
    }

    return token;
  };

  // Look at the next token without consuming it (for hasNextXxx).
  const peekToken = () => {
    let p = pos;

    while (p < input.length && /\s/.test(input[p])) p++;

    const s = p;

    while (p < input.length && !/\s/.test(input[p])) p++;

    return input.slice(s, p);
  };

  const scannerCall = (name) => {
    switch (name) {
      case "nextLine":
        return nextLine();

      case "next":
        return nextToken();

      case "nextInt": {
        const t = nextToken();

        if (!/^[+-]?\d+$/.test(t)) {
          throw new Error(
            'Exception in thread "main" java.util.InputMismatchException: For input string: "' +
            t + '"'
          );
        }

        return parseInt(t, 10);
      }

      case "nextDouble": {
        const t = nextToken();

        if (isNaN(Number(t))) {
          throw new Error(
            'Exception in thread "main" java.util.InputMismatchException: For input string: "' +
            t + '"'
          );
        }

        return new Dbl(Number(t));
      }

      case "hasNext":
        return peekToken() !== "";

      case "hasNextInt":
        return /^[+-]?\d+$/.test(peekToken());

      case "hasNextDouble": {
        const t = peekToken();
        return t !== "" && !isNaN(Number(t));
      }

      case "hasNextLine":
        return pos < input.length;
    }

    throw new Error("error: cannot find symbol: method " + name);
  };

  /* ---- operators ---- */

  const bool = (v) => {
    if (typeof v !== "boolean") {
      throw new Error(
        `error: incompatible types: ${typeName(v)} cannot be converted to boolean`
      );
    }

    return v;
  };

  const arith = (op, l, r) => {
    if (op === "+" && !(isNum(l) && isNum(r))) {
      return str(l) + str(r);
    }

    if (!isNum(l) || !isNum(r)) {
      throw new Error(
        `error: bad operand types for binary operator '${op}'`
      );
    }

    const dbl = l instanceof Dbl || r instanceof Dbl;
    const a = num(l);
    const b = num(r);
    let v;

    switch (op) {
      case "+":
        v = a + b;
        break;

      case "-":
        v = a - b;
        break;

      case "*":
        v = a * b;
        break;

      case "/":
        if (!dbl) {
          if (b === 0) {
            throw new Error(
              'Exception in thread "main" java.lang.ArithmeticException: / by zero'
            );
          }

          v = Math.trunc(a / b);
        } else {
          v = a / b;
        }
        break;

      case "%":
        if (!dbl && b === 0) {
          throw new Error(
            'Exception in thread "main" java.lang.ArithmeticException: / by zero'
          );
        }

        v = a % b;
        break;
    }

    return dbl ? new Dbl(v) : v;
  };

  const compare = (op, l, r) => {
    let a;
    let b;

    if (isNum(l) && isNum(r)) {
      a = num(l);
      b = num(r);
    } else if (typeof l === "string" && typeof r === "string") {
      a = l;
      b = r;
    } else {
      throw new Error(
        `error: bad operand types for binary operator '${op}'`
      );
    }

    switch (op) {
      case "<":
        return a < b;
      case ">":
        return a > b;
      case "<=":
        return a <= b;
      default:
        return a >= b;
    }
  };

  const equal = (l, r) =>
    isNum(l) && isNum(r) ? num(l) === num(r) : l === r;

  const updateVar = (name, delta, prefix) => {
    const ref = findVar(name);
    const old = getVar(name);

    if (!isNum(old)) {
      throw new Error("error: bad operand type for unary operator '++'/'--'");
    }

    ref.value = old instanceof Dbl ? new Dbl(old.v + delta) : old + delta;

    return prefix ? ref.value : old;
  };

  /* ---- methods ---- */

  const callStatic = (cls, name, a) => {
    switch (cls + "." + name) {
      case "String.format":
        return format(a[0], a.slice(1));

      case "String.valueOf":
        return str(a[0]);

      case "Math.abs":
        return a[0] instanceof Dbl
          ? new Dbl(Math.abs(a[0].v))
          : Math.abs(a[0]);

      case "Math.max":
      case "Math.min": {
        const f = name === "max" ? Math.max : Math.min;
        const r = f(num(a[0]), num(a[1]));
        return a[0] instanceof Dbl || a[1] instanceof Dbl ? new Dbl(r) : r;
      }

      case "Math.pow":
        return new Dbl(Math.pow(num(a[0]), num(a[1])));

      case "Math.sqrt":
        return new Dbl(Math.sqrt(num(a[0])));

      case "Math.floor":
        return new Dbl(Math.floor(num(a[0])));

      case "Math.ceil":
        return new Dbl(Math.ceil(num(a[0])));

      case "Math.round":
        return Math.round(num(a[0]));

      case "Math.random":
        return new Dbl(Math.random());

      case "Integer.parseInt": {
        const s = a[0];

        if (typeof s !== "string" || !/^[+-]?\d+$/.test(s)) {
          throw new Error(
            'Exception in thread "main" java.lang.NumberFormatException: For input string: "' +
            str(s) + '"'
          );
        }

        return parseInt(s, 10);
      }

      case "Double.parseDouble": {
        const s = a[0];
        const n = typeof s === "string" && s.trim() !== "" ? Number(s) : NaN;

        if (isNaN(n)) {
          throw new Error(
            'Exception in thread "main" java.lang.NumberFormatException: For input string: "' +
            str(s) + '"'
          );
        }

        return new Dbl(n);
      }
    }

    throw new Error(`error: cannot find symbol: method ${name} in ${cls}`);
  };

  const callString = (s, name, a) => {
    if (s === null || s === undefined) {
      throw new Error(
        'Exception in thread "main" java.lang.NullPointerException'
      );
    }

    if (typeof s !== "string") {
      throw new Error("error: cannot find symbol: method " + name);
    }

    switch (name) {
      case "length":
        return s.length;

      case "charAt": {
        const k = num(a[0]);

        if (k < 0 || k >= s.length) {
          throw new Error(
            `Exception in thread "main" java.lang.StringIndexOutOfBoundsException: Index ${k} out of bounds for length ${s.length}`
          );
        }

        return s[k];
      }

      case "equals":
        return s === a[0];

      case "equalsIgnoreCase":
        return typeof a[0] === "string" && s.toLowerCase() === a[0].toLowerCase();

      case "isEmpty":
        return s.length === 0;

      case "toUpperCase":
        return s.toUpperCase();

      case "toLowerCase":
        return s.toLowerCase();

      case "trim":
        return s.trim();

      case "contains":
        return s.includes(a[0]);

      case "startsWith":
        return s.startsWith(a[0]);

      case "endsWith":
        return s.endsWith(a[0]);

      case "indexOf":
        return s.indexOf(a[0]);

      case "replace":
        return s.split(a[0]).join(a[1]);

      case "repeat":
        return s.repeat(num(a[0]));

      case "substring": {
        const b = num(a[0]);
        const e = a.length > 1 ? num(a[1]) : s.length;

        if (b < 0 || e > s.length || b > e) {
          throw new Error(
            `Exception in thread "main" java.lang.StringIndexOutOfBoundsException: begin ${b}, end ${e}, length ${s.length}`
          );
        }

        return s.slice(b, e);
      }

      case "compareTo": {
        const t = a[0];
        const n = Math.min(s.length, t.length);

        for (let k = 0; k < n; k++) {
          if (s[k] !== t[k]) return s.charCodeAt(k) - t.charCodeAt(k);
        }

        return s.length - t.length;
      }
    }

    throw new Error("error: cannot find symbol: method " + name);
  };

  /* ---- expressions ---- */

  // Evaluate individual values.
  const evalAtom = (raw) => {
    const a = raw.trim();
    let m;

    // String literals
    if ((m = a.match(/^"([\s\S]*)"$/))) {
      return unescape(m[1]);
    }

    // Character literals
    if ((m = a.match(/^'([\s\S]*)'$/))) {
      return unescape(m[1]);
    }

    // Numbers, including float/double/long suffixes
    if ((m = a.match(/^(-?\d+(?:\.\d+)?)([fFdDlL]?)$/))) {
      const n = Number(m[1]);
      return m[1].includes(".") || /[fFdD]/.test(m[2]) ? new Dbl(n) : n;
    }

    if (a === "true") return true;
    if (a === "false") return false;
    if (a === "null") return null;

    // Casts: (int) x, (double) x, ...
    if (
      (m = a.match(
        /^\(\s*(int|long|short|byte|double|float|char)\s*\)\s*([\s\S]+)$/
      ))
    ) {
      let v = evalExpr(m[2]);

      if (typeof v === "string" && v.length === 1 && m[1] !== "char") {
        v = v.charCodeAt(0);
      }

      switch (m[1]) {
        case "double":
        case "float":
          return new Dbl(num(v));

        case "char":
          return typeof v === "string"
            ? v
            : String.fromCharCode(Math.trunc(num(v)));

        default:
          return Math.trunc(num(v));
      }
    }

    // Parentheses
    if (a[0] === "(" && matchParen(a, 0) === a.length - 1) {
      return evalExpr(a.slice(1, -1));
    }

    // i++ / i--
    if ((m = a.match(/^([A-Za-z_]\w*)(\+\+|--)$/))) {
      return updateVar(m[1], m[2] === "++" ? 1 : -1, false);
    }

    // ++i / --i
    if ((m = a.match(/^(\+\+|--)([A-Za-z_]\w*)$/))) {
      return updateVar(m[2], m[1] === "++" ? 1 : -1, true);
    }

    // Method calls: Math.max(..), String.format(..), sc.nextInt(), s.length()
    const call = splitCall(a);

    if (call) {
      const { target, name, args } = call;

      const argv = () =>
        args.trim() ? splitTop(args, ",").map(evalExpr) : [];

      if (STATIC_CLASSES.has(target)) {
        return callStatic(target, name, argv());
      }

      if (
        /^[A-Za-z_]\w*$/.test(target) &&
        !findVar(target) &&
        SCANNER_METHODS.has(name) &&
        !args.trim()
      ) {
        return scannerCall(name);
      }

      return callString(evalExpr(target), name, argv());
    }

    // Variables
    if (/^[A-Za-z_]\w*$/.test(a)) {
      return getVar(a);
    }

    throw new Error("Unsupported expression: " + a);
  };

  const evalExpr = (expression) => {
    const e = expression.trim();
    let m;

    // Assignment (also usable inside expressions)
    if ((m = e.match(ASSIGN))) {
      const [, name, op, rhs] = m;
      const ref = findVar(name);

      if (!ref) throw new Error("error: cannot find symbol: variable " + name);

      let val = evalExpr(rhs);

      if (op !== "=") val = arith(op[0], getVar(name), val);

      ref.value = coerce(ref.type, val, op !== "=");
      return ref.value;
    }

    // Ternary
    const t = splitTernary(e);

    if (t) {
      return bool(evalExpr(t[0])) ? evalExpr(t[1]) : evalExpr(t[2]);
    }

    // Binary operators, lowest precedence first
    for (const ops of LEVELS) {
      const f = findOp(e, ops);

      if (!f) continue;

      const left = evalExpr(e.slice(0, f.i));
      const rightSrc = e.slice(f.i + f.op.length);

      switch (f.op) {
        case "||":
          return bool(left) ? true : bool(evalExpr(rightSrc));

        case "&&":
          return !bool(left) ? false : bool(evalExpr(rightSrc));

        case "==":
          return equal(left, evalExpr(rightSrc));

        case "!=":
          return !equal(left, evalExpr(rightSrc));

        case "<":
        case ">":
        case "<=":
        case ">=":
          return compare(f.op, left, evalExpr(rightSrc));

        default:
          return arith(f.op, left, evalExpr(rightSrc));
      }
    }

    // Unary operators
    if (e[0] === "!" && e[1] !== "=") {
      return !bool(evalExpr(e.slice(1)));
    }

    if (e[0] === "-" && e[1] !== "-") {
      const v = evalExpr(e.slice(1));

      if (!isNum(v)) {
        throw new Error("error: bad operand type for unary operator '-'");
      }

      return v instanceof Dbl ? new Dbl(-v.v) : -v;
    }

    if (e[0] === "+" && e[1] !== "+") {
      return evalExpr(e.slice(1));
    }

    return evalAtom(e);
  };

  const cond = (text) => bool(evalExpr(text));

  /* ---- statements ---- */

  const execSimple = (st) => {
    let m;

    if (!st) return null;

    // Ignore Scanner declarations.
    if (/^Scanner\b/.test(st)) return null;

    if (st === "break") return BREAK;
    if (st === "continue") return CONTINUE;
    if (/^return\b/.test(st)) return RETURN;

    // System.out.print / println / printf
    if (
      (m = st.match(
        /^System\.out\.(print|println|printf)\s*\(([\s\S]*)\)$/
      ))
    ) {
      const args = m[2].trim() ? splitTop(m[2], ",") : [];

      if (m[1] === "printf") {
        out += format(
          evalExpr(args[0]),
          args.slice(1).map(evalExpr)
        );
      } else {
        out +=
          (args.length ? str(evalExpr(args[0])) : "") +
          (m[1] === "println" ? "\n" : "");
      }

      return null;
    }

    // Variable declarations (int a = 1, b = 2;)
    if ((m = st.match(DECL))) {
      for (const part of splitTop(m[2], ",")) {
        const d = part
          .trim()
          .match(/^([A-Za-z_]\w*)(?:\s*=\s*([\s\S]+))?$/);

        if (!d) throw new Error("Unsupported declaration: " + part.trim());

        const val = d[2] === undefined ? UNSET : evalExpr(d[2]);
        const type = m[1] === "var" ? typeName(val) : m[1];

        declare(d[1], type, coerce(type, val));
      }

      return null;
    }

    // Assignments, ++/--, method calls, ...
    evalExpr(st);
    return null;
  };

  // for-loop init / update lists: "i = 0, j = 10" or "int i = 0, j = 10"
  const runList = (text) => {
    if (!text) return;

    if (DECL.test(text)) {
      execSimple(text);
    } else {
      for (const part of splitTop(text, ",")) execSimple(part.trim());
    }
  };

  const execBlock = (body) => {
    scopes.push(new Map());

    try {
      for (const s of body) {
        const sig = exec(s);
        if (sig) return sig;
      }

      return null;
    } finally {
      scopes.pop();
    }
  };

  const exec = (n) => {
    switch (n.type) {
      case "empty":
        return null;

      case "simple":
        return execSimple(n.text);

      case "block":
        return execBlock(n.body);

      case "if":
        if (cond(n.cond)) return exec(n.then);
        return n.els ? exec(n.els) : null;

      case "while":
        while (cond(n.cond)) {
          tick();

          const sig = exec(n.body);

          if (sig === BREAK) break;
          if (sig === RETURN) return sig;
        }

        return null;

      case "do":
        do {
          tick();

          const sig = exec(n.body);

          if (sig === BREAK) break;
          if (sig === RETURN) return sig;
        } while (cond(n.cond));

        return null;

      case "switch": {
        const v = evalExpr(n.subject);
        let start = -1;
        let def = -1;

        find: for (let k = 0; k < n.cases.length; k++) {
          const c = n.cases[k];

          if (c.labels === null) {
            def = k;
            continue;
          }

          for (const l of c.labels) {
            if (equal(v, evalExpr(l))) {
              start = k;
              break find;
            }
          }
        }

        if (start < 0) start = def;
        if (start < 0) return null;

        scopes.push(new Map());

        try {
          // Classic switches fall through until a break; arrow cases never do.
          for (let k = start; k < n.cases.length; k++) {
            for (const st of n.cases[k].body) {
              const sig = exec(st);

              if (sig === BREAK) return null;
              if (sig) return sig;
            }

            if (n.arrow) break;
          }

          return null;
        } finally {
          scopes.pop();
        }
      }

      case "for":
        scopes.push(new Map());

        try {
          runList(n.init);

          while (n.cond === "" || cond(n.cond)) {
            tick();

            const sig = exec(n.body);

            if (sig === BREAK) break;
            if (sig === RETURN) return sig;

            runList(n.update);
          }
        } finally {
          scopes.pop();
        }

        return null;
    }

    throw new Error("Unsupported statement");
  };

  try {
    const program = parseProgram(source);
    const sig = execBlock(program.body);

    if (sig === BREAK || sig === CONTINUE) {
      throw new Error("error: break/continue outside of a loop");
    }

    return {
      output: out,
      error: null
    };

  } catch (e) {
    return {
      output: out,
      error: e.message
    };
  }
}