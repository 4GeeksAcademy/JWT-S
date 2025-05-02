import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { Layout } from "./pages/Layout";
import { Home } from "./pages/Home";
import { Single } from "./pages/Single";
import { Demo } from "./pages/Demo";

export const router = createBrowserRouter(
  createRoutesFromElements(
      // Root Route: All navigation will start from here
      <Route path="/" element={<Layout />} errorElement={<h1>Page Not Found!</h1>} >

          {/* Default Route inside Layout */}
          <Route index element={<Home />} /> {/* `index` is a shorthand for the default route */}

          {/* Dynamic route for single items */}
          <Route path="/single/:theId" element={<Single />} />

          {/* Demo Route */}
          <Route path="/demo" element={<Demo />} />

      </Route>
  )
);
