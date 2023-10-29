import Link from "next/link"
import { Pencil ,Trash2} from "lucide-react"
const ButtonAction=()=>{
    return (
        <div>
            <Link href={'/edit/id'} className="btn mr-2"><Pencil /></Link>
            <button className="btn btn-error"><Trash2 /></button>
        </div>
    )
}
export default ButtonAction