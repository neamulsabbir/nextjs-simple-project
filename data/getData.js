import data from "./data.json";

const getProductData = () => {
	return data;
};

const getProductDataByID = (id) => {
	const matchedProduct = data.find((product) => product.id === id);

	return matchedProduct;
};

const getProductDataByCategory = (category) => {
	if (category === "all") {
		return data;
	}

	const matchedProducts = data.filter((product) => product.category === category);

	return matchedProducts;
};

export { getProductData, getProductDataByCategory, getProductDataByID };
