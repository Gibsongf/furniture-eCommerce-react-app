import { faker } from "@faker-js/faker";
import { Product } from "./components/Products/ProductCard";

const getImgSrc = (
    itemName: string,
    itemNum: number,
    discount?: number,
    newProduct?: boolean
) => {
    const numImgs = 2;

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
type ImageInfo = [string, number, number | undefined, boolean?];

const repeat: ImageInfo[] = [
    ["bed", 0, undefined, true],
    ["bed", 1, 5],
    ["chair", 0, undefined, true],
    ["chair", 1, 30],
    ["table", 0, undefined, true],
    ["table", 1, 20],
    ["sofa", 0, undefined, true],
    ["sofa", 1, 15],
];
const moreProducts = () => {
    const p: Product[] = [];
    for (let i = 0; i <= 3; i++) {
        repeat.forEach((arr) => {
            p.push(getImgSrc(arr[0], arr[1], arr[2], arr[3]));
        });
    }
    return p;
};

export const allProducts = moreProducts();
