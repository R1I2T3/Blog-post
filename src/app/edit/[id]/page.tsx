"use client"
import { SubmitHandler } from "react-hook-form";
import FormPost from "../../components/formPost";
import { FormInputPost } from "@/types";
import BackButton from "../../components/backButton";

const EditPostPage=()=>{
    const handleEditPost:SubmitHandler<FormInputPost>=(data)=>{
        console.log(data)
    }
    return (
        <div>
            <BackButton/>
            <h1 className="text-2xl my-4 font-bold text-center">Edit Post</h1>
        <FormPost submit={handleEditPost} isEditing={true}/>
        </div>
    )
}
export default EditPostPage