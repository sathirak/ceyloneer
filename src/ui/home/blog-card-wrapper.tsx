import { fetch_front_articles } from "@/lib/data";
import BlogCard from "./blog-card";
import { BlogCardSkele } from "./blog-card";
import { Suspense } from "react";

export default async function BlogCardWrapper() {
	try {
		const articles = await fetch_front_articles();

		return (
			<>
				
					{articles?.map((art, index) => (
						<BlogCard key={index} imageUrl={art.imageurl} altText={art.alttext} title={art.title} excerpt={art.excerpt} link={art.link} />
					))}
				
			</>
		);
	} catch (error) {
		console.error("Failed to fetch articles:", error);
		return <div>Error fetching articles</div>;
	}
}

export const BlogCardsSkele = () => {
	return (
		<>
			<BlogCardSkele />
			<BlogCardSkele />
			<BlogCardSkele />
			<BlogCardSkele />
			<BlogCardSkele />
			<BlogCardSkele />
			<BlogCardSkele />
			<BlogCardSkele />
		</>
	);
};
