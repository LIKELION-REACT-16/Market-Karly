import styles from '@/styles/components/List/badge.module.scss';

const Badge = ({ badgeName, nameColor }) => {
  return (
    <>
      {/* template literal : inline-style => string 처리  */}
      <div style={{ color: `${nameColor}` }} className={styles.onlyBadge}>
        {badgeName}
      </div>
    </>
  );
};

export default Badge;
