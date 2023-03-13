import Test from '@/components/Test';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();
  console.log(id);

  return (
    <div>
      <h2>Product-Detail</h2>
      <Test />
    </div>
  );
};

export default ProductDetail;
