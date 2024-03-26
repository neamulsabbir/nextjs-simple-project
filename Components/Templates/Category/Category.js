"use client";
import ProductCard from "@/Components/SharedFolder/ProductCard";
import { categories } from "@/Components/SharedFolder/constant";
import { getProductDataByCategory } from "@/data/getData";
import Link from "next/link";
import { useParams } from "next/navigation";

const Category = () => {
	const params = useParams();

	const data = getProductDataByCategory(params.category || "all");

	return (
		<section className="w-11/12 lg:w-10/12 max-w-7xl mx-auto py-0 lg:py-10 lg:flex justify-between items-start ">
			<div className="w-full flex items-center justify-between lg:block lg:w-2/12 my-10 lg:my-0 lg:mt-4 static">
				{categories.map((category) => (
					<Link
						href={`/category/${category.category}`}
						key={category.id}
						className={` mt-4 ${
							params.category === category.category && "text-green-400"
						} block h-6 box-border`}
					>
						<span className="hover:border-b border-black">{category.name}</span>
					</Link>
				))}
			</div>

			<div className="w-full lg:w-10/12  my-4 lg:my-10 ">
				{data?.length < 1 ? (
					<div className="w-full my-20  ">
						<h2 className="text-2xl text-gray-600 text-center">No Products Available</h2>
					</div>
				) : (
					<div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
						{data?.map((product) => (
							<ProductCard key={product.id} product={product} />
						))}
					</div>
				)}
			</div>
		</section>
	);
};

export default Category;
