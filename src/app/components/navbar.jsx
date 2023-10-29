import Link from "next/link";
import { Container } from "postcss";
import { BookOpenCheck } from "lucide-react";
export default function Navbar() {
    return (
        <div className="navbar bg-base-200">
            <div className="flex justify-between container items-center">
            <div className="flex-1">
                <Link className="btn btn-ghost normal-case text-xl" href={'/'}><BookOpenCheck color="white" size={'20px'} /></Link>
            </div>
            <div className="flex-none">
                <Link className="btn" href={'/create'}>Add post</Link>
            </div>
            </div>
        </div>
    )
}