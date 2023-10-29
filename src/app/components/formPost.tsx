"use client"
import { FormInputPost } from "@/types/index";
import { SubmitHandler, useForm } from "react-hook-form"
import { FC } from "react";
interface FormPostProps{
    submit:SubmitHandler<FormInputPost>
    isEditing:boolean,
}
const FormPost:FC<FormPostProps>=({submit,isEditing})=> {
    const {register,handleSubmit}=useForm();
    return (
        <>
            <form onSubmit={handleSubmit(submit)}  className="flex flex-col items-center justify-center gap-5 mt-10">
                <input type="text" placeholder="Post title ..." className="input input-bordered w-full max-w-lg"  {...register("title")} required={true}/>
                <textarea className="textarea textarea-bordered w-full max-w-lg" placeholder="Post content" {...register("content")}  required={true}></textarea>
                <select className="select select-bordered w-full max-w-lg" {...register("tag")}  required={true} defaultValue={''}>
                    <option disabled value={''}>select a tag</option>
                    <option>javascript</option>
                    <option>Php</option>
                    <option>Python</option>
                </select>
                <button className="btn btn-primary w-full max-w-lg" type="submit">{
                     isEditing?'Update':'Submit'
                }</button>
            </form>
        </>
    )
}
export default FormPost