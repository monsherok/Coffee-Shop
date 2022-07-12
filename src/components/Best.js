const Best = (props) => {
  const {imageUrl, descr, price} = props;
  const onClickCard = () => {
    alert(descr)
  }
   return (
    <div className="best__card" onClick={onClickCard}>
      <img className='best__card-image' src={imageUrl} alt={descr} />
      <div className="best__card-description">{descr}</div>
      <div className="best__card-price">{price}$</div>
  </div>
   )
}

export default Best;

