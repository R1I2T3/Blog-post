// 'use client'
import BackButton from "@/app/components/backButton"
import ButtonAction from "@/app/components/buttonaction"
import { FC } from "react"
import { db } from "@/lib/db"
interface BlogProps{
    params:{
        id:string
    }
}
async function getPost(id:string) {
    const response=await db.post.findFirst({
        where:{
            id:id
        },
        select:{
            id:true,
            title:true,
            content:true,
            tag:true
        }
    })
    return response
}
const Blog:FC<BlogProps>=async ({params})=>{
    const post= await getPost(params.id);
    return (
        <div>
        <BackButton/>
        <div className="mb-8">
            <h2 className="text-2xl font-bold my-4">{post?.title}</h2>
            <ButtonAction id={post?.id}/>       
        </div>
        <span className="badge  badge-secondary w-[100px] text-center">{post?.tag.name}</span>
        <p className="">{post?.content}</p>
        </div>
    )
}
export default Blog