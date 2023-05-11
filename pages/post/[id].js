import Post from "@/components/post"
import axios from "axios"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

export default function KhaleQezi () {
    const router = useRouter()
    const id = router.query.id

    const [pictureLink, setPictureLink] = useState("")
    const [caption, setCaption] = useState("")
    const [userName, setUserName] = useState("")

    useEffect( ()=>{
        axios.get("http://localhost/singlePost.php?id="+id)
        .then( res=>{
            if(res.status==200){
                setPictureLink(res.data.media)
                setCaption(res.data.caption)
                setUserName(res.data.fullName)   
            }
        } )
    } )

    return (
        <Post 
        pictureLink={pictureLink}
        caption={caption}
        id={id}
        userName={userName} />
    )
}