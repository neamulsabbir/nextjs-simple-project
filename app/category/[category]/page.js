import ContactSection from "@/Components/SharedFolder/ContactSection";
import Footer from "@/Components/SharedFolder/Footer";
import Category from "@/Components/Templates/Category/Category";
import CategoryHeader from "@/Components/Templates/Category/CategoryHeader";

export function generateMetadata({ params }) {
	const category = params.category;
	return {
		title: category.charAt(0).toUpperCase() + category.slice(1) + " | Learn with Sumit",
	};
}

const CategoryDetail = () => {
	return (
		<div>
			<CategoryHeader />
			<Category />
			<ContactSection />
			<Footer />
		</div>
	);
};

export default CategoryDetail;
