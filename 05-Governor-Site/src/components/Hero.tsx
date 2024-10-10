import Image from "next/image"

const Hero = () => {
    return (
        <section className='relative md:py-28 pt-16 h-[140vh] md:h-[130vh] overflow-hidden'>
            <div className='absolute top-0 left-0 w-full h-full bg-[url("/download.jpeg")] bg-cover bg-top opacity-20'></div>
            <div className='max-w-[90%] mx-auto relative z-10'>
                <div className='flex md:flex-row flex-col justify-between items-center'>
                    <div className='md:w-[50%] relative z-50 text-center md:text-start'>
                        <h1 className='md:text-5xl text-3xl text-[#044E83] mb-6'><span className='font-bold md:text-[68px] text-4xl'>Governor Sindh</span> Kamran Khan Tessori</h1>
                        <h2 className='text-[#2EB6E8] text-3xl md:text-4xl font-extrabold mb-6'>Certified Cloud Applied Generative AI Engineer (GenEng)</h2>
                        <h4 className='text-[#044E83] text-xl md:text-2xl font-extrabold mb-4'>Earn up to $5,000 / month</h4>
                        <h3 className='text-[#044E83] text-xl md:text-3xl font-extrabold'>Now admissions are open in Hyderabad</h3>
                        <div className="md:mt-4 flex gap-4 md:gap-20 flex-col md:flex-row">
                            <button className='bg-[#044E83] text-white font-bold px-16 py-4 rounded-lg mt-6'>Apply Now</button>
                            <div className="flex flex-col gap-1 mt-4 items-center">
                                <span className="text-[#044E83] text-3xl font-extrabold">562,143</span>
                                <span>Accepted Applications</span>
                            </div>
                        </div>
                    </div>
                    <div className='md:w-[50%] mt-6 md:mt-0'>
                        <Image src='/governor.png' alt='governor' width={900} height={900} className="min-w-[900px] h-auto absolute md:-top-20 md:-right-[480px] -right-[320px]" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero