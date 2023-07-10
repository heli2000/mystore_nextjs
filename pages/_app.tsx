import Layout from "@/components/Layout/Layout";
import { ActionType } from "@/redux/cartCounter/actionTypes";
import rootReducer from "@/redux/rootReducer";
import { rootAction, rootState } from "@/redux/types";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { createStore, Store, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const store: Store<rootState, rootAction> & {
  dispatch: rootState;
} = createStore(rootReducer, applyMiddleware(thunk));

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
