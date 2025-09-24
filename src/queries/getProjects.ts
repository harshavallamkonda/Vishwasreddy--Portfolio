// queries/getProjects.ts
import datoCMSClient from './datoCMSClient';
import { Project } from '../types';

const GET_PROJECTS = `
  query {
    allProjects(orderBy: title_ASC) {
      title
      description
      techUsed
      image {
        url
      }
    }
  }
`;

export async function getProjects(): Promise<Project[]> {
  try {
    const data = await datoCMSClient.request<{ allProjects: Project[] }>(GET_PROJECTS);
    return data.allProjects;
  } catch (error) {
    console.warn('Failed to fetch projects from DatoCMS:', error);
    // Return mock data for development
    return [
      {
        title: "Sample Project 1",
        description: "This is a sample project for demo purposes. Configure DatoCMS tokens to see real data.",
        techUsed: "ReactJS, TypeScript, CSS3",
        image: { url: "/logo192.png" }
      },
      {
        title: "Sample Project 2", 
        description: "Another sample project. Add your DatoCMS tokens in .env file to load real projects.",
        techUsed: "NodeJS, Express.js, MongoDB",
        image: { url: "/logo192.png" }
      }
    ];
  }
}
