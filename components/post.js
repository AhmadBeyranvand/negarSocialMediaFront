import profile from "../assets/img/profile.png"
import Image from "next/image"
import {FaEye, FaHeart, FaComment, FaCalendar, FaUser} from "react-icons/fa"
import { useEffect, useState } from "react"
import axios from "axios";

export default function Post(props) {

    const [likeCount, setLikeCount] = useState(0)
    const [likeColor, setLikeColor] = useState("")

    const newLike = ()=>{
        axios.get("http://localhost/postDetails/newLike.php?post_id="+props.id)
        .then( res => {
            if(res.status==200){
                likeCountCalc()
                setLikeColor("text-red-500")
            }
        })
    }

    const likeCountCalc = ()=>{
        axios.get("http://localhost/postDetails/likeCount.php?id="+props.id)
        .then( res => {
            if( res.status == 200){
                setLikeCount(res.data)
            }
        } )
    }

    useEffect( ()=>{
        likeCountCalc()
    } , [] )


    return (
        <div className="post">
            <div className="px-6 py-4 flex items-center">
                <Image src={profile} width={60} alt="" />
                <a href="#">
                    <strong className="font-bold mx-4">
                        {props.userName}
                    </strong>
                </a>
            </div>
            <a href={"/post/"+props.id} className="my-4 relative">
                <img src={props.pictureLink} alt="" />
            </a>
            <div className="my-3">
                <button className="px-3">
                    <i className="far fa-heart fa-2x"></i>
                </button>
                <button className="px-3">
                    <i className="fas fa-heart fa-2x text-red-500"></i>
                </button>
                <button className="px-3">
                    <i className="far fa-comment fa-2x"></i>
                </button>
                <button className="px-3">
                    <i className="fas fa-comment fa-2x"></i>
                </button>
            </div>
            <div className="p-3">
                <strong className="font-bold">{props.caption}</strong>

                <div className="stats flex justify-between text-gray-600 my-2">
                    <div className="flex items-center">
                        <FaUser/>
                        <span className="m-2">کاربر تست</span>
                    </div>
                    <div className="flex items-center">
                        <FaCalendar />
                        <span className="m-2">۱۴۰۱/۲/۱۲ ۱۳:۰۰</span>
                    </div>
                </div>
                <div className="stats flex justify-between text-gray-600 my-2">
                    <div className="flex items-center">
                        <FaEye />
                        <span className="m-2">1205</span>
                    </div>
                    <div className="flex items-center">
                        <FaComment />
                        <span className="m-2">97</span>
                    </div>

                    <div className="flex items-center">
                        <FaHeart onClick={newLike} className={likeColor} />
                        <span className="m-2">{likeCount}</span>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}