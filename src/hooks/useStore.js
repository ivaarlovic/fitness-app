import { useContext } from "react";
import StoreContext from "../context/StoreContext";

function useStore() {
    return useContext(StoreContext);
}

export default useStore;