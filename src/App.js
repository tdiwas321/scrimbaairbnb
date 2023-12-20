import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data";
export default function App() {
  const cardpage = data.map((item) => {
    return (
      <Card
        key={item.id}
        item={item}
      />
    );
  });
  console.log(data);
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="cardSection">{cardpage}</div>
    </div>
  ); 
}
