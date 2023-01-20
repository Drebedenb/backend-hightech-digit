import {createContext} from "react";

function noop() {};

export const OrdersContext = createContext({
    name: "",
    price: "",
    toggleName: () => {},
    togglePrice: () => {}
})