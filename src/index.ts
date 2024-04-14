import { PrismaClient } from "@prisma/client";
import { string } from "zod";

const prisma = new PrismaClient();

async function insertUser(username:string,password:string,firstName:string,lastName:string) {
    const res = await prisma.user.create({
        data: {
            username,
            password,
            firstName,
            lastName,
        }
    })
    console.log(res)
}
// insertUser("GouravJoshi","123456","Gourav","joshi");

interface updateParams{
    firstName:string,
    lastName:string,
}

async function updateUser(username:string,{
    firstName,
    lastName,
}:updateParams){
    const res = await prisma.user.update({
        where:{username},
        data:{
            firstName,
            lastName,
        }
    });
    console.log(res)
}

// updateUser("GouravJoshi",{
//     firstName:"Gourav",
//     lastName:"Joshi",
// })

async function getUser(username:string){
    const res = await prisma.user.findFirst({
        where:{
            username:username,
        }
    });
    console.log(res);
}

// getUser("GouravJoshi");