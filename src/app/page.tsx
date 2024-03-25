import BlogCard from "@/ui/home/blog-card";
import HeroImage from "@/ui/home/hero-image";

export default function Page() {
	return (
		<main className="bg-red flex min-h-screen flex-col items-center justify-between p-10">
			<HeroImage imageUrl="/hero/hero-image.jpg" altText="Hero Image" />

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				<BlogCard
					imageUrl="/hero/hero-image.jpg"
					altText="Hero Image"
					title="Blog Post Title 1"
					excerpt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget libero eget mauris volutpat lacinia."
					link="#"
				/>

				<BlogCard
					imageUrl="/hero/hero-image.jpg"
					altText="Hero Image"
					title="Blog Post Title 2"
					excerpt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget libero eget mauris volutpat lacinia."
					link="#"
				/>

				<BlogCard
					imageUrl="/hero/hero-image.jpg"
					altText="Hero Image"
					title="Blog Post Title 3"
					excerpt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget libero eget mauris volutpat lacinia."
					link="#"
				/>
			</div>
		</main>
	);
}
