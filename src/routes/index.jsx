import { createBrowserRouter } from "react-router-dom";
import TodoPage from '../pages/TodoPage'
import HomePage from '../pages/HomePage'
import ZipcodePage from "../pages/ZipcodePage";

const routes = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/todo-list',
    element: <TodoPage />,
    children: [
      {
        path: 'json',
        element: <TodoPage />,
      }
    ]
  },
  {
    path: '/zipcode',
    element: <ZipcodePage />,
    children: [
      {
        path: ':cep',
        element: <ZipcodePage />,
      }
    ]
  }
])

export default routes