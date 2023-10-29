'use client'
import { SubmitHandler } from "react-hook-form";
import FormPost from "../components/formPost";
import { FormInputPost } from "@/types";
import BackButton from "../components/backButton";

export default function CreatePage(){
    const handleCreatePost:SubmitHandler<FormInputPost>=(data)=>{
        console.log(data)
    }
    return (
        <div>
            <BackButton/>
            <h1 className="text-2xl my-4 font-bold text-center">Add new Post</h1>
        <FormPost submit={handleCreatePost} isEditing={false}/>
        </div>
    )
}