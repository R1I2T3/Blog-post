'use client'
import Link from "next/link"
import { Pencil, Trash2 } from "lucide-react"
import { useMutation } from "@tanstack/react-query"
import { FC } from "react"
import axios from "axios"
import { useRouter } from "next/navigation"
import { error } from "console"
interface ButtonActionProps {
        id: string
}
const ButtonAction: FC<ButtonActionProps> = ({ id}) => {
    const router = useRouter();
    const { mutate:deletePost,isLoading } = useMutation({
        mutationFn: async () => {
            return axios.delete(`/api/posts/${id}`)
        },
        onError:(error)=>{
            console.error(error)
        },
        onSuccess: () => {
            router.push('/')
            router.refresh();
        }
    })
    return (
        <div>
            <Link href={`/edit/${id}`} className="btn mr-2" ><Pencil /></Link>
            <button className="btn btn-error" onClick={()=>deletePost()}>
                {isLoading&& <span className="loading loading-spinner"></span>}
                { isLoading ?('Loading...'):(<Trash2></Trash2>)}
                </button>
        </div>
    )
}
export default ButtonAction