import React from "react";
import Image from "next/image";
import { Suspense } from 'react';
import Link from 'next/link'

interface BlogCardProps {
	title: string;
	excerpt: string;
	link: string;
	imageUrl: string;
	altText: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ title, excerpt, link, imageUrl, altText }) => {
    return (
        <Link href={link} className="block">
            {/* <div className="bg-white shadow-md rounded-xl hover:outline outline-cyan-700 outline-offset-2 ">
                <div className="relative w-full h-60">
                    <Image loading="lazy" src={imageUrl} alt={altText} className=" object-cover rounded-t-xl" fill />
                </div>
                <h2 className="text-xl text-cyan-950 font-bold p-4 pb-2">{title}</h2>
                <p className="text-slate-600 p-4 pt-2">{excerpt}</p>
            </div> */}

            

            <div className="max-w-sm bg-white border border-slate-200 rounded-lg shadow dark:bg-slate-800 dark:border-slate-700 h-full">

                    <Image loading="lazy" src={imageUrl} alt={altText} width={300} height={200} className="rounded-t-lg w-[100%] h-auto" style={{maxWidth: '100%', height: 'auto'}} />
                <div className="p-5">

                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-slate-900 dark:text-white">{title}</h5>

                    <p className="mb-3 font-normal text-slate-700 dark:text-slate-400">{excerpt}</p>
                    <Link href={link} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-slate-700 rounded-lg hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-slate-300 dark:bg-slate-600 dark:hover:bg-slate-700 dark:focus:ring-slate-800">
                        Read more
                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </Link>
                </div>
            </div>


        </Link>
    );
};

export const BlogCardSkele = () => {
    return (
        <div className="max-w-sm bg-slate-200 border border-slate-200 rounded-lg shadow w-80">
            <div className="animate-pulse">
                <div className="bg-slate-400 rounded-t-lg w-full h-[200px]"></div>
                <div className="p-5">
                    <div className="bg-slate-400 h-6 mb-4 rounded"></div>
                    <div className="bg-slate-400 h-4 mb-3 rounded"></div>
                    <div className="bg-slate-400 h-4 mb-3 rounded w-3/4"></div>
                    <div className="bg-slate-400 h-4 w-1/2 rounded"></div>
                </div>
            </div>
        </div>
    );
}


export default BlogCard;
