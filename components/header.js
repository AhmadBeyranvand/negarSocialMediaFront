import Image from "next/image"
import logo from "../assets/img/logo.svg"
export default function Header () {
    return (
        <header className="">
        <div className="flex justify-between px-6 py-4 bg-slate-800 items-center">
            <nav className="header-menu">
                <ul>
                    <li><a href=""> خانه </a></li>
                    <li><a href=""> گشت و گذار </a></li>
                    <li><a href=""> جستجو </a></li>
                </ul>
            </nav>
            <div className=" flex items-center mx-auto">
                <Image src={logo} alt="لوگو شبکه" />
                <h1 className="mx-2 text-white font-bold text-2xl">شبکه اجتماعی نگار</h1>
            </div>
            <div className="">
                <a className="header-button" href="login.html">ورود</a>
                <a className="header-button" href="register.html">ثبت‌نام</a>
            </div>
        </div>
        <div className="bar"></div>
    </header>
    )
}