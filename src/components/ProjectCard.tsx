import { Project } from "@/lib/store";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useQuery } from "@tanstack/react-query";
import { fetchTasks } from "@/lib/api";

export function ProjectCard({ project }: { project: Project }) {
  const { data: tasks = [] } = useQuery({
    queryKey: ['tasks', project.id],
    queryFn: () => fetchTasks(project.id),
  });
  
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl">{project.name}</CardTitle>
          <Badge variant="secondary">{tasks.length} tasks</Badge>
        </div>
        <CardDescription>{project.description}</CardDescription>
      </CardHeader>
    </Card>
  );
}