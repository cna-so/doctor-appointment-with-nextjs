import { AuthProvider } from "@/context/AuthContext";

import "@/styles/globals.scss";
import "bootstrap/dist/css/bootstrap.css";

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <div className="bg">
        <Component {...pageProps} />
      </div>
    </AuthProvider>
  );
}

export default MyApp;
