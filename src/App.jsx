import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Home Page</div>,
    errorElement: <h1 className="text-4xl font-bold text-red-500">404 Error</h1>
  },
  {
    path: "/contact",
    element: <h1>contact</h1>
  }
]);

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
