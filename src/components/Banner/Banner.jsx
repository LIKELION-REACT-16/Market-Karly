import classes from './Banner.module.scss';


export function Banner({children, imgSrc}){
  
  return(
    <figure className={classes.Banner}>
      <img className={classes.BannerImage} src={imgSrc} alt="배너이미지" />
      <figcaption className={classes.BannerCaption}>
        {children}
      </figcaption>
    </figure>
  )
}


