import axios from "axios"
import Image from "next/image"
import { useState } from "react"
import logo from "../../assets/img/logo.svg"
export default function Login() {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const loginCheck = ()=>{
        axios.get("http://localhost/auth/login.php", {
            params : {
                username: username,
                password: password
            }
        }).then (res=>{
            if(res.data.exist===true){
                localStorage.setItem("user_logged_in", res.data.exist)

            } else {
                alert(res.data.message)
            }
        }).catch(err=>{
            alert("بروز خطا در ارتباط با سرور")
        })
    }

    return (
        <div className="w-full min-h-screen flex flex-col justify-center items-center">
            <Image width={150} src={logo} className="my-5" />
            <div className="flex flex-col p-4 2xl:w-1/4 lg:w-1/3 md:w-1/2 w-full">
                <label>نام کاربری</label>
                <input value={username} onChange={(e)=>{setUsername(e.target.value)}} className="bg-white p-3 border border-solid border-gray-200 mx-2 my-3 rounded-lg hover:border-blue-300" type="text" />
                <br />
                <label>رمز عبور</label>
                <input value={password} onChange={e=>{ setPassword(e.target.value)}} className="bg-white p-3 border border-solid border-gray-200 mx-2 my-3 rounded-lg hover:border-blue-300" type="password" />
                <br />
                <button onClick={ loginCheck } className="bg-blue-400 text-white hover:bg-blue-600 py-3 px-8 rounded-lg mx-auto my-4">
                    ورود
                </button>
            </div>
        </div>
    )
}