import { useStore, Status } from "@/lib/store";
import { TaskCard } from "./TaskCard";

const COLUMNS: { title: string; status: Status }[] = [
  { title: "To Do", status: "todo" },
  { title: "In Progress", status: "in-progress" },
  { title: "Done", status: "done" },
];

export function TaskBoard({ projectId }: { projectId?: string }) {
  const tasks = useStore((state) => 
    projectId 
      ? state.tasks.filter(t => t.projectId === projectId)
      : state.tasks
  );

  return (
    <div className="grid grid-cols-3 gap-4">
      {COLUMNS.map((column) => (
        <div key={column.status} className="space-y-4">
          <h3 className="font-semibold text-lg">{column.title}</h3>
          <div className="space-y-2">
            {tasks
              .filter((task) => task.status === column.status)
              .map((task) => (
                <TaskCard key={task.id} task={task} />
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}