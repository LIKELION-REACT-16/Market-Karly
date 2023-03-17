import { useState, useEffect } from 'react';
import Count from './Count';
import CountButton from './CountButton';
import classes from '@/components/Counter/Counter.module.scss';
import { ReactComponent as PlusBlack } from '@/assets/img-plus-black.svg';
import { ReactComponent as MinusBlack } from '@/assets/img-minus-black.svg';
import { ReactComponent as MinusGray } from '@/assets/img-minus-gray.svg';

/**
 *
 * @param {*} setParentState 부모 컴포넌트의 state를 set, update하는 함수를 argument로 요구합니다. 카운트가 증가하고 감소함에 따라 자동으로 부모 컴포넌트의 state도 update해줍니다.
 */
export default function Counter({ setParentState = null }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (setParentState !== null) setParentState(count);
  }, [count]);

  const minusCount = () => {
    if (count === 0) {
      return;
    }
    setCount(count - 1);
  };

  const plusCount = () => {
    setCount(count + 1);
  };

  return (
    <span className={classes.counter}>
      <CountButton
        onClick={minusCount}
        aria-label={count === 0 ? '비활성화 된 마이너스 버튼' : '마이너스 버튼'}
        disabled={count === 0 ? true : false}
      >
        {count === 0 ? (
          <MinusGray aria-hidden="true" />
        ) : (
          <MinusBlack aria-hidden="true" />
        )}
      </CountButton>
      <Count>{count}</Count>
      <CountButton onClick={plusCount} aria-label="플러스 버튼">
        <PlusBlack aria-hidden="true" />
      </CountButton>
    </span>
  );
}
