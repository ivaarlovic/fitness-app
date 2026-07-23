import { createContext } from "react";
import rootStore from "../stores/RootStore";

const StoreContext = createContext(rootStore);

export default StoreContext;