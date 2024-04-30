import { Navigate, useRoutes, Routes, RouterProvider, createHashRouter, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import './App.css';

function App() {
  const router = createHashRouter([
    { path: "", element: <Link to="/inner">Inner Page</Link> },
    { path: "/inner", element: <Link to="/">Main Page</Link> },
    { path: "*", element: <Navigate to="/" /> },
  ])

  return (
    // useRoutes([
    //   { path: "", element: <Link to="/inner">Inner Page</Link> },
    //   { path: "/inner", element: <Link to="/">Main Page</Link> },
    //   { path: "*", element: <Navigate to="/" /> },
    // ])
    // <RouterProvider basename={'process.env.PUBLIC_URL'} router={router} />
    <Routes>
      {/* <Route path={process.env.PUBLIC_URL} element={<h1>test</h1>} /> */}
      <Route path="/" element={<Link to="/inner">Inner Page</Link>} />
      <Route path="inner" element={<Link to="/">Main Page</Link>} />
    </Routes>
  );
}

export default App;
