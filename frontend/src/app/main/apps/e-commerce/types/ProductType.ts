import { ProductImageType } from './ProductImageType';

/**
 * Product Type
 */
export type ProductType = {
	id: string;
	name: string;
	handle: string;
	description: string;
	categories: string[];
	tags: string[];
	featuredImageId: string;
	images: ProductImageType[];
	priceTaxExcl: number;
	priceTaxIncl: number;
	taxRate: number;
	comparedPrice: number;
	quantity: number;
	sku: string;
	width: string;
	height: string;
	depth: string;
	weight: string;
	extraShippingFee: number;
	active: boolean;
	price: string;
	image: string;
	total: string;
};

export type ProductsType = ProductType[];
