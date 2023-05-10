import Image from "next/image"
import logo from "../assets/img/logo.svg"
export default function Header () {
    return (
        <header class="">
        <div class="flex justify-between px-6 py-4 bg-slate-800 items-center">
            <nav class="header-menu">
                <ul>
                    <li><a href=""> خانه </a></li>
                    <li><a href=""> گشت و گذار </a></li>
                    <li><a href=""> جستجو </a></li>
                </ul>
            </nav>
            <div class=" flex items-center mx-auto">
                <Image src={logo} alt="لوگو شبکه" />
                <h1 class="mx-2 text-white font-bold text-2xl">شبکه اجتماعی نگار</h1>
            </div>
            <div class="">
                <a class="header-button" href="login.html">ورود</a>
                <a class="header-button" href="register.html">ثبت‌نام</a>
            </div>
        </div>
        <div class="bar"></div>
    </header>
    )
}