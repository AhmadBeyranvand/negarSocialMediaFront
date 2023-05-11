import Header from "@/components/header"
import scrollGif from "../assets/img/scroll.gif"
import Image from "next/image"
import Post from "@/components/post"
import axios from "axios"
import { useEffect, useState } from "react"

export default function Home() {

	const [postList, setPostList] = useState([])

	useEffect( ()=>{
		axios.get("http://localhost/postList.php")
		.then((res)=>{
			if(res.status==200){
				setPostList(res.data)
			}
		})
		.catch(()=>{
			alert("ERROR")
		})
	})

	return (
		<div>
			<Header />
			<main className="main-container">
				<section className="min-h-screen flex flex-col items-center justify-center ">
					<h1 className="text-8xl font-bold text-gradient my-6">شبکه اجتماعی نگار</h1>
					<h2 className="text-5xl font-bold text-white my-2">همه چیز از همه جا</h2>
					<strong className="text-xl font-light text-purple-100 my-5">به دنیای تصاویر از سراسر جهان خوش آمدید. اینجا بیش
						از
						<span id="picSum">2000</span>+
						تصویر برای بازدید شما آماده است
					</strong>
					<a href="#"> <Image src={scrollGif} width={86} className="my-8" alt="" /> </a>
				</section>

				<div className="flex">

					<section className="min-h-screen bg-white w-11/12 rounded-2xl p-3 mx-auto my-6 flex flex-wrap">
						<aside className="w-1/4"></aside>

						<div className="w-3/4">
							{
								postList.map( (item)=>(
									<Post id={item.id} userName={item.fullName} pictureLink={item.media} caption={item.caption} />
								) )
							}
						</div>
						
					</section>
				</div>

			</main>
		</div>
	)
}
