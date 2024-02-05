
export interface CardProjectProps {
  title: string;
  description: string;
  image: string;
  id: number;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  stack: string;
  period: string;
  image: string;
}

export interface Skill {
  id: number;
  name: string;
  icon: React.FC<void>;
  rating: number;
}
