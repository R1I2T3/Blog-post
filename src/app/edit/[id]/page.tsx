"use client"
import { SubmitHandler } from "react-hook-form";
import FormPost from "../../components/formPost";
import { FormInputPost } from "@/types";
import BackButton from "../../components/backButton";
import { useQuery,useMutation } from "@tanstack/react-query";
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
    const {id}=params
    const {data:dataPost,isLoading:isLoadingPost}=useQuery({
        queryKey:['posts',id],
        queryFn:async ()=>{
            const response=await axios.get(`/api/posts/${id}`);
            return response.data
        },
    })
    const { mutate: updatePost} = useMutation({
        mutationFn: (newPost: FormInputPost) => {
            return axios.patch(`/api/posts/${id}`, newPost)
        },
        onError: (error) => {
            console.log(error);
        },
        onSuccess: () => {
            router.push('/')
            router.refresh();
        }
    })
    const handleEditPost:SubmitHandler<FormInputPost>=(data)=>{
        updatePost(data)
    }
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