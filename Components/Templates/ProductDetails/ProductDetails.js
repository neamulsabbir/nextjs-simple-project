"use client";

import { getProductDataByID } from "@/data/getData";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";
import ProductRatings from "./ProductRatings";

export function generateStaticParams() {
	return data((product) => ({
		productId: product.id,
	}));
}

const ProductDetails = () => {
	const params = useParams();
	const data = getProductDataByID(parseInt(params.id));
	const [newThumbnail, setNewThumbnail] = useState(data?.thumbnail || " ");

	const { title, description, category, images, price, discountPercentage, rating } = data;

	const discountPrice = price - discountPercentage;

	return (
		<main>
			<section className="bg-[#fafaf2] h-full py-20">
				<div className="w-11/12 lg:w-8/12 max-w-7xl mx-auto flex flex-col gap-12 lg:flex-row items-center justify-between">
					<div className="w-full lg:w-7/12 border border-slate-500/20 p-4">
						<Image
							src={newThumbnail}
							width={400}
							height={500}
							className="w-[400px] h-[500px] mx-auto object-cover"
							alt={newThumbnail}
						/>

						<div className="flex gap-4 mt-4">
							{images.map((image, i) => {
								return (
									<Image
										key={i}
										onClick={() => setNewThumbnail(image)}
										src={image}
										width={100}
										height={100}
										className={`w-[100px] h-[100px] mx-auto border object-cover ${
											newThumbnail === image && "border-green-400 p-1"
										}`}
										alt={image}
									/>
								);
							})}
						</div>
					</div>
					<div className="w-full lg:w-5/12">
						<h1 className="italic text-xl lg:text-3xl font-serif font-semibold">{title}</h1>
						<Link href={`/category/${category}`}>
							<span className="text-[#919090] my-3">{category}</span>
						</Link>
						<div className="mt-3 flex items-center justify-start gap-1">
							<ProductRatings rating={rating} />
						</div>
						<hr className="my-5 bg-black" />

						<div>
							<p className="my-3">
								<span className="text-rose-600 opacity-60 line-through">${price}</span>
								<span className="font-bold text-2xl ml-2">${discountPrice}</span>
							</p>
						</div>
						<div>
							<p className="leading-7">{description}</p>

							<button className="w-full bg-[#1a1a1a] hover:bg-[#3a3a3a] text-center py-3 mt-5 text-white rounded-full">
								Add To Cart - ${discountPrice}
							</button>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
};

export default ProductDetails;
