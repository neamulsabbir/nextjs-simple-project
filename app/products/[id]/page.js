import ProductDetails from "@/Components/Templates/ProductDetails/ProductDetails";
import { getProductDataByID } from "@/data/getData";

export function generateMetadata({ params }) {
	const pdID = params.id;
	const data = getProductDataByID(parseInt(pdID));
	return {
		title: data?.title + " | Learn with Sumit",
		description: data?.description,
	};
}

const ProductDetailPage = () => {
	return <ProductDetails />;
};

export default ProductDetailPage;
