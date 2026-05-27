import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Homepage from "../Pages/Homepage";
import Books from "../Pages/Books";
import ErrorPage from "../Pages/ErrorPage";

export const router = createBrowserRouter([
{
path : "/",
element : <MainLayout/>,
children : [
  {
    index : true,
    element : <Homepage/>
  },
  {
    path : "/books",
    Component : Books
  },
],
errorElement : <ErrorPage/>
}
]);