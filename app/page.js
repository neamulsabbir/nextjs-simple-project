import ContactSection from "@/Components/SharedFolder/ContactSection";
import Footer from "@/Components/SharedFolder/Footer";
import AllProducts from "@/Components/Templates/Home/Allproducts/AllProducts";
import HeaderSection from "@/Components/Templates/Home/HeaderSection";
export const metadata = {
	title: "Home - Learn with Sumit",
};

export default function Home() {
	return (
		<div>
			<HeaderSection />
			<AllProducts />
			<ContactSection />
			<Footer />
		</div>
	);
}
