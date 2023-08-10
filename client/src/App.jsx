import axios from "axios";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import HomePage from "./pages/HomePage";
import RootLayout from "./components/Layout/RootLayout";
import ToDoDetailPage from "./pages/ToDoDetailPage";
import AboutToDo from "./pages/AboutToDo";
import NotFound from "./components/Errors/NotFound";

axios.defaults.baseURL = "http://localhost:4000";
axios.defaults.withCredentials = true;

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/about" element={<AboutToDo />} />
        <Route path="/todo/:id" element={<ToDoDetailPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>,
    ),
  );

  return <RouterProvider router={router} />;
}

export default App;
