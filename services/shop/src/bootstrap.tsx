import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from '@/router/Router';

const root = document.getElementById('root');

if(!root) {
  throw new Error('root not found!');
}

const container = createRoot(root);

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       {
//         path: '/shop',
//         element: <Suspense fallback={'Loading...'}><LazyShop /></Suspense>
//       }
//     ]
//   },
// ]);

container.render(
  <RouterProvider router={router} />
);