interface ExperiencesItem {
  job: string;
  company: string;
  time: number;
  description: string;
  url: string;
  badges: Badge[];
}

interface ProjectsItem {
  title: string;
  description: string;
  image: string;
  urls: {
    preview: string;
    code: string;
  };
  badges: Badge[];
}

type Badge = {
  text: string;
  icon: string;
};
