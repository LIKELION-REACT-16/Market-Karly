import classes from '@/styles/components/Footer/CallNumber.module.scss';

export default function CallNumber(props) {
  const { tel, openDay } = props;

  return (
    <div className={classes.callNumber}>
      <span>{tel}</span>
      <span>{openDay}</span>
    </div>
  );
}
