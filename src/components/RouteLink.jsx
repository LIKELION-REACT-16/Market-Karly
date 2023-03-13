import { Link } from 'react-router-dom';

const RouteLink = () => {
  return (
    <>
      <Link to={'/'}>Home</Link>
      <br />
      <Link to={'/login'}>Login</Link>
      <br />
      <Link to={'/register'}>Register</Link>
      <br />
      <Link to={'/products'}>Product List</Link>
      <br />
      <Link to={'/cart'}>Cart</Link>
      <br />
    </>
  );
};

export default RouteLink;
