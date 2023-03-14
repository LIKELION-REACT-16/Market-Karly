import styles from '@/styles/badge.module.scss';

const Badge = ({ badgeName, nameColor }) => {
  console.log('🚀 ⁝ Badge ⁝ nameColor:', nameColor);
  return (
    <>
      <div style={{ color: { nameColor } }} className={styles.onlyBadge}>
        {badgeName}
      </div>
    </>
  );
};

export default Badge;
