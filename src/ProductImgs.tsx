import { faker } from "@faker-js/faker";
import { Product } from "./components/Products/ProductCard";
// name: string;
//     price: number;
//     src: string;
//     description: string;
//     quantity: number;
//     preview?: string;
//     newProduct?: boolean;
//     discount?: number;
//     total?: number;

const getImgSrc = (
    itemName: string,
    itemNum: number,
    discount?: number,
    newProduct?: boolean
) => {
    let numImgs = 3;
    if (itemName === "chair") {
        numImgs--;
    }
    const imgUrl = [];
    for (let n = 0; n <= numImgs; n++) {
        const url = `/${itemName}-${itemNum}-${n}.jpeg`;
        imgUrl.push(url);
    }
    const finalObj: Product = {
        name: faker.commerce.productName(),
        src: imgUrl,
        price: Number(faker.commerce.price()),
        quantity: 1,
        description: faker.commerce.productDescription(),
        preview: faker.commerce.productAdjective(),
    };
    if (discount) {
        finalObj.discount = discount;
    }
    if (newProduct) {
        finalObj.newProduct = newProduct;
    }
    return finalObj;
};
export const allProducts = [
    getImgSrc("bed", 0, undefined, true),
    getImgSrc("bed", 1, 10),
    getImgSrc("chair", 0, undefined, true),
    getImgSrc("chair", 1, 10),
    getImgSrc("table", 0, undefined, true),
    getImgSrc("table", 1, 10),
    getImgSrc("sofa", 0, undefined, true),
    getImgSrc("sofa", 1, 10),
];
