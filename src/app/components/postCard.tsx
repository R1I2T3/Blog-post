import Link from "next/link";
import { FC } from "react";
import { Tag } from "@prisma/client";
interface PostCardProps{
    post:{
        id:string,
        title:string
        content:string,
        tag:Tag,
    }
}
const PostCard:FC<PostCardProps>=({post})=> {
    return (
        <div className="card w-full border bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">{post.title}</h2>
                <p>{post.content.slice(0,30)}</p>
                <div className="card-actions justify-end mt-10">
                <span className="badge  badge-secondary w-[100px] text-center">{post.tag.name}</span>
                    <Link href={`/blog/${post.id}`} className="btn btn-primary"> Read more ...</Link>
                </div>
            </div>
        </div>
    )
}
export default PostCard