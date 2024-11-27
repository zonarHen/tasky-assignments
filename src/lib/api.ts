import { supabase } from "@/integrations/supabase/client";
import { Task } from "./store";

export async function fetchTasks(projectId?: string) {
  let query = supabase.from('tasks').select(`
    *,
    task_assignments (
      assignee_id,
      assigned_at
    )
  `);

  if (projectId) {
    query = query.eq('project_id', projectId);
  }

  const { data, error } = await query;
  
  if (error) {
    throw error;
  }

  return data as Task[];
}