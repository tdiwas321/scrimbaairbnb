import groupimg from "../images/group.png";

export default function Hero() {
  return (
    <section className="home">
      <img src={groupimg} alt="groupimg" className="groupImg" />
      <div className="homeText">
        <h1>Online Experiences</h1>
        <p>
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </div>
    </section>
  );
}
