'use client'
import BackButton from "@/app/components/backButton"
import ButtonAction from "@/app/components/buttonaction"

const Blog=()=>{
    return (
        <div>
        <BackButton/>
        <div className="mb-8">
            <h2 className="text-2xl font-bold my-4">Post one</h2>
            <ButtonAction/>       
        </div>
        <p className="">Content</p>
        </div>
    )
}
export default Blog