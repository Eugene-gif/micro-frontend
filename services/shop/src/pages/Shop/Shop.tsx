import { Link } from 'react-router-dom';
import { shopRoutes } from '@packages/shared/src/routes/shop';

const Shop = () => {
  return (
    <div>
      <h1>Shop</h1>
      <div>123</div>
      <Link to={shopRoutes.second}>shop second</Link>
    </div>
  )
}

export default Shop;