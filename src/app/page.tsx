import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { getTasks } from "./tasks/tasks.api";
import { TaskCard } from "./tasks/task-card";

export const dynamic = "force dynamic";

async function Home() {

  const tasks = await getTasks();
  console.log(tasks);

  return (
    <>
    <div className="flex justify-between">
      <h1
        className="text-4xl font-bold text-center text-gray-900"
      >Login</h1>
      {/* <Link 
        href="/login"
        className={buttonVariants()}
      >
        Log In
      </Link> */}
      <Link 
        href="/tasks/new"
        className={buttonVariants()}
      >
        Create Task
      </Link>


        

    </div>  
    <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 mt-5">
    {
      tasks.map((task) => (
        <TaskCard task={task} key={task.id} />
      ))
      
    }
    </div>
    </>
  );
}

export default Home;