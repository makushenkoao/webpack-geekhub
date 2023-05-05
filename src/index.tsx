import { createRoot } from "react-dom/client";
import App from "App";
import "styles/index.scss";
import { StoreProvider } from "store";
const root = createRoot(document.getElementById("root"));
root.render(
  <StoreProvider>
    <App />
  </StoreProvider>
);
