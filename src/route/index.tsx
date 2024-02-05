import About from 'page/About';
import Home from 'page/Home';
import Project from 'page/Project';

const router = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/project",
    element: <Project />,
  },
];

export default router