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
};
