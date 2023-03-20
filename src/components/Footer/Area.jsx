import classes from '@/styles/components/Footer/Area.module.scss';

import React from 'react';
import { Link } from 'react-router-dom';

import LinkMailto from './LinkMailto';

export default function Area() {
  const paragraphList = [
    {
      key: 1,
      first: '법인명 (상호) : 주식회사 컬리',
      second: '사업자등록번호 : 261-81-23567',
      link: `사업자정보 확인`,
    },
    {
      key: 2,
      first: '통신판매업 : 제 2018-서울강남-01646 호',
      second: '개인정보보호책임자 : 이원준',
    },
    {
      key: 3,
      first: '주소 : 서울특별시 강남구 테헤란로 133, 18층(역삼동)',
      second: '대표이사 : 김슬아',
    },
    {
      key: 4,
      first: '입점문의 : 입점문의하기',
      title: '제휴문의 :',
      link: `business@karlycorp.com`,
    },
    {
      key: 5,
      title: '채용문의 :',
      link: `recruit@karlycorp.com`,
    },
    {
      key: 6,
      first: '팩스 : 070 - 7500 - 6098',
    },
  ];

  return (
    <div className={classes.area}>
      {paragraphList.map((item) => (
        <p>
          {item.first ? <span className={classes.text}>{item.first}</span> : ''}
          {item.second ? <div className={classes.bar}></div> : ''}
          {item.second ? (
            <span className={classes.text}>{item.second}</span>
          ) : (
            ''
          )}
          {item.link && item.first ? <div className={classes.bar}></div> : ''}
          {item.title ? <span className={classes.text}>{item.title}</span> : ''}
          {item.link ? (
            <LinkMailto mailto={item.link}>{item.link}</LinkMailto>
          ) : (
            ''
          )}
        </p>
      ))}
    </div>
  );
}
