"use client"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { createTask, updateTask } from "../tasks.api";
import { useParams, useRouter } from "next/navigation";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";


function TaskForm({task}: any){

    const { register, handleSubmit, setValue } = useForm({
        defaultValues: {
            name: task ? task.name : "",
            description: task ? task.description : "",
            end_date: task ? task.end_date : "",
            status: task ? task.status : "",
        }
    });
    const router = useRouter();
    const params = useParams();

    const onSubmit = handleSubmit(async (data) =>  {
        if(params.id){
            console.log(data)
            const updatedTask = await updateTask(Number(params.id), data);
            console.log(updatedTask)
            router.push("/")
            router.refresh();
        }
        else{
            const newTask = await createTask(data)
            console.log(newTask)
            router.push("/")
            router.refresh();

        }
    })

    return(
        <form onSubmit={onSubmit} className="flex flex-col gap-3">
            <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Name task" 
                        disabled={task ? true : false}
                        {...register("name", { required: true })}
                    />
                </div>
                <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="description">Description</Label>
                    <Input id="description" placeholder="Description of the task" 
                        {...register("description", { required: true })}
                    />
                </div>
                <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="date">End Date</Label>
                    <Input id="date" type="date"
                        {...register("end_date", { required: true })}
                    />
                </div>
                <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="status">Status</Label>
                    <Select
                        onValueChange={(value) => setValue("status", value)}
                    >
                        <SelectTrigger id="status">
                            <SelectValue placeholder={task ? task.status : "Select status"} 
                            />
                        </SelectTrigger>
                        <SelectContent position="popper">
                            <SelectItem value="pending">pending</SelectItem>
                            <SelectItem value="inProgress">in progress</SelectItem>
                            <SelectItem value="done">Done</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>  
            <div className="flex justify-end">
                <Button>
                    {params.id ? "Update" : "Create"}
                </Button>
            </div>
        </form>
    )
}

export default TaskForm;