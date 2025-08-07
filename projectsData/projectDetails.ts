export const projectsData = {
  reflections: {
    title: "Reflections",
    Website: "https://www.projectyreflections.com",
    githubFrontEnd: "https://github.com/yashaspancham/project_y_app",
    githubbackEnd: "https://github.com/yashaspancham/project_y_backend",
    architectureimage: "/DrawIO/Reflections.drawio.png",
    description:
      "A digital diary application for capturing daily thoughts and memories.",
    why: "I wanted to explore the full Stack from front-end to back-end and the full development process, From planning to hosting.",
    challengesAndHowItWasSolved: `This was a new experience, as I had only worked on the front-end and a bit of Linux up until now. The most difficult part was figuring out CI/CD, as I did not know about GitHub Actions. But with time, I was able to successfully do it.`,
    Achitecture: [
      "The architecture of the Reflections project involves a client-server model",
      "The front-end and back-end is hosted on an AWS EC2 instance present in the Default AWS VPC",
      "The DNS is managed using AWS Route 53",
      "The Error page is hosted on AWS S3",
      "The back-end and front-end use NGINX as a reverse proxy",
      "The database is hosted on AWS EC2 same instance as the back-end",
    ],
    Tech: [
      "The front-end is built using React Native with React Native Paper and Expo",
      "The front-end uses TypeScript for type safety",
      "The back-end is built using Express.js using javascript for handling business logic and API interactions",
      "PostgreSQL is used as the relational database for structured data storage",
      "CI/CD pipelines are implemented using GitHub Actions for automated builds and deployments",
    ],
    whatILearned: [
      "I learned about the full development process, from planning to hosting",
      "I gained experience in full-stack development, including front-end and back-end technologies",
      "I learned about CI/CD pipelines and how to implement them using GitHub Actions",
      "I improved my skills in TypeScript and AWS services",
    ],
  },
  "cloud-resume-challenge": {
    title: "Cloud Resume Challenge",
    Website: "https://www.yashas-dev.com",
    githubFrontEnd: "https://github.com/yashaspancham/yashas.dev",
    githubbackEnd: "https://github.com/yashaspancham/yashas.dev.lambda",
    architectureimage: "/DrawIO/Cloud Resume Challenge.drawio.png",
    description:
      "A project to build a resume website hosted on AWS, showcasing cloud and Animation skills.",
    why: "I wanted to create a resume website while exploring AWS services.",
    challengesAndHowItWasSolved: `The most challenging part was the animations. I had used 3D animations before, but mapping them to scroll was new. Initially, I thought I could use the sin function along with the position value of the 3.js object. This was not smooth, and the curves were not wide enough. Next, I used IntersectionObserver and added ids for all the sections. This worked.`,
    Achitecture: [
      "The architecture of the Cloud Resume Challenge project involves several AWS services",
      "The front-end is hosted on S3, with CloudFront as a CDN for faster delivery",
      "The back-end uses AWS Lambda functions triggered by API Gateway for serverless operations",
      "The database is managed using DynamoDB, and Route 53 handles DNS management",
      "This architecture ensures scalability, reliability, and cost-effectiveness.",
    ],
    Tech: [
      "The website is built using Next.js",
      "The front-end uses Tailwind CSS for styling, TypeScript for logic, GSAP for DOM animation and React Three Fiber(3.js) for 3D animations",
      "The back-end is built using Python hosted AWS Lambda functions for serverless operations",
      "The CI/CD is implemented using GitHub Actions for automated builds and deployments",
    ],
    whatILearned: [
      "I learned about AWS services and how to integrate them into a web application",
      "I gained experience in serverless architecture using AWS Lambda and API Gateway",
      "I improved my skills in GSAP and React Three Fiber for 3D animations",
      "I learned about CI/CD pipelines and how to implement them using GitHub Actions",
    ],
  },
  "simple-ETL": {
    title: "Simple ETL",
    why: "I wanted to learn about ETL processes, how to implement it and learn about how its done in AWS.",
    description:
      "A simple ETL process that extracts data from a CSV file(in AWS S3), transforms it with python(in AWS Lambda), and loads it into a rational database(MariaBD locally and MySQL on AWS Aurora and RDS).",
    challengesAndHowItWasSolved: `The most challenging part was connecting the lambda function to the RDS database. Locally I had used a MariaDB database, but I had to switch to MySQL for AWS Aurora and RDS. I had to learn about the differences between the two databases and how to connect to them using Python.`,
    Achitecture: [
      "Locally, I stored the .csv file in the file system, python file is used for ETL and MariaDB as DB engine",
      "In AWS, the .csv file is stored in S3, the python file is used for ETL in AWS Lambda and MySQL as DB engine",
    ],
    architectureimage: "/DrawIO/simpleETL.drawio.png",
    DATA: [
      {
        text: "The Source CSV file is stored in AWS S3 and locally in the file system.",
      },
      {
        text: "Data set: ",
        link: "https://www.datablist.com/learn/csv/download-sample-csv-files#download-customers-sample-csv-files",
      },
      {
        text: "Initally, I taught to use a simple databse with 1 table but later I decided to create a more complex database with multiple tables and relationships.",
      },
      {
        text: "I vibe coded an optimal DB schema with 5 tables.",
        img: ["/assets/charts/simpleETLDBSchema.drawio.png", "DB schema"],
      },
      {
        text: "The SQL query to create the database Tables is available ",
        link: "https://github.com/yashaspancham/simple-ETL/blob/main/docs/setUp.sql",
      },
      {
        text: "Initally, I simply took a row from .csv file and inserted it into the DB, but later I created batches and inserted them in batches to improve performance.",
        img: ["/assets/charts/Time&Space.png", "performance mertics"], //first is the image path, second is the alt text
      },
      {
        text: "Locally, I was able to insert 500,000 rows in 35 minutes. However, on AWS, the maximum I could insert was 100,000 rows, since a Lambda function can run for a maximum of 15 minutes.",
      },
    ],
    Tech: [
      "The ETL process is implemented using Python",
      "AWS Lambda is used for serverless execution of the ETL process",
      "Locally, MariaDB is used as the relational database for structured data storage",
      "In AWS, AWS Aurora and RDS with MySQL is used as the relational database for structured data storage",
      "Initially, I used MariaDB on AWS Aurora and RDS. However, while adding a Layer to Lambda, I had to switch to MySQL because the mariadb pip package was not compatible with Lambda due to its dependency on C libraries. So, I switched to pymysql and decided to use MySQL on AWS Aurora and RDS instead.",
      "AWS S3 is used for storing the input CSV file",
      "Locally, I used bash terminal for interacting with the MariaDB and AWS CloudShell for MySQL on AWS Aurora and RDS.",
      "To allow AWS Lambda to access S3 and Aurora (RDS), I used AWS IAM roles.",
    ],
    github: "https://github.com/yashaspancham/simple-ETL",
    whatILearned: [
      "Designed a serverless ETL architecture leveraging AWS Lambda, S3, and Amazon Aurora (MySQL-compatible) within a VPC.",
      "Navigated Lambda runtime constraints, including timeout limits and package compatibility (e.g., switching from mariadb to pymysql due to native dependency issues).",
      "Configured fine-grained IAM roles to securely grant Lambda access to both S3 objects and RDS resources.",
      "Gained insights into the performance limitations of Lambda for bulk inserts, necessitating more efficient data handling strategies.",
      "Gained hands-on experience with building a serverless ETL pipeline using AWS Lambda, S3, and Aurora (RDS).",
      "Practiced debugging permission errors and understanding AWS error messages (e.g., AccessDenied, Timeout).",
      "Learned about Lambda Layers and their role in managing dependencies for Python packages.",
    ],
  },
};
