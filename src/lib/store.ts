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
  description: string;
  status: Status;
  projectId: string;
  assignedTo?: string;
};

export type Project = {
  id: string;
  name: string;
  description: string;
};

type Store = {
  projects: Project[];
  tasks: Task[];
  members: Member[];
  addProject: (project: Omit<Project, 'id'>) => void;
  addTask: (task: Omit<Task, 'id'>) => void;
  updateTaskStatus: (taskId: string, status: Status) => void;
  assignTask: (taskId: string, memberId: string) => void;
};

export const useStore = create<Store>((set) => ({
  projects: [
    { id: '1', name: 'Website Redesign', description: 'Redesign company website' },
    { id: '2', name: 'Mobile App', description: 'Develop mobile application' },
  ],
  tasks: [
    { id: '1', title: 'Design Homepage', description: 'Create new homepage layout', status: 'todo', projectId: '1' },
    { id: '2', title: 'Setup API', description: 'Initialize backend API', status: 'in-progress', projectId: '2' },
  ],
  members: [
    { id: '1', name: 'John Doe', avatar: 'JD' },
    { id: '2', name: 'Jane Smith', avatar: 'JS' },
  ],
  addProject: (project) =>
    set((state) => ({
      projects: [...state.projects, { ...project, id: Math.random().toString() }],
    })),
  addTask: (task) =>
    set((state) => ({
      tasks: [...state.tasks, { ...task, id: Math.random().toString() }],
    })),
  updateTaskStatus: (taskId, status) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === taskId ? { ...task, status } : task
      ),
    })),
  assignTask: (taskId, memberId) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === taskId ? { ...task, assignedTo: memberId } : task
      ),
    })),
}));