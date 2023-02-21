import { Provider } from "react-redux";
import "../styles/globals.css";
import Layout from "./layout/Layout";
import { persistor, store } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
``;
function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </PersistGate>
    </Provider>
  );
}

export default MyApp;
