"use client";

import { Playfair_Display } from "next/font/google";
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";

const playfair = Playfair_Display({ subsets: ["latin"] });

interface ImageCardProps {
	title: string;
	description: string;
	quote: string;
	image_set: { url: string; description: string }[];
}

export const ImageCard: React.FC<ImageCardProps> = ({ image_set, quote, title, description }) => {

	const [main_image, set_main_image] = useState({ url: image_set[0].url, description: image_set[0].description });

	useEffect(() => {
		set_main_image({ url: image_set[0].url, description: image_set[0].description });
	},[image_set]);

	return (
		<div className="relative inset-0 justify-center w-[40%] flex flex-col">
			<h1 className={`text-slate-600 text-5xl font-bold mt-0 ${playfair.className}`}>{title}</h1>
			<p className="text-slate mt-4 mb-0">{description}</p>
			<div className="grid gap-4 m-6">
				<div>
					<div className="relative">
						<Image src={main_image.url} width={300} height={200} className="bg-slate-400 h-auto max-w-full rounded-lg w-[100%] h-auto select-none " alt="" />
						<div
							className="absolute m-2 bottom-0 p-2 text-sm text-cyan-800 rounded-lg bg-cyan-50 dark:bg-cyan-800 dark:text-cyan-300 opacity-65 hover:opacity-100 cursor select-none"
							role="alert">
							<Link href={"/" + main_image.url} className="font-medium">
								See on Map
							</Link>{" "}
							{main_image.description}
						</div>
					</div>

					<div className="grid grid-cols-5 gap-4 mt-3">
						{image_set.map(({ url, description }) => (
							<div
								key={url}
								onClick={() => set_main_image({ url, description })}
								className={`${main_image.url === url ? "ring ring-cyan-500 ring-offset-2 rounded-lg" : ""}`}>
								<Image
									priority={true}
									src={url}
									alt={description}
									width={200}
									height={100}
									placeholder = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAC0lEQVR42mNkAAIAAAoAAv/lxKUAAAAASUVORK5CYII='
									className="bg-slate-400 h-auto max-w-full rounded-lg w-[100%] h-auto cursor-pointer select-none"
								/>
							</div>
						))}
					</div>

					<blockquote className="text-l italic font-semibold text-slate-500 dark:text-white m-6">
						<svg
							className="w-8 h-8 text-slate-400 dark:text-slate-600 mb-4"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="currentColor"
							viewBox="0 0 18 14">
							<path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
						</svg>
						<p>&quot; {quote} &quot;</p>
					</blockquote>
				</div>

				<Link
					href={"/#"}
					className="select-none w-max inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-slate-700 rounded-lg hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-slate-300 dark:bg-slate-600 dark:hover:bg-slate-700 dark:focus:ring-slate-800">
					Read more
					<svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
						<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
					</svg>
				</Link>
			</div>
		</div>
	);
};