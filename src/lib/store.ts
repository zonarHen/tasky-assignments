import { create } from 'zustand';

export type Status = 'todo' | 'in-progress' | 'done';
export type Member = {
  id: string;
  name: string;
  avatar: string;
};

export type Task = {
  id: string;
  title: string;
  description: string | null;
  status: Status;
  project_id: string;
  created_at: string;
  created_by: string;
  task_assignments?: {
    assignee_id: string;
    assigned_at: string;
  }[];
};

export type Project = {
  id: string;
  name: string;
  description: string;
};

type Store = {
  projects: Project[];
  members: Member[];
  addProject: (project: Omit<Project, 'id'>) => void;
};

export const useStore = create<Store>((set) => ({
  projects: [
    { id: '1', name: 'Website Redesign', description: 'Redesign company website' },
    { id: '2', name: 'Mobile App', description: 'Develop mobile application' },
  ],
  members: [
    { id: '1', name: 'John Doe', avatar: 'JD' },
    { id: '2', name: 'Jane Smith', avatar: 'JS' },
  ],
  addProject: (project) =>
    set((state) => ({
      projects: [...state.projects, { ...project, id: Math.random().toString() }],
    })),
}));