import { Task, useStore } from "@/lib/store";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export function TaskCard({ task }: { task: Task }) {
  const members = useStore((state) => state.members);
  const assignedMember = task.task_assignments?.[0]
    ? members.find(m => m.id === task.task_assignments[0].assignee_id)
    : undefined;
  
  const statusColors = {
    'todo': 'bg-slate-100',
    'in-progress': 'bg-blue-100',
    'done': 'bg-green-100'
  };
  
  return (
    <Card className={`task-card ${statusColors[task.status]} border-none`}>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">{task.title}</CardTitle>
          {assignedMember && (
            <Avatar className="h-8 w-8">
              <AvatarFallback>{assignedMember.avatar}</AvatarFallback>
            </Avatar>
          )}
        </div>
        <CardDescription>{task.description}</CardDescription>
      </CardHeader>
    </Card>
  );
}