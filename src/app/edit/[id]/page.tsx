"use client"
import { SubmitHandler } from "react-hook-form";
import FormPost from "../../components/formPost";
import { FormInputPost } from "@/types";
import BackButton from "../../components/backButton";
import { useQuery } from "@tanstack/react-query";
import { FC } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
interface EditPostPageProps{
    params:{
        id:string
    }
}
const EditPostPage:FC<EditPostPageProps>=({params})=>{
    const router=useRouter();
    const {data:dataPost,isLoading:isLoadingPost}=useQuery({
        queryKey:['posts',params.id],
        queryFn:async ()=>{
            const response=await axios.get(`/api/posts/${params.id}`);
            return response.data
        },
    })
    const handleEditPost:SubmitHandler<FormInputPost>=(data)=>{
        console.log(data)
    }
    console.log(dataPost)
    if(isLoadingPost){
        <div className="text-center">
            <span className="loading loading-spinner loading-lg"></span>
        </div>
    }
    return (
        <div>
            <BackButton/>
            <h1 className="text-2xl my-4 font-bold text-center">Edit Post</h1>
        <FormPost submit={handleEditPost} isEditing={true} initialValue={dataPost}/>
        </div>
    )
}
export default EditPostPage