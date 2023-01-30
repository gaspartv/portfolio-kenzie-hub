import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GlobalStyle from "./styles/global";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import UserProvider from "./contexts/UserContext";
import LoadProvider from "./contexts/LoadContext";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <LoadProvider>
        <BrowserRouter>
          <UserProvider>
            <Routes />
          </UserProvider>
        </BrowserRouter>
      </LoadProvider>
    </>
  );
};

export default App;
