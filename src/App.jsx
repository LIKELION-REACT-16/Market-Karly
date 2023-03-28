import { lazy, Suspense } from 'react';
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import './App.css';

const Layout = lazy(() => import('./components/Layout/Layout'));
const Home = lazy(() => import('./pages/Home'));
const Login = lazy(() => import('./pages/Login'));
const ProductList = lazy(() => import('./pages/ProductList'));
const ProductDetail = lazy(() => import('./pages/ProductDetail'));
const Cart = lazy(() => import('./pages/Cart'));
const Register = lazy(() => import('./pages/Register'));

let router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'Login', element: <Login /> },
      { path: 'Cart', element: <Cart /> },
      { path: 'Register', element: <Register /> },
      { path: 'List', element: <ProductList /> },
      {
        path: 'product/:id',
        element: <ProductDetail />,
      },
    ],
  },
]);

router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<Layout />}
      errorElement={<div role="alert">라우팅 오류 발생</div>}
    >
      <Route index element={<Home />} />
      <Route path="Login" element={<Login />} />
      <Route path="Cart" element={<Cart />} />
      <Route path="Register" element={<Register />} />
      <Route path="List" element={<ProductList />} />
      <Route path="product/:id" element={<ProductDetail />} />
    </Route>
  )
);

function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <Suspense fallback={<div>로딩 중...</div>}>
          <RouterProvider router={router} />
        </Suspense>
      </RecoilRoot>
    </div>
  );
}

export default App;
