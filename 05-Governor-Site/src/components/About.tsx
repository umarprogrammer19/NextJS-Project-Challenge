import Image from 'next/image'
import React from 'react'

const About = () => {
    return (
        <section className='relative mt-20'>
            <div className='max-w-[90%] mx-auto'>
                <div>
                    <h2 className='text-xl md:text-3xl md:max-w-[90%] mx-auto font-bold mb-10 text-[#044e83] text-center'>Certified Cloud Applied Generative AI Engineer (GenEng) and Solopreneur Developing Billion-Dollar Valued Developers and Solopreneurs</h2>
                    <p className='text-black text-lg md:text-xl leading-8 tracking-normal text-justify'>The pace of technological change is accelerating, big players like Microsoft, Amazon, Google, and OpenAI are winning by providing infrastructure, large AI foundation models, frameworks, 3D Metaverse experiences, and massive distribution networks. Solopreneurs trained in this program will win by automating work typically outsourced to employees, by directly connecting to customers by eliminating the middleman, and by developing vertical metaverses, thus paving the way for the first billion-dollar valued solopreneur businesses. This program has the objective to train this new breed of billion-dollar solopreneurs. These solopreneurs will adopt the ultra-lean business model and work independently and will not need to hire employees or other team members.</p>
                </div>
                <div className='flex md:flex-row gap-8 flex-col justify-between items-center mt-8'>
                    <Image src='/about1.jpg' alt='solopreneur' width={380} height={300} className="rounded-lg h-[300px] shadow-2xl shadow-black object-cover" />
                    <Image src='/about2.jpg' alt='solopreneur' width={400} height={300} className="rounded-lg h-[300px] shadow-2xl shadow-black object-cover" />
                    <Image src='/about3.jpg' alt='solopreneur' width={400} height={300} className="rounded-lg h-[300px] shadow-2xl shadow-black object-cover" />
                </div>
            </div>
        </section>
    )
}

export default About