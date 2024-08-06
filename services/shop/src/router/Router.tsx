import { createBrowserRouter } from 'react-router-dom';
import { Suspense } from "react";
import { App } from '@/components/App';
import { LazyShop } from "@/pages/Shop/Shop.lazy";
import { LazySecond } from "@/pages/Second/Second.lazy";

const routes = [
  {
    path: "/shop",
    element: <App />,
    children: [
      {
        path: '/shop/main',
        element: <Suspense fallback={'Loading...'}><LazyShop /></Suspense>
      },
      {
        path: '/shop/second',
        element: <Suspense fallback={'Loading...'}><LazySecond /></Suspense>
      }
    ]
  },
]

export const router = createBrowserRouter(routes);

export default routes;