"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { deleteTask } from "./tasks.api";


export function TaskCard({task}){
  const router = useRouter();

  async function HandleDeleteTask(taskId: number){
    console.log(`Deleting task with id: ${taskId}`)
    await deleteTask(taskId);
    router.refresh();
  }

    return (
        <Card>
          <CardHeader>
            <CardTitle>{task.name}</CardTitle>
            <CardDescription>{task.description}</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-2">
            <div className="flex justify-between">
              <div>
                <Label htmlFor="status">Status</Label>
                <p>{task.status}</p>
              </div>
              <div>
                <Label htmlFor="date">End Date</Label>
                <p>{task.end_date}</p>
              </div>  
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline"
              onClick={() => router.push(`/tasks/${task.id}/edit`)}
            >Edit</Button>
            <Button variant="destructive"
              onClick={(e) => {
                e.stopPropagation();
                HandleDeleteTask(task.id)
              }}
            >Delete</Button>
          </CardFooter>
        </Card>
    )
}