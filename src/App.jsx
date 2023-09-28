import { createBrowserRouter, RouterProvider } from "react-router-dom";

/* These are going to be our "pages" */
const router = createBrowserRouter([
  {
    path: "/",
    element: <h1>Home Page</h1>,
    errorElement: <h1 className="text-4xl font-bold text-red-500">404 Error</h1>
  },
  {
    path: "/contact",
    element: <h1>contact</h1>
  }
]);

function App() {

  /* We shouldn't really have to change this */
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
