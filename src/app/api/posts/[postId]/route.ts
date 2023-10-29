import { db } from "@/lib/db"
import { NextResponse } from "next/server"
interface contextProp{
    params:{
        postId:string
    }
}
export async function DELETE(req:Request,context:contextProp){
    try{
        const {params}=context
        await db.post.delete({
            where:{
                id:params.postId
            }
        })
        return new Response(null,{status:204})
    }
    catch(e){
        return NextResponse.json({message:'Could not delete post'},{status:500})
    }
}
export async function PATCH(req:Request,context:contextProp){
    try{
        const {params}=context;
        const body=await req.json();
        await db.post.update({
            where:{
                id:params.postId
            },
            data:{
                title:body.title,
                content:body.content,
                tagId:body.tagId
            }
        })
        return NextResponse.json({message:'update successfully'},{status:200})
    }
    catch(e){
        return NextResponse.json({message:'Could not update post'},{status:500})
    }
}
export async function GET(req:Request,context:contextProp) {
    const {params}=context;
    try {
        const post=await db.post.findFirst({
            where:{
                id:params.postId
            },
            include:{
                tag:true
            }
        })
        return NextResponse.json(post, { status: 200 })
    }
    catch (error) {
        return NextResponse.json({ message: "Error" }, { status: 500 })
    }
}
