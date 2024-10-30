import * as React from "react"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import TaskForm from "./task-form"
import { getTask } from "../tasks.api"

interface Props {
  params: {
    id: number
  }
}

async function CardWithForm({params}: Props) {
  console.log(params)

  const task = await getTask(params.id);

  return (
    <div className="h-screen flex justify-center items-center">
        <Card className="w-[350px]">
            <CardHeader>
                <CardTitle>
                  {params.id ? "Edit Task" : "Create New Task"}
                </CardTitle>
            </CardHeader>
            <CardContent>
                <TaskForm task={task}/>
            </CardContent>
        </Card>
    </div>
  )
}

export default CardWithForm