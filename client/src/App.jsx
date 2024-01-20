import "./App.css";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Home from "./pages/home";
import SignUp from "./pages/signup";
import Login from "./pages/login";
import RouterPage from "./pages/RouterPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element = {<RouterPage/>}>
        <Route path="login" element= {<Login/>}></Route>
        <Route path="signup" element= {<SignUp/>}></Route>
        <Route path="" element= {<Home name = 'sudhan'/>}></Route>
    </Route>
  )
)

const App = () => {
  const site_title = "JWT Practice";
  return (
<RouterProvider router={router}></RouterProvider>
  );
};

export default App;
