import { BlogCardSkele } from "@/ui/home/blog-card";
import HeroImage from "@/ui/home/hero-image"
import Header from "@/ui/home/header"
import Footer from "@/ui/home/footer";
import BlogCardWrapper from "@/ui/home/blog-card-wrapper";

export default function Page() {
	return (
		<>
			<Header />

			<main className="flex min-h-screen flex-col items-center justify-between p-10 pt-20">

				<HeroImage imageUrl="/hero/hero-image.jpg" altText="Hero Image" />

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					<BlogCardWrapper />

					<BlogCardSkele />
				</div>
			</main>

			<Footer />
		</>
	);
}
