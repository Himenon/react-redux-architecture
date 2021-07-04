import { Context } from "@app/context/pages/IndexPage";
import type * as Service from "@app/services/pages/IndexPage";

import { createSelectorHook, createStoreHook, createDispatchHook } from "react-redux";

export const useStore = createStoreHook<Service.State>(Context);
export const useSelector = createSelectorHook<Service.State>(Context);
export const useDispatch = createDispatchHook<Service.State>(Context);
