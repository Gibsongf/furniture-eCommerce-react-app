import { Product } from "./components/Products/ProductCard";

// products will need more info like side images and the current review of it

export const fakeProducts: Product[] = [
    {
        name: "Syltherine",
        src: "src/assets/Home/product-1.png",
        preview: "Stylish cafe chair",
        description:
            "Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus,sem quam semper libero, sit amet adipiscing sem neque sedipsum. Nam quam nunc, blandit vel, luctus pulvinar,hendrerit id, lorem.",
        price: 100,
        newProduct: true,
        quantity: 1,
    },
    {
        name: "Syltherine",
        src: "src/assets/Home/product-1.png",
        preview: "Stylish cafe chair",
        description:
            "Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus,sem quam semper libero, sit amet adipiscing sem neque sedipsum. Nam quam nunc, blandit vel, luctus pulvinar,hendrerit id, lorem.",
        price: 100,
        discount: 50,
        quantity: 1,
    },
];

//create more product from fake product values with increase of price
const moreProducts: Product[] = Array(32)
    .fill(0)
    .map((n, index) => {
        const obj = { ...fakeProducts[index % 2] };
        obj.price += index;
        obj.name += index;
        return obj;
    });

interface PageObj {
    [key: string]: Product[];
}
// const [itemsPage, setItemPage] = useState("8");
//obj with page num as key with the values being an array of Product[]
export const pagination = (itemsPage: string) => {
    const pagesObj: PageObj = {};
    let page = 0;
    moreProducts.forEach((obj) => {
        let key = String(page);
        if (!pagesObj[key]) {
            pagesObj[key] = [obj];
        } else if (pagesObj[key].length === Number(itemsPage)) {
            //when obj[key] with products get to the same length of item in page
            //we increase page num then use it as key and start to add new products to it
            page++;
            key = String(page);
            pagesObj[key] = [obj];
        } else {
            pagesObj[page].push(obj);
        }
    });
    return pagesObj;
};
