import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();

async function createTodo(userId:number,title:string,description:string) {
    const todo = await prisma.todo.create({
        data:{
            title,
            description,
            userId,
        },
    });
    console.log(todo);
}

async function getTodos(userId:number) {
    const todos = await prisma.todo.findMany({
        where:{
            userId:userId,
        },
    });
    console.log(todos);
}

async function getTodosAndUserDetails(userId:number) {
    const todos = await prisma.todo.findMany({
        where:{
            userId:userId,
        },
        select:{
            user:true,
            title:true,
            description:true,
        },
    });
    console.log(todos);
}
