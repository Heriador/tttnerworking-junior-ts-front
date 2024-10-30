

export async function createTask(task: any){
    const res = await fetch(`http://localhost:4000/api/tasks`, {
        method: "POST",
        body: JSON.stringify(task),
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InVzZXIzQGdtYWlsLmNvbSIsInN1YiI6MywiaWF0IjoxNzMwMjQzMTA4LCJleHAiOjE3MzA3NjE1MDh9.cRf9sLz7EECkzEazHxTXs59iei-GbFyS3Tm9bufZnVU`
        }
    })
    console.log(res)
    const data = await res.json();
    console.log(data)

    return data;
}

export async function getTasks(){
    const res = await fetch("http://localhost:4000/api/tasks", {
        method: "GET",
        cache: "no-store",
        headers: {
            "Authorization": `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InVzZXIzQGdtYWlsLmNvbSIsInN1YiI6MywiaWF0IjoxNzMwMjQzMTA4LCJleHAiOjE3MzA3NjE1MDh9.cRf9sLz7EECkzEazHxTXs59iei-GbFyS3Tm9bufZnVU`
        }
    });

    const data = await res.json();

    return data;
}

export async function getTask(taskId: number){
    const res = await fetch(`http://localhost:4000/api/tasks/${taskId}`, {
        headers: {
            "Authorization": `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InVzZXIzQGdtYWlsLmNvbSIsInN1YiI6MywiaWF0IjoxNzMwMjQzMTA4LCJleHAiOjE3MzA3NjE1MDh9.cRf9sLz7EECkzEazHxTXs59iei-GbFyS3Tm9bufZnVU`
        }
    });

    const data = await res.json();

    return data;
}

export async function updateTask(taskId: number, task: any){
    const res = await fetch(`http://localhost:4000/api/tasks/${taskId}`, {
        method: "PUT",
        body: JSON.stringify(task),
        cache: "no-store",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InVzZXIzQGdtYWlsLmNvbSIsInN1YiI6MywiaWF0IjoxNzMwMjQzMTA4LCJleHAiOjE3MzA3NjE1MDh9.cRf9sLz7EECkzEazHxTXs59iei-GbFyS3Tm9bufZnVU`
        }
    });

    return await res.json();
}

export async function deleteTask(taskId: number){
    const res = await fetch(`http://localhost:4000/api/tasks/${taskId}`, {
        method: "DELETE",
        headers: {
            "Authorization": `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InVzZXIzQGdtYWlsLmNvbSIsInN1YiI6MywiaWF0IjoxNzMwMjQzMTA4LCJleHAiOjE3MzA3NjE1MDh9.cRf9sLz7EECkzEazHxTXs59iei-GbFyS3Tm9bufZnVU`
        }   
    });
    return await res.json();
}