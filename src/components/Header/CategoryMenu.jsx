import { Link } from 'react-router-dom';

export default function CategoryMenu({ ...rest }) {
  const categoryList = [
    { key: '1', title: '선물하기' },
    { key: '2', title: '채소' },
    { key: '3', title: '과일 · 견과 · 쌀' },
    { key: '4', title: '수산 · 해산 · 건어물' },
    { key: '5', title: '정육 · 계란' },
    { key: '6', title: '국 · 반찬 · 메인요리' },
    { key: '7', title: '샐러드 · 간편식' },
    { key: '8', title: '면 · 양념 · 오일' },
    { key: '9', title: '생수 · 음료 · 우유 · 커피' },
    { key: '10', title: '간식 · 과자 · 떡' },
    { key: '11', title: '베이커리 · 치즈 · 델리' },
    { key: '12', title: '건강식품' },
    { key: '13', title: '와인' },
    { key: '14', title: '전통주' },
    { key: '15', title: '생활용품 · 리빙 · 캠핑' },
    { key: '16', title: '스킨케어 · 메이크업' },
    { key: '17', title: '헤어 · 바디 · 구강' },
    { key: '18', title: '주방용품' },
    { key: '19', title: '가전제품' },
    { key: '20', title: '반려동물' },
    { key: '21', title: '베이비 · 키즈 · 완구' },
    { key: '22', title: '여행 · 티켓' },
  ];

  return <ul {...rest}>{categoryList.map((item) => menuItem(item))}</ul>;
}

function menuItem({ key, title }) {
  return (
    <li key={key}>
      <Link to={'/'}>
        <div style={{ backgroundPositionY: -(key - 1) * 24 }}></div>
        {title}
      </Link>
    </li>
  );
}
