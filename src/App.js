import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import Add from "./pages/Add/Add";
import Gig from "./pages/Gig/Gig";
import Gigs from "./pages/Gigs/Gigs";
import MyGigs from "./pages/MyGigs/MyGigs";
import Orders from "./pages/Orders/Orders";

function App() {
  const Layout = () => {
    return (
      <div className="app">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/gigs", element: <Gigs /> },
        { path: "/gig/:id", element: <Gig /> },
        { path: "/orders", element: <Orders /> },
        { path: "/mygigs", element: <MyGigs /> },

        { path: "/add", element: <Add /> },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
