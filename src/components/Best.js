import BestCard from './BestCard';

function Best({arr}) {
  return (
    <div className="best">
      <div className="best__inner">
        <h3 className="best__title">Our best</h3>
        <div className="best__cards">
          {arr.map((item, index) => ( item.best && <BestCard key={index} {...item}/>))}
        </div>
      </div>
    </div>
  )
}

export default Best;