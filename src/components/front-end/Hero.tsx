import Image from "next/image"
import Link from "next/link"

const Hero = () => {
    return(
        <div className="bg-[#f8f8f8] py-20" mt-4>
            <div className="container grid md:grid-cols-2 py-8">
                <div className="flex items-center">
                    <div className="max-w-[450px] space-y-4">
                        <p className="text-topHeadingSecondary">
                            Starting at <span className="font-bold">$999.00</span>

                        </p>
                        <h1 className="text-topHeadingPrimary font-bold text-4xl md:text-5xl">
                            The best suit collection 2024
                        </h1>
                        <h3 className="text-2xl font-['oregano',cursive]">
                            Excluisive offer <span className="text-red-500">-10%</span> off this week
                        </h3>

                        <Link className="inline-block bg-white  px-6 py-3 hover:bg-accent hover:text-white" href="#">
                            Shop now
                        </Link>
                    </div>
                    </div>
                    <div>
                        <Image width={50} height={50} className='ml-auto' src='/hero.png' alt='hero' />
                    </div>

                </div>
                </div>
    

            
    )
}
export default Hero