

function OurCoffeeCard({imageUrl, descr, price, country}) {
   return(
      <div className="ourcoffee__item">
                <img className="ourcoffee__item-card-image" src={imageUrl} alt={descr}/>
                <div className="ourcoffee__item-card-description">{descr}</div>
                <div className="ourcoffee__item-card-country">{country}</div>
                <div className="ourcoffee__item-card-price">{price}</div>
            </div>
   )
}

export default OurCoffeeCard;