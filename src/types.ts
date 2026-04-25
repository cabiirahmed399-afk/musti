export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  tags: string[];
  client: string;
  year: string;
  tools: string[];
  gallery?: string[];
  videoUrl?: string;
}

export interface ClientRequest {
  name: string;
  email: string;
  description: string;
}
