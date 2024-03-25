import React from "react";
import Image from "next/image";

interface BlogCardProps {
	title: string;
	excerpt: string;
	link: string;
	imageUrl: string;
	altText: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ title, excerpt, link, imageUrl, altText }) => {
	return (
		<div className="bg-white shadow-md rounded-md rounded-2xl">
            <div className="relative w-full h-60  ">
			    <Image src={imageUrl} alt={altText} className=" object-cover rounded-t-2xl" fill/>
            </div>
			<h2 className="text-xl text-indigo-900 font-bold mb-2 p-4">{title}</h2>
			<p className="text-gray-600 p-4">{excerpt}</p>
			<a href={link} className="text-indigo-900 hover:underline font-bold mb-4 p-6">
				Read more
			</a>
		</div>
	);
};

export default BlogCard;
