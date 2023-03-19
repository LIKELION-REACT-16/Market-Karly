import { ModalForm } from '@/components/ModalForm/ModalForm';
import Test from '@/components/Test';
import { useRef } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();
  console.log(id);

  const modalRef = useRef();
  return (
    <div>
      <h2>Product-Detail</h2>
      <Test />
      <button
        onClick={() => {
          modalRef.current.showModal();
        }}
      ></button>
      <ModalForm ref={modalRef} title="상품 문의하기"></ModalForm>
    </div>
  );
};

export default ProductDetail;
