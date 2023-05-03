import Header from "@/components/header"
import scrollGif from "../assets/img/scroll.gif"
import profile from "../assets/img/profile.png"
import img600x400 from "../assets/img/600x400.jpg"
import Image from "next/image"

export default function Home() {
  return (
    <div>
      <Header />
      <main class="main-container">
        <section class="min-h-screen flex flex-col items-center justify-center ">
            <h1 class="text-8xl font-bold text-gradient my-6">شبکه اجتماعی نگار</h1>
            <h2 class="text-5xl font-bold text-white my-2">همه چیز از همه جا</h2>
            <strong class="text-xl font-light text-purple-100 my-5">به دنیای تصاویر از سراسر جهان خوش آمدید. اینجا بیش
                از
                <span id="picSum">2000</span>+
                تصویر برای بازدید شما آماده است
            </strong>
            <a href="#"> <Image src={scrollGif} width={86} class="my-8" alt="" /> </a>
        </section>

        <div class="flex">

            <section class="min-h-screen bg-white w-11/12 rounded-2xl p-3 mx-auto my-6 flex flex-wrap">
                <aside class="w-1/4"></aside>
                <div class="w-3/4">
                    <div class="post">
                        <div class="px-6 py-4 flex items-center">
                            <Image src={profile} width={60} alt=""/>
                            <a href="#">
                                <strong class="font-bold mx-4">
                                    کاربر تست
                                </strong>
                            </a>
                        </div>
                        <a href="#" class="my-4 relative">
                            <Image src={img600x400} alt="" />
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
                            <strong class="font-bold">عنوان پست شماره ۳ - مطلب تست</strong>
                            <p class="text-gray-700 font-thin my-4">مطلب تست مطلب تست مطلب تست مطلب تست مطلب تست مطلب تست مطلب
                                تست مطلب تست مطلب تست مطلب تست مطلب تست ....</p>
                            <hr class="mb-4 mt-1" />
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
                   
                </div>
            </section>
        </div>
    </main>
    </div>
  )
}
