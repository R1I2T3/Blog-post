"use client"
import { FormInputPost } from "@/types/index";
import { SubmitHandler, useForm } from "react-hook-form"
import { FC } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Tag } from "@prisma/client";
import { RotateCcw } from "lucide-react";
interface FormPostProps {
    submit: SubmitHandler<FormInputPost>
    isEditing: boolean,
    initialValue?:FormInputPost
}
const  FormPost: FC<FormPostProps> = ({ submit, isEditing ,initialValue }) => {
    const { register, handleSubmit } = useForm<FormInputPost>({
        defaultValues:initialValue
    });
    
    const { data: dataTags, isLoading: isLoadingTag } = useQuery<Tag[]>({
        queryKey: ['tags'],
        queryFn: async () => {
            const response = await axios.get('/api/tags');
            return response.data;
        }
    })
    return (
        <>
            <form onSubmit={handleSubmit(submit)} className="flex flex-col items-center justify-center gap-5 mt-10">
                <input type="text" placeholder="Post title ..." className="input input-bordered w-full max-w-lg"  {...register("title")} required={true} />
                <textarea className="textarea textarea-bordered w-full max-w-lg" placeholder="Post content" {...register("content")} required={true}></textarea>
                {isLoadingTag ? 
                <div>
                <span className="loading loading-spinner text-primary"></span>
                <span className="loading loading-spinner text-secondary"></span>
                <span className="loading loading-spinner text-accent"></span>
                <span className="loading loading-spinner text-neutral"></span>
                <span className="loading loading-spinner text-info"></span>
                <span className="loading loading-spinner text-success"></span>
                <span className="loading loading-spinner text-warning"></span>
                <span className="loading loading-spinner text-error"></span> </div>:
                    <select className="select select-bordered w-full max-w-lg" {...register("tagId")} required={true} defaultValue={''}>
                        {dataTags?.map((item) => {
                            return <option value={item.id} key={item.id}>{item.name}</option>
                        })}
                        <option disabled value={''}>select a tag</option>
                    </select>
                }
                <button className="btn btn-primary w-full max-w-lg" type="submit">{
                    isEditing ? 'Update' : 'Submit'
                }</button>
            </form>
        </>
    )
}
export default FormPost