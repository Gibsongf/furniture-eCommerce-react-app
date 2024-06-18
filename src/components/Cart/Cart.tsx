import { ServiceBenefits } from "../Shop/ServiceBenefits";
import { ShopHeader } from "../Shop/ShopHeader";
import { CartItems } from "./MainContent";

export default function Cart() {
    return (
        <>
            {" "}
            <ShopHeader />
            <CartItems />
            <ServiceBenefits />
        </>
    );
}
