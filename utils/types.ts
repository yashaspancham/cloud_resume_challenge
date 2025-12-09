export interface PersonalProjectCardPropsT {
  id: number;
  imageSrc: string;
  title: string;
  name: string;
  docUrl?: string;
  try?: string;
  description: string;
  techStack: string[];
  github?: string;
  catagory?: string[];
}
export interface ResumeButtonT{
    extraCSS?:string
}