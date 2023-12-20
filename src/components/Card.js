
import star from "../images/star.png";

export default function Card(item) {
  const props = item.item;
  console.log(props);
  let badgeText;
  if(props.openSpots===0){
    badgeText = "SOLD OUT"
  }else if(props.location==="Online"){
    badgeText = "ONLINE"
  }


  return (
    <div className="cardContainer">
      <div className="picContainer">
        {badgeText && <button className="cardTag">{badgeText}</button>}
        <img src={`../images/${props.coverImg}`} alt="profile" className="profilePic" />
      </div>
      <div>
        <div className="cardStars">
            <img src={star} alt="star" className="star"/>
            <span>{props.stats.rating} ({props.stats.reviewCount}) . </span>
            <span>{props.location}</span>
        </div>
        <span className="cardTitle">{props.title}</span>
        <div><span className="cardBold">From ${props.price}</span> / person</div>
      </div>
    </div>
  );
}
