
    
export default function Iconwrapper(props){
    const {sectionTitle, imageSrc, imageAlt, text, variant, customClass} = props;
 
return(
<div className={`${variant}-wrapper ${customClass || ""}`}>

  {variant === "middle" ? (
    <>
      <img src={imageSrc} alt={imageAlt} className={`${variant}-icon`} />

      <div className={`${variant}-content`}>
        <h1 className={`${variant}-title`}>{sectionTitle}</h1>
        <p className={`${variant}-text`}>{text}</p>
      </div>
    </>
  ) : (
    <>
      <div className={`${variant}-wrapperImage_title`}>
        <img src={imageSrc} alt={imageAlt} className={`${variant}-icon`} />
        <h1 className={`${variant}-title`}>{sectionTitle}</h1>
      </div>

      <div className={`${variant}-paragraph`}>
        <p className={`${variant}-text`}>{text}</p>
      </div>
    </>
  )}

</div>


);


           
}