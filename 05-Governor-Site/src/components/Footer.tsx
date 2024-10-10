import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <section className='relative py-24 mt-10 bg-[#F4F4F5]'>
            <div className='max-w-[85%] mx-auto'>
                <div className='flex justify-between md:flex-row flex-col md:gap-0 gap-8'>
                    <div>
                        <ul className='flex flex-col gap-3'>
                            <h4 className='font-bold text-black text-2xl md:mb-4'>Core Courses</h4>
                            <li>Programming Fundamentals</li>
                            <li>Web2 Using NextJs</li>
                            <li>Earn as You Learn</li>
                        </ul>
                    </div>
                    <div className='flex gap-10 md:flex-row flex-col'>
                        <ul className='flex flex-col gap-3'>
                            <h4 className='font-bold text-black text-2xl md:mb-4'>Advanced Courses</h4>
                            <li>Artificial Intelligence</li>
                            <li>Web3 and Metaverse</li>
                            <li>Cloud-Native Computing</li>
                            <li>Ambient Computing and IoT</li>
                            <li>Genomics and Bioinformatics</li>
                            <li>Network Programmability and Automation</li>
                        </ul>
                    </div>
                    <div>
                        <div>
                            <h4 className='font-bold text-black text-2xl mb-6'>Social Links</h4>
                            <ul className='flex gap-4 items-center mb-4'>
                                <Image src='/facebook.png' alt='facebook' width={30} height={30} />
                                <Image src='/youtube.png' alt='youtube' width={30} height={30} />
                                <Image src='/twitter.png' alt='twitter' width={30} height={30} />
                                <Image src='/instagram.png' alt='istagram' width={30} height={30} />
                                <Image src='/tiktok.png' alt='tiktok' width={30} height={30} />
                            </ul>
                            <Link href='mailto:education@governorsindh.com'>
                            <span className="text-blue-600 underline">education@governorsindh.com</span>
                            </Link>
                            
                            {/* <Link href='mailto:education@governorsindh.com'><li className='list-none '>
                            
                            </li></Link> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer