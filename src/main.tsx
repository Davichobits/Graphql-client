import ReactDOM from "react-dom/client";
import { AuthProvider } from "./context/authContext.tsx";
import { BrowserRouter } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import App from "./App.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<BrowserRouter>
		<AuthProvider>
			<App />
		</AuthProvider>
  </BrowserRouter>
);
