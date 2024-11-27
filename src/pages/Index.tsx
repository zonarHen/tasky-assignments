import { useStore } from "@/lib/store";
import { ProjectCard } from "@/components/ProjectCard";
import { TaskBoard } from "@/components/TaskBoard";

const Index = () => {
  const projects = useStore((state) => state.projects);

  return (
    <div className="container mx-auto py-8 space-y-8">
      <section>
        <h2 className="text-3xl font-bold mb-4">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-4">All Tasks</h2>
        <TaskBoard />
      </section>
    </div>
  );
};

export default Index;