const out = String.raw;

// TODO: replace this sample with your real Final Term activities (same shape as javaActivities.js)
export const FINAL_ACTIVITIES = [
{
    tag: "JAVA", title: "if Statement Activity", due: "10/19/2026, 05:40 PM",
    items: [
      { name: "Item 1", input: "5\n5\n5", code: out`import java.util.*;

public class Main{
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        
        int x, y, z;
        
        System.out.print("Enter x: ");
        x = sc.nextInt();
        
        System.out.print("Enter y: ");
        y = sc.nextInt();
        
        System.out.print("Enter z: ");
        z = sc.nextInt();
        
        if(x == y && x == z ){
          System.out.print("Triangle is equilateral.");
        }
    }
}` 

},
      { name: "Item 2", input: "3\n4", code: out`import java.util.*;

public class Main{
    public static void main(String[] args){
        
        Scanner sc = new Scanner(System.in);
        
        System.out.print("Enter first number: ");
        int first_num = sc.nextInt();
        
        System.out.print("Enter second number: ");
        int second_num = sc.nextInt();
        
        if(first_num <= 0 && second_num <0 ){
           System.out.print("Numbers have the same sign.");  
        }
        
        if(!(first_num <= 0) && !(second_num <0) ){
           System.out.print("Numbers have the same sign.");  
        }
    }
}` },
      { name: "Item 3", input: "#", code: out`import java.util.*;

public class Main{
    public static void main(String[] args){
        
        Scanner sc = new Scanner(System.in);
        
        System.out.print("Enter character: ");
        char karakter = sc.next().charAt(0);
        
        if(!Character.isLetterOrDigit(karakter)){
           System.out.print("Character is a special character.");
        }
    }
}` },
      { name: "Item 4", input: "2024", code: out`import java.util.*;

public class Main{
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        
        System.out.print("Enter the year: ");
        int year = sc.nextInt();

        
        if((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) {
           System.out.print("Year is a leap year.");  
        }
    }
}` },
      { name: "Item 5", input: "7\n7", code: out`import java.util.*;

public class Main{
    public static void main(String[] args){
        
        Scanner sc = new Scanner(System.in);
        
        int x;
        int y;
        
        System.out.print("Enter x: ");
        x = sc.nextInt();
        
        System.out.print("Enter y: ");
        y = sc.nextInt();
        
        if(x == y){
            System.out.print("Numbers are equal.");
        }
    }
}` },
    ],
  },

{
    tag: "JAVA",
    title: "if...else Statement Activity",
    due: "10/19/2026, 06:40 PM",
    items: [
      {
        name: "Item 1",
        input: "2000\n2026",
        code: out`import java.util.*;

public class Main{
    public static void main(String[] args){
        
        Scanner sc = new Scanner(System.in);
        
        System.out.print("Enter your birth year: ");
        int birth_year = sc.nextInt();
        
        System.out.print("Enter the current year: ");
        int current_year = sc.nextInt();
        
        int age = current_year - birth_year;
        double square_root_age = Math.sqrt(age);
        
        if(square_root_age == (int) square_root_age){
            System.out.print("Your age is a perfect square.");
        }
        
        else{
            System.out.print("Your age is not a perfect square.");
        }
    }
}`
      },
      {
        name: "Item 2",
        input: "12\n25",
        code: out`import java.util.*;

public class Main{
    public static void main(String[] args){
        
        Scanner sc = new Scanner(System.in);
        
        System.out.print("Enter your birth month: ");
        int birth_month = sc.nextInt();
        
        System.out.print("Enter your birth day: ");
        int birth_day = sc.nextInt();
        
        if((birth_month == 12 && birth_day >= 22) || (birth_month == 1 && birth_day <= 19)){
            System.out.print("Your zodiac sign is Capricorn.");
        }
        
        else{
            System.out.print("Your zodiac sign is not Capricorn.");
        }
    }
}`
      },
      {
        name: "Item 3",
        input: "18",
        code: out`import java.util.*;

public class Main{
    public static void main(String[] args){
        
        Scanner sc = new Scanner(System.in);
        
        System.out.print("Enter your age: ");
        int age = sc.nextInt();
        
        if(age >= 18){
            System.out.print("You are eligible to vote.");
        }
        
        else{
            System.out.print("You are not eligible to vote.");
        }
    }
}`
      },
      {
        name: "Item 4",
        input: "A",
        code: out`import java.util.*;

public class Main{
    public static void main(String[] args){
        
        Scanner sc = new Scanner(System.in);
        
        System.out.print("Enter a character: ");
        char kar = sc.next().charAt(0);
        
        if(
            kar == 'a' || kar == 'e' || kar == 'i' || kar == 'o' || kar == 'u' ||
            kar == 'A' || kar == 'E' || kar == 'I' || kar == 'O' || kar == 'U'
        ){
            System.out.print("The character is a vowel.");
        }
        
        else{
            System.out.print("The character is a consonant.");
        }
    }
}`
      },
      {
        name: "Item 5",
        input: "10\n10\n10",
        code: out`import java.util.*;

public class Main{
    public static void main(String[] args){
        
        Scanner sc = new Scanner(System.in);
        
        System.out.print("Enter first number: ");
        int first_num = sc.nextInt();
        
        System.out.print("Enter second number: ");
        int second_num = sc.nextInt();
        
        System.out.print("Enter third number: ");
        int third_num = sc.nextInt();
        
        if(first_num == second_num && first_num == third_num){
            System.out.print("All numbers are equal.");
        }
        
        else{
            System.out.print("Not all numbers are equal.");
        }
    }
}`
      },
    ],
  },

  {
    tag: "JAVA",
    title: "if...else if...else Statement Activity",
    due: "10/29/2026, 11:35 AM",
    items: [
      {
        name: "Item 1",
        input: "5\n-2\n8",
        code: out`import java.util.*;

public class Main{
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        
        System.out.print("Enter first number: ");
        int num1 = sc.nextInt();
        
        System.out.print("Enter second number: ");
        int num2 = sc.nextInt();
        
        System.out.print("Enter third number: ");
        int num3 = sc.nextInt();
        
        if((num1 > 0) && (num2 > 0) && (num3 > 0)){
            System.out.print("All numbers are positive.");
        }
        
        else if((num1 < 0) && (num2 < 0) && (num3 < 0)){
            System.out.print("All numbers are negative.");
        }
        
        else if((num1 % 2 == 0) && (num2 % 2 == 0) && (num3 % 2 == 0)){
            System.out.print("All numbers are even.");
        }
        
        else if(!(num1 % 2 == 0) && !(num2 % 2 == 0) && !(num3 % 2 == 0)){
            System.out.print("All numbers are odd.");
        }
        
        else{
            System.out.print("Numbers are different.");
        }
    }
}`
      },
      {
        name: "Item 2",
        input: "12",
        code: out`import java.util.*;

public class Main{
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        
        System.out.print("Enter an integer: ");
        int num1 = sc.nextInt();
        
        if(num1 % 4 == 0){
            System.out.print("The number is divisible by 4.");
        }
        
        else if(num1 % 3 == 0){
            System.out.print("The number is divisible by 3.");
        }
        
        else if(num1 % 2 == 0){
            System.out.print("The number is divisible by 2.");
        }
        
        else{
            System.out.print("The number is not divisible by 2, 3, or 4.");
        }
    }
}`
      },
      {
        name: "Item 3",
        input: "3",
        code: out`import java.util.*;

public class Main{
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        
        System.out.print("Enter day: ");
        int day = sc.nextInt();
        
        if(day == 1){
            System.out.print("Monday");
        }
        
        else if(day == 2){
            System.out.print("Tuesday");
        }
        
        else if(day == 3){
            System.out.print("Wendnesday");
        }
        
        else if(day == 4){
            System.out.print("Thursday");
        }
        
        else if(day == 5){
            System.out.print("Friday");
        }
        
        else if(day == 6){
            System.out.print("Saturday");
        }
        
        else if(day == 7){
            System.out.print("Sunday");
        }
        
        else{
            System.out.print("Invalid input");
        }
    }
}`
      },
      {
        name: "Item 4",
        input: "5\n-3\n0\n8\n-1",
        code: out`import java.util.*;

public class Main{
    public static void main(String[] args){
        
        Scanner sc = new Scanner(System.in);
        
        int psctr = 0;
        int ngctr = 0;
        int zeroctr = 0;
        
        System.out.print("Enter first integer: ");
        int num1 = sc.nextInt();
        sc.nextLine();
        
        System.out.print("Enter second integer: ");
        int num2 = sc.nextInt();
        sc.nextLine();
        
        System.out.print("Enter third integer: ");
        int num3 = sc.nextInt();
        sc.nextLine();
        
        System.out.print("Enter fourth integer: ");
        int num4 = sc.nextInt();
        sc.nextLine();
        
        System.out.print("Enter fifth integer: ");
        int num5 = sc.nextInt();
        sc.nextLine();
        
        if(num1 > 0){
            psctr++;
        }
        else if(num1 == 0){
            zeroctr++;
        }
        else{
            ngctr++;
        }
        
        if(num2 > 0){
            psctr++;
        }
        else if(num2 == 0){
            zeroctr++;
        }
        else{
            ngctr++;
        }
        
        if(num3 > 0){
            psctr++;
        }
        else if(num3 == 0){
            zeroctr++;
        }
        else{
            ngctr++;
        }
        
        if(num4 > 0){
            psctr++;
        }
        else if(num4 == 0){
            zeroctr++;
        }
        else{
            ngctr++;
        }
        
        if(num5 > 0){
            psctr++;
        }
        else if(num5 == 0){
            zeroctr++;
        }
        else{
            ngctr++;
        }
        
        System.out.printf(
            "Positive count: %d \n" +
            "Negative count: %d \n" +
            "Zero count: %d \n",
            psctr,
            ngctr,
            zeroctr
        );
    }
}`
      },
      {
        name: "Item 5",
        input: "1900",
        code: out`import java.util.*;

public class Main{
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        
        System.out.print("Enter a year: ");
        int year = sc.nextInt();
        
        if(year % 100 == 0){
            
            if(year % 400 == 0){
                System.out.print("It's a leap century year.");
            }
            
            else{
                System.out.print("It's a century year.");
            }
        }
        
        else if(year % 4 == 0){
            System.out.print("It's a leap year.");
        }
        
        else{
            System.out.print("It's neither a leap year nor a century year.");
        }
    }
}`
      },
    ],
  },

  {
    tag: "JAVA", title: "switch Statement Activity", due: "10/29/2026, 12:30 PM",
    items: [
      {
        name: "Item 1 (ARRAY IS NOT SUPPORTED!)", input: "Sunny", code: out`import java.util.*;

public class Main{
   public static void main(String[] args){
       Scanner sc = new Scanner(System.in);
       
       System.out.print("Enter the weather condition: ");
       char[] weathercond = sc.nextLine().toCharArray();
       
       char charletter = weathercond[0];
       
       switch (charletter){
           case 'S':
           System.out.print("Suggestion: Enjoy the sunshine");
           break;
           
           case 'C':
           System.out.print("Suggestion: Stay indoors");
           break;
           
           case 'R':
           System.out.print("Suggestion: Bring an umbrella");
           break;
           
           case'W':
           System.out.print("Suggestion: Fly a kite");
           break;
           
           default: System.out.print("Invalid weather condition.");
       }
   }
}`
      },
      {
        name: "Item 2", input: "Easy", code: out`import java.util.*;

public class Main{
   public static void main(String[] args){
       Scanner sc = new Scanner(System.in);
       
       System.out.print("Enter the difficulty level (Easy, Medium, Hard): ");
       String diff = sc.nextLine();
       
       switch (diff){
           case "Easy":
           System.out.print("Message: You selected Easy difficulty. Enjoy the game!");
           break;
           
           case "Medium":
           System.out.print("Message: You selected Medium difficulty. Get ready for a challenge!");
           break;
           
           case "Hard":
           System.out.print("Message: You selected Hard difficulty. Brace yourself for a tough gameplay!");
           break;
           
           default: System.out.print("Invalid difficulty level.");
           
       }
   }
}`
      },
      {
        name: "Item 3", input: "E\n5\n5\n5", code: out`import java.util.*;

public class Main{
   public static void main(String[] args){
       Scanner sc = new Scanner(System.in);
       
       System.out.print("Enter the triangle type identifier (E for Equilateral, I for Isosceles, S for Scalene): ");
       char id = sc.next().charAt(0);
       
       System.out.print("Enter the length of side 1: ");
       int side1 = sc.nextInt();
       System.out.print("Enter the length of side 2: ");
       int side2 = sc.nextInt();
       System.out.print("Enter the length of side 3: ");
       int side3 = sc.nextInt();
       
       
       switch (id){
           case 'E': 
           case 'e':
               if(side1 == side2  && side1 == side3 ){
                 System.out.print("The given sides form an Equilateral triangle.");
               }
               
               else{
                 System.out.print("The given sides do not form an Equilateral triangle.");
               }
           break;
           
           case 'I': 
           case 'i':
               if(side1 == side2  || side1 == side3 ){
                 System.out.print("The given sides form an Isosceles triangle.");
               }
               
               else{
                 System.out.print("The given sides do not form an Isosceles triangle.");
               }
           break;
           
           case 'S': 
           case 's':
               if(!(side1 == side2)  && !(side1 == side3) ){
                 System.out.print("The given sides form a Scalene triangle.");
               }
               
               else{
                 System.out.print("The given sides do not form a Scalene triangle.");
               }
           break;
           
           
       }
       
       
   }
}`
      },
      {
        name: "Item 4", input: "S", code: out`import java.util.*;

public class Main{
   public static void main(String[] args){
       Scanner sc = new Scanner(System.in);
       
       System.out.print("Enter the Quadrilateral type (S for Square, R for Rectangle, P for Parallelogram, T for Trapezoid): ");
       char id = sc.next().charAt(0);
       
       
       switch (id){
           case 'S': 
           case 's':
             System.out.print("Properties of a Square");
             System.out.print("-");
             System.out.print("Properties of a Square");
           break;
           
           case 'R': 
           case 'r':
            
           break;
           
           case 'P': 
           case 'p':
            
           break;
           
           case 'T': 
           case 't':
           
           break;
           
           
       }
       
       
   }
}`
      },
      {
        name: "Item 5", input: "1", code: out`import java.util.*;

public class Main{
   public static void main(String[] args){
       Scanner sc = new Scanner(System.in);
       
       System.out.print("Enter a number between 1 and 7: ");
       int day = sc.nextInt();
       
       switch (day){
           case 1:
           System.out.print("Monday");
           break;
           
           case 2:
           System.out.print("Tuesday");
           break;
           
           case 3:
           System.out.print("Wednesday");
           break;
           
           case 4:
           System.out.print("Thursday");
           break;
           
           case 5:
           System.out.print("Friday");
           break;
           
           case 6:
           System.out.print("Saturday");
           break;
           
           case 7:
           System.out.print("Sunday");
           break;
           
           
           default: System.out.print("Invalid input.");
           
       }
   }
}`
      },
    ],
  },
{
    tag: "JAVA", title: "While Loop Activity", due: "10/26/2026, 12:40 PM",
    items: [
      {
        name: "Item 1", input: "12345", code: out`import java.util.*;

public class Main{
   public static void main(String[] args){
       
       Scanner sc = new Scanner(System.in);
       int ctr = 0;
       
       System.out.print("Enter a positive integer: ");
       int number = sc.nextInt();
       
       while(number > 0){
           ctr++;
           number /= 10;
       }
       
       System.out.print("Number of digits: " + ctr);
       
   }
}`
      },
      {
        name: "Item 2", input: "5", code: out`import java.util.*;

public class Main{
   public static void main(String[] args){
       Scanner sc = new Scanner(System.in);
       int number;
       int numctr=0;
       
       System.out.print("Enter a number: ");
       number = sc.nextInt();
       
       while(number > 0){
           numctr++;
           System.out.println(numctr);
           
           number--;
       }
       
   }
}`
      },
      {
        name: "Item 3", input: "10", code: out`import java.util.*;

public class Main{
   public static void main(String[] args){
       
       Scanner sc = new Scanner(System.in);
       int posnum;
       int num=1;
       
       System.out.print("Enter a positive integer: ");
       posnum = sc.nextInt();
       
       while(num <= posnum){
           if(num % 2 == 0){
             System.out.println(num);
           }
           num++;
        }
   
   
       
   }
}`
      },
      {
        name: "Item 4", input: "5", code: out`import java.util.*;

public class Main{
   public static void main(String[] args){
       Scanner sc = new Scanner(System.in);
       int num;
       int ctr=1;
       
       System.out.print("Enter a number: ");
       num = sc.nextInt();
       
       while(ctr <= num){
           System.out.println(ctr*ctr);
           ctr++;
       }
       
   }
}`
      },
      {
        name: "Item 5", input: "12345", code: out`import java.util.*;

public class Main{
  public static void main(String[] args){
      Scanner sc = new Scanner(System.in);
      
      int sum = 0;
      int num;
      
      System.out.print("Enter an integer: ");
      num = sc.nextInt();
      
      
      
      while(num > 0){
          sum += num % 10;
          num /= 10;
      }
      
      System.out.print("Sum of digits: " + sum);
      
  }
}`
      },
    ],
  },

  {
    tag: "JAVA", title: "Do-while Loop Activity", due: "10/26/2026, 01:30 PM",
    items: [
      {
        name: "Item 1", input: "-5\n8\n0", code: out`import java.util.*;

public class Main{
   public static void main(String[] args){
       Scanner sc = new Scanner(System.in);
       int num;
       
       do{
       System.out.print("Enter an integer: ");
       num = sc.nextInt();
       
       if(num < 0){
           System.out.println("negative");
       }
       
       else if(num > 0){
          System.out.println("positive"); 
       }
       
       } while(num != 0);
       
   }
}`
      },
      {
        name: "Item 2", input: "12", code: out`import java.util.*;

public class Main{
   public static void main(String[] args){
       Scanner sc = new Scanner(System.in);
       
       int num;
       int ctr=1;
       System.out.print("Enter an integer: ");
       num = sc.nextInt();
       
       System.out.print("Factors of " + num + ": ");
       do{
          if (num % ctr == 0){
          System.out.print(ctr + " ");
          }
          ctr++;
          
       }while(ctr <= num);
       
   }
}`
      },
      {
        name: "Item 3", input: "5", code: out`import java.util.*;

public class Main{
   public static void main(String[] args){
       Scanner sc = new Scanner(System.in);
       int ctr = 1;
       
       System.out.print("Enter a number: ");
       int num = sc.nextInt();
   
       do{
           System.out.println(ctr * 3);
           
           ctr++;
   
       } while(num >= ctr);
   }
}`
      },
      {
        name: "Item 4", input: "3\n5\n7\n15\n0", code: out`import java.util.*;

public class Main{
   public static void main(String[] args){
       Scanner sc = new Scanner(System.in);
       int num;
       
       do{
           System.out.print("\nEnter a number: ");
           num = sc.nextInt();
           if(num % 3 == 0){
             System.out.print("Fizz"); 
           }
           if(num % 5 == 0){
             System.out.print("Buzz"); 
           }
           if(!(num % 5 == 0) && !(num % 3 == 0)){
             System.out.print(num);   
           }
           
       }while(num != 0);
   }
}`
      },
      {
        name: "Item 5", input: "5", code: out`import java.util.*;

public class Main{
   public static void main(String[] args){
       Scanner sc = new Scanner(System.in);
       
       System.out.print("Enter a number: ");
       int num = sc.nextInt();
       
       int ctr = 1;
       
       do{
           
          System.out.println(ctr);
          ctr++;
          
       }while(num >= ctr);
       
       
   }
}`
      },
    ],
  },

].map((a) => ({ ...a, term: "final" }));
