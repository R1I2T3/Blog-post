'use client'
import { SubmitHandler } from "react-hook-form";
import FormPost from "../components/formPost";
import { FormInputPost } from "@/types";
import BackButton from "../components/backButton";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function CreatePage() {
    const router = useRouter();
    const handleCreatePost: SubmitHandler<FormInputPost> = (data) => {
        createPost(data)
    }
    const { mutate: createPost } = useMutation({
        mutationFn: (newPost: FormInputPost) => {
            return axios.post("/api/posts/create", newPost);
        },
        onError: (error) => {
            console.log(error);
        },
        onSuccess: () => {
            router.push('/')
            router.refresh();
        }
    })

    return (
        <div>
            <BackButton />
            <h1 className="text-2xl my-4 font-bold text-center">Add new Post</h1>
            <FormPost submit={handleCreatePost} isEditing={false} />
        </div>
    )
}