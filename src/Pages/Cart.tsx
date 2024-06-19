import { CartContent } from "../components/Cart/Cart";
import { ServiceBenefits } from "../components/Shop/ServiceBenefits";
import { ShopHeader } from "../components/Shop/ShopHeader";

export default function Cart() {
    return (
        <>
            {" "}
            <ShopHeader />
            <CartContent />
            <ServiceBenefits />
        </>
    );
}
