import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  createRoutesFromElements,
} from "react-router-dom";
import Navabar from "./components/layout/Navabar";
import RootLayout from "./components/layout/RootLayout";

let router = createBrowserRouter(
  createRoutesFromElements(<Route path="/" element={<RootLayout />}></Route>)
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
