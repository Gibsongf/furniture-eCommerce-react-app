import { Product } from "./components/Products/ProductCard";

export function mergeSort(arr: Product[], order: string): Product[] {
    // if there is just one item in the array it is sorted return
    if (order === "default") return arr;
    if (arr.length <= 1) {
        return arr;
    }
    //divide the array
    const half = Math.floor(arr.length / 2);
    const right = arr.slice(0, half);
    const left = arr.slice(half);
    return mergeArr(mergeSort(right, order), mergeSort(left, order), order);
}
function mergeArr(l: Product[], r: Product[], order: string): Product[] {
    const merge: Product[] = [];
    const lgth = r.length + l.length;
    while (lgth != merge.length) {
        if (!r[0]) {
            merge.push(l.shift()!);
        } else if (order === "descending") {
            if (l[0]?.price >= r[0]?.price || l[0] === undefined) {
                merge.push(r.shift()!);
            } else {
                merge.push(l.shift()!);
            }
        } else {
            if (l[0]?.price <= r[0]?.price || l[0] === undefined) {
                merge.push(r.shift()!);
            } else {
                merge.push(l.shift()!);
            }
        }
    }

    return merge;
}
