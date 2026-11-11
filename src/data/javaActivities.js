const out = String.raw;

export const JAVA_ACTIVITIES = [
  {
    tag: "JAVA", title: "Output Operations Activity", due: "08/27/2026, 01:30 PM",
    items: [
      { name: "Item 1", code: out`public class Main {

    public static void main(String[] args) {
        System.out.print("*\n");
        System.out.print("**\n");
        System.out.print("***\n");
        System.out.print("****\n");
        System.out.print("*****\n");
    }
}` },
      { name: "Item 2", code: out`public class Main {
    public static void main(String[] args) {
        System.out.print("            Green\n");
        System.out.print("      Yellow     Brown\n");
        System.out.print("  Orange             Indigo\n");
        System.out.print("Red                      Violet\n");

    }
}` },
      { name: "Item 3", code: out`public class Main {
    public static void main(String[] args) {
        System.out.print("CCCCC   OOOOO   DDDDD   EEEEE\n");
        System.out.print("C       O   O   D   D   E\n");
        System.out.print("C       O   O   D   D   EEE\n");
        System.out.print("C       O   O   D   D   E\n");
        System.out.print("CCCCC   OOOOO   DDDDD   EEEEE\n");
    }
}` },
      { name: "Item 4", code: out`public class Main {

    public static void main(String[] args) {
       System.out.print("Hello, World!");
    }
}` },
      { name: "Item 5", code: out`public class Main {

    public static void main(String[] args) {
       System.out.print("2\n");
       System.out.print("4\n");
       System.out.print("6\n");
       System.out.print("8\n");
       System.out.print("10\n");
    }
}` },
    ],
  },
  {
    tag: "JAVA", title: "Input Operations Activity", due: "10/15/2026, 11:25 PM",
    items: [
      { name: "Item 1", input: "John\nPlease see the attached report.\nSteven\nWeekly Update\n2.5\n15\nActive\nA123\nManila\n19\nAcme Corp\nacme.com\n09123456789\nDeveloper\nIT", code: out`import java.util.*;

public class Main {

    public static void main(String[] args) {
        
        Scanner sc = new Scanner(System.in);
        
        String recipitent;
        String message;
        String subject;
        String name;
        Double version;
        Double discount;
        String status;
        String code;
        String location;
        int age;
        String companyname;
        String website;
        String phone;
        String jobtitle;
        String department;
        
        
        System.out.print("Enter the recipient: ");
        recipitent = sc.nextLine();
        
        System.out.print("Enter the message: ");
        message = sc.nextLine();
        
        System.out.print("Enter the name: ");
        name = sc.nextLine();
        
        System.out.print("Enter the subject: ");
        subject = sc.nextLine();
        
        System.out.print("Enter the version: ");
        version = sc.nextDouble();
        
        sc.nextLine();
        
        System.out.print("Enter the discount: ");
        discount = sc.nextDouble();
        
        sc.nextLine();
        
        System.out.print("Enter the status: ");
        status = sc.nextLine();
        
        System.out.print("Enter the code: ");
        code = sc.nextLine();
        
        System.out.print("Enter the location: ");
        location = sc.nextLine();
        
        System.out.print("Enter the age: ");
        age = sc.nextInt();
        
        sc.nextLine();
        
        System.out.print("Enter the company name: ");
        companyname = sc.nextLine();
        
        System.out.print("Enter the website: ");
        website = sc.nextLine();
        
        System.out.print("Enter the phone: ");
        phone = sc.nextLine();
        
        System.out.print("Enter the job title: ");
        jobtitle = sc.nextLine();
        
        System.out.print("Enter the department: ");
        department = sc.nextLine();
        
        String output = String.format
        (
          "Dear %s, I hope this email finds you well.\n"+
          "%s\n"+
          "Subject: %s \n"+
          "Sender: %s \n"+
          "Version: %.1f\n"+
          "Discount: %.2f%% \n"+ 
          
          "Status: %s \n"+
          "Code: %s \n"+
          "Location: %s \n"+
          "Age: %d \n"+
          "Company: %s \n"+
          "Website: %s \n"+
          "Phone: %s \n"+
          "Job Title: %s \n"+
          "Department: %s \n",
          
          recipitent,
          message,
          subject,
          name,
          version,
          discount,
          status,
          code,
          location,
          age,
          companyname,
          website,
          phone,
          jobtitle,
          department
        );
        
        System.out.print(output);
    }
}` },
      { name: "Item 2", input: "Steven", code: out`import java.util.*;

public class Main {

    public static void main(String[] args) {
        
        Scanner sc = new Scanner(System.in);
        
        System.out.print("Enter your name: ");
        String name = sc.nextLine();
        
        System.out.println("Welcome, " + name + "! " );
    }
}` },
      { name: "Item 3", input: "Steven\n19\nTaguig", code: out`import java.util.*;

public class Main {

    public static void main(String[] args) {
        
        Scanner sc = new Scanner(System.in);
        
        String name;
        int age;
        String city;
        
        System.out.print("Enter your name: ");
        name = sc.nextLine();
        
        System.out.print("Enter your age: ");
        age = sc.nextInt();
        
        sc.nextLine();
        
        System.out.print("Enter your city: ");
        city = sc.nextLine();
        
        
        
        String output = String.format
        ( 
            "Name: %s \n"+
            "Age: %d \n"+
            "City: %s \n",
            
            name,
            age,
            city
        );
        
        
        System.out.print(output);
    }
}` },
      { name: "Item 4", input: "Clean Code\nRobert Martin\n2008\nProgramming\nCity Library\n1024\n11/20/2026", code: out`import java.util.*;

public class Main {

    public static void main(String[] args) {
        
    Scanner sc = new Scanner(System.in);    
    
        System.out.print("Enter the book title: ");
        String booktitle = sc.nextLine();
        
        System.out.print("Enter the author: ");
        String author = sc.nextLine();
        
        System.out.print("Enter the year of publication: ");
        int yearpublic = sc.nextInt();
        
        sc.nextLine();
        
        System.out.print("Enter the genre: ");
        String genre = sc.nextLine();
        
        System.out.print("Enter the library: ");
        String liblary = sc.nextLine();
        
        System.out.print("Enter your member ID: ");
        int memberid = sc.nextInt();
        
        sc.nextLine();
        
        System.out.print("Enter the return date: ");
        String returndate = sc.nextLine();
        
        System.out.println("You have successfully reserved the book " + "\'" + booktitle + "\'" + " by " + author+ ".");
        System.out.println("Year of Publication: "+ yearpublic);
        System.out.println("Genre: "+ genre);
        System.out.println("Library: "+ liblary);
        System.out.println("Member ID: "+ memberid);
        System.out.println("Return Date: "+ returndate);
        
    }
}` },
      { name: "Item 5", input: "11/10/2026\n8:00 PM\n1500\n320\n45.5\nA", code: out`import java.util.*;

public class Main {

    public static void main(String[] args) {
     
     Scanner sc = new Scanner(System.in);
     
     System.out.print("Enter Post Date: ");
     String date = sc.nextLine();
     
     System.out.print("Enter Post Time: ");
     String time = sc.nextLine();
     
     System.out.print("Enter Post Reach: ");
     double reach = sc.nextDouble();
     
     sc.nextLine();
     
     System.out.print("Enter Post Engagement: ");
     double engagement = sc.nextDouble();
     
     sc.nextLine();
     
     System.out.print("Enter Post Duration: ");
     double duration = sc.nextDouble();
     
     sc.nextLine();
     
     System.out.print("Enter Post Category: ");
     char category = sc.next().charAt(0);
     
     System.out.println("\nPost Scheduled:");
     System.out.println("Date: "+ date);
     System.out.println("Time: "+ time);
     System.out.printf("Reach: %.2f \n", reach);
     System.out.printf("Engagement: %.2f \n", engagement);
     System.out.printf("Duration: %.2f \n", duration);
     System.out.println("Category: "+ category);
     
     
    }
}` },
    ],
  },

{
  tag: "JAVA",
  title: "Arithmetic Operators Activity",
  due: "10/15/2026, 01:15 PM",
  items: [
    {
      name: "Item 1",
      input: "10\n5",
      code: out`import java.util.*;

public class Main {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        int x;
        int y;

        System.out.print("Enter x: ");
        x = sc.nextInt();

        System.out.print("Enter y: ");
        y = sc.nextInt();

        int answerad = x + y;
        int answermin = x - y;

        System.out.print(x + " + " + y + " = " + answerad + "\n");
        System.out.print(x + " - " + y + " = " + answermin);
    }
}`
    },
    {
      name: "Item 2",
      input: "25",
      code: out`import java.util.*;

public class Main {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        double cel;

        System.out.print("Enter temperature in Celsius: ");
        cel = sc.nextDouble();

        double fah = cel * (9.0f/5.0f) + 32;

        System.out.printf("Temperature in Fahrenheit: %.2f", fah);
    }
}`
    },
    {
      name: "Item 3",
      input: "",
      code: out`import java.util.*;

public class Main {

    public static void main(String[] args) {

        int ans = 1+1;

        System.out.print("1 + 1 = " + ans);

    }
}`
    },
    {
      name: "Item 4",
      input: "20\n4",
      code: out`import java.util.*;

public class Main {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        int x;
        int y;

        System.out.print("Enter x: ");
        x = sc.nextInt();

        System.out.print("Enter y: ");
        y = sc.nextInt();

        int answerad = x / y;

        System.out.print("Quotient: " + answerad);
    }
}`
    },
    {
      name: "Item 5",
      input: "10\n20\n30",
      code: out`import java.util.*;

public class Main {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        int x;
        int y;
        int z;

        System.out.print("Enter x: ");
        x = sc.nextInt();

        System.out.print("Enter y: ");
        y = sc.nextInt();

        System.out.print("Enter z: ");
        z = sc.nextInt();

        int sum = x + y + z;

        System.out.print("Sum: " + sum);
    }
}`
    }
  ],
},

{
  tag: "JAVA",
  title: "MP1 – MP1LastNameFirstName_NetPay",
  time: "11:59 PM September 24, 2026",
  pdf: `${import.meta.env.BASE_URL}pdf/MP1LastNameFirstName_NetPay.pdf`,
  module: "Week 11 - E-Portfolio Development & Intro to Repetition Control",
},

].map((a) => ({ ...a, term: "midterm" }));
