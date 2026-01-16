import { PersonalProjectCardPropsT } from "@/utils/types";
export enum Catagory {
  All = "All",
  Frontend = "frontend",
  Backend = "backend",
  Fullstack = "fullstack",
  Cloud = "Cloud",
  DevOps = "DevOps",
}

export const projects: PersonalProjectCardPropsT[] = [
  {
    id: 10,
    imageSrc:
      "/assets/thumbnail/legal_documents_storage.jpg",
    title: "Legal Document Storage",
    name: "",
    description: "Case Study: Case study: Managing old documents with S3",
    techStack: ["AWS S3", "AWS", "S3 Lifecycle Policies"],
    docUrl:
      "https://medium.com/@yashaspancham/legal-document-storage-f16f158a3c23",
    catagory: [Catagory.All, Catagory.Cloud],
  },
  {
    id: 9,
    imageSrc:
      "/assets/thumbnail/serverless-saas-web-application-case-study.jpg",
    title: "Serverless Web SaaS Application",
    name: "",
    description: "Case Study: Designing a Serverless Web SaaS Application",
    techStack: ["Serverless", "AWS", "Architecture"],
    docUrl:
      "https://medium.com/@yashaspancham/serverless-web-saas-application-57558b4f590a",
    catagory: [Catagory.All, Catagory.Cloud],
  },
  {
    id: 8,
    imageSrc: "/assets/thumbnail/project_z.png",
    title: "Project_Z",
    name: "",
    description: "Web Diary Application",
    techStack: ["Next.js", "Django", "AWS", "Typescript", "Python"],
    try: "https://reflections-fe-new.vercel.app/",
    docUrl:
      "https://medium.com/@yashaspancham/project-z-architecture-62fa39b435b3?postPublishedType=initial",
    catagory: [
      Catagory.All,
      Catagory.Cloud,
      Catagory.DevOps,
      Catagory.Fullstack,
    ],
  },
  {
    id: 7,
    imageSrc: "/assets/thumbnail/ecom_elibass_landing_page.png",
    title: "Elibass Landing Page",
    name: "",
    description:
      "Converted figma to pixel perfect UI with Next.js.Figma in github Link",
    techStack: ["Next.js", "TailwindCSS", "AWS S3", "Figma"],
    try: "https://ecom-elibass-landing-page.yashas-dev.com/",
    github: "https://github.com/yashaspancham/eCom_Elibass_Landing_page",
    catagory: [Catagory.All, Catagory.Frontend],
  },
  {
    id: 6,
    imageSrc: "/assets/thumbnail/project_z_fe.jpeg",
    title: "Project_z Frontend",
    name: "",
    docUrl: "https://medium.com/@yashaspancham/project-z-frontend-3bed4dfcc026",
    description: "Frontend for Project_Z web diary.",
    techStack: ["Next.js", "TailwindCSS", "Typescript", "React.js"],
    github: "https://github.com/yashaspancham/project_z_fe",
    catagory: [Catagory.All, Catagory.Frontend],
  },
  {
    id: 5,
    imageSrc: "/assets/thumbnail/local-k8s.png",
    title: "Local CRUD with k8s",
    name: "",
    docUrl:
      "https://medium.com/@yashaspancham/crud-with-kubernetes-09a673229d20",
    description: "Set up a small CRUD web application with Minikube locally.",
    techStack: ["Kubernetes", "minikube", "kubectl"],
    github: "https://github.com/yashaspancham/crud-k8s",
    catagory: [Catagory.All, Catagory.DevOps],
  },
  {
    id: 4,
    imageSrc: "/assets/thumbnail/p3.avif",
    title: "Generic Landing Page",
    name: "",
    docUrl:
      "https://medium.com/@yashaspancham/generic-saas-landing-page-3dbb3906340a",
    description:
      "A Generic Landing Page For a SaaS company. Converting design to code.",
    techStack: ["next.js", "TailwindCSS", "Figma"],
    github:
      "https://github.com/yashaspancham/generic-landing-page-for-saas-company",
    catagory: [Catagory.All, Catagory.Frontend],
  },
  {
    id: 3,
    imageSrc: "/assets/thumbnail/p0.avif",
    title: "Static Site Hosting",
    name: "",
    docUrl:
      "https://medium.com/@yashaspancham/next-js-static-site-on-s3-62d85a851c10",
    description: "Hosting a Next.js Static Site on AWS S3 Using CloudFront.",
    techStack: ["AWS", "S3", "Cloudfront", "Route 53"],
    try: "https://generic-saas-landing-page.yashas-dev.com/",
    catagory: [Catagory.All, Catagory.DevOps, Catagory.Cloud],
  },
  {
    id: 2,
    imageSrc: "/preview.png",
    title: "Cloud Resume Challenge",
    name: "cloud-resume-challenge",
    description:
      "A project to build a resume website hosted on AWS, showcasing cloud and Animation skills.",
    techStack: ["Next.js", "3.js", "GSAP", "AWS S3"],
    github: "https://github.com/yashaspancham/cloud_resume_challenge",
    catagory: [
      Catagory.All,
      Catagory.Cloud,
      Catagory.Frontend,
      Catagory.DevOps,
    ],
  },
  {
    id: 1,
    imageSrc: "/assets/thumbnail/ETL.png",
    title: "Simple ETL",
    name: "simple-ETL",
    description:
      "Data from .csv in S3 to a Database in RDS, using AWS Lambda and Python.",
    techStack: ["Python", "AWS S3", "AWS Lambda", "AWS RDS"],
    github: "https://github.com/yashaspancham/simple-ETL",
    catagory: [Catagory.All, Catagory.Cloud, Catagory.Backend],
  },
  {
    id: 0,
    imageSrc: "/assets/thumbnail/Reflection.jpeg",
    title: "Reflections",
    name: "reflections",
    description:
      "A digital diary application for capturing daily thoughts and memories.",
    techStack: ["React Native", "Expo", "Node.js", "Express.js"],
    github: "https://github.com/yashaspancham/reflections_fe",
    catagory: [
      Catagory.All,
      Catagory.Fullstack,
      Catagory.DevOps,
      Catagory.Cloud,
    ],
  },
];
