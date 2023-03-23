import classNames from 'classnames';
import { srOnly } from '@/styles/components/A11yHidden.module.scss';
import nutritionFacts from '@/assets/img-zzol-nutrition-facts.png';
import { ReactComponent as Check } from '@/assets/img-icon-check.svg';
import { ReactComponent as Only } from '@/assets/img-icon-only.svg';
import { ReactComponent as ColdChain } from '@/assets/img-icon-cold.svg';
import { ReactComponent as Price } from '@/assets/img-icon-price.svg';
import { ReactComponent as Eco } from '@/assets/img-icon-eco.svg';

import classes from '@/components/ProductDetailDescription/productDetailDescription.module.scss';
import { forwardRef } from 'react';

export const ProductDetailDescription = forwardRef(
  ({ className, id, ...rest }, ref) => {
    const cardsList = [
      {
        icon: <Check />,
        title: '깐깐한 상품위원회',
        content:
          '나와 내 가족이 먹고 쓸 상품을 고르는 마음으로 매주 상품을 직접 먹어보고, 경험해보고 성분, 맛 안정성 등 다각도의 기준을 통과한 상품만을 판매합니다.',
      },
      {
        icon: <Only />,
        title: '차별화된 Karly Only 상품',
        content:
          '전국 각지와 해외의 훌륭한 생산자가 믿고 선택하는 파트너, 마켓칼리. 3천여 개가 넘는 칼리 단독 브랜드, 스펙의 Karly Only 상품을 믿고 만나보세요.',
      },
      ,
      {
        icon: <ColdChain />,
        title: '신선한 풀콜드체인 배송',
        content:
          '온라인 업계 최초로 산지에서 문 앞까지 상온, 냉장, 냉동 상품을 분리 포장 후 최적의 온도를 유지하는 냉장 배송 시스템, 풀콜드체인으로 상품을 신선하게 전해드립니다.',
      },
      ,
      {
        icon: <Price />,
        title: '고객, 생산자를 위한 최선의 가격',
        content:
          '매주 대형 마트와 주요 온라인 마트의 가격 변동 상황을 확인해 신선식품은 품질을 타협하지 않는 선에서 최선의 가격으로, 가공식품은 언제나 합리적인 가격으로 정기 조정합니다.',
      },
      ,
      {
        icon: <Eco />,
        title: '환경을 생각하는 지속 가능한 유통',
        content:
          '친환경 포장재부터 생산자가 상품에만 집중할 수 있는 직매입 유통구조까지, 지속 가능한 유통을 고민하며 컬리를 있게 하는 모든 환경(생산자,커뮤니티,직원)이 더 나아질 수 있도록 노력합니다.',
      },
    ];

    return (
      <section
        className={classNames(className, classes.detailDescriptionSection)}
        ref={ref}
        id={id}
      >
        <h3 className={srOnly}>상세 정보</h3>
        <figure>
          <figcaption>
            <h4 className={srOnly}>상품 외관 정보, 영양정보</h4>
          </figcaption>
          <img
            src={nutritionFacts}
            alt="탱탱 쫄면 크기 500미리 맥주캔보다 큽니다. 영양 정보 1봉 당 435키로칼로리 알레르기 유발 재료 대두, 밀, 쇠고기 함유"
          />
        </figure>

        <section className={classes.whyCarly}>
          <h4>WHY KARLY</h4>
          <div className={classes.cardsSection1}>
            {cardsList.map((item, idx) => {
              return idx <= 3 ? (
                <Card
                  key={'card-' + idx}
                  icon={item.icon}
                  title={item.title}
                  content={item.content}
                />
              ) : null;
            })}
          </div>
          <div className={classes.cardsSection2}>
            {cardsList.map((item, idx) => {
              return idx > 3 ? (
                <Card
                  key={'card-' + idx}
                  icon={item.icon}
                  title={item.title}
                  content={item.content}
                />
              ) : null;
            })}
          </div>
        </section>
      </section>
    );
  }
);

function Card({ icon, title, content, className = null, ...rest }) {
  return (
    <div aria-label="칼리를 사용해야 하는 이유" className={classes.cardWrapper}>
      {icon}
      <p className={classes.title}>{title}</p>
      <p className={classes.content}>{content}</p>
    </div>
  );
}

export default ProductDetailDescription;
