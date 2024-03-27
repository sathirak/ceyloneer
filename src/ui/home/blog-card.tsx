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
            <div className="bg-white shadow-md rounded-xl hover:outline outline-cyan-700 outline-offset-2 ">
                <div className="relative w-full h-60">
                    <Image loading="lazy" src={imageUrl} alt={altText} className=" object-cover rounded-t-xl" fill />
                </div>
                <h2 className="text-xl text-cyan-950 font-bold p-4 pb-2">{title}</h2>
                <p className="text-gray-600 p-4 pt-2">{excerpt}</p>
            </div>
        </Link>
    );
};

export const BlogCardSkele = () => {
    return (
        <div className="bg-white shadow-md rounded-xl hover:outline outline-cyan-700 outline-offset-2 animate-pulse">
            <div className="relative w-full h-60 bg-gray-200 rounded-t-xl"></div>
            <div className="p-4">
                <div className="h-6 bg-gray-300 w-3/4 mb-2"></div>
                <div className="h-4 bg-gray-300 w-1/2 mb-3"></div>
                <div className="h-4 bg-gray-300 w-3/4"></div>
            </div>
        </div>
    );
}


export default BlogCard;
