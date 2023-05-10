import profile from "../assets/img/profile.png"
import Image from "next/image"

export default function Post(props) {
    return (
        <div class="post">
            <div class="px-6 py-4 flex items-center">
                <Image src={profile} width={60} alt="" />
                <a href="#">
                    <strong class="font-bold mx-4">
                        {props.userName}
                    </strong>
                </a>
            </div>
            <a href="#" class="my-4 relative">
                <img src={props.pictureLink} alt="" />
            </a>
            <div class="my-3">
                <button class="px-3">
                    <i class="far fa-heart fa-2x"></i>
                </button>
                <button class="px-3">
                    <i class="fas fa-heart fa-2x text-red-500"></i>
                </button>
                <button class="px-3">
                    <i class="far fa-comment fa-2x"></i>
                </button>
                <button class="px-3">
                    <i class="fas fa-comment fa-2x"></i>
                </button>
            </div>
            <div class="p-3">
                <strong class="font-bold">{props.caption}</strong>

                <div class="stats flex justify-between text-gray-600 my-2">
                    <div class="flex items-center">
                        <i class="far fa-user"></i>
                        <span class="m-2">کاربر تست</span>
                    </div>
                    <div class="flex items-center">
                        <i class="far fa-calendar"></i>
                        <span class="m-2">۱۴۰۱/۲/۱۲ ۱۳:۰۰</span>
                    </div>
                </div>
                <div class="stats flex justify-between text-gray-600 my-2">
                    <div class="flex items-center">
                        <i class="far fa-eye"></i>
                        <span class="m-2">1205</span>
                    </div>
                    <div class="flex items-center">
                        <i class="far fa-comment"></i>
                        <span class="m-2">97</span>
                    </div>
                    <div class="flex items-center">
                        <i class="far fa-heart"></i>
                        <span class="m-2">321</span>
                    </div>
                </div>
            </div>
        </div>
    )
}