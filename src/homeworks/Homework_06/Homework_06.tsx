import "./styles.css";
import {v4} from "uuid";

function Homework_06() {
  interface Car {
    brand: string;
    price: number;
    isDiesel: boolean;
  }

  const cars: Car[] = [
    { brand: "BMW", price: 20000, isDiesel: true },
    { brand: "Mercedes", price: 22000, isDiesel: false },
    { brand: "Porshe", price: 50000, isDiesel: true },
    { brand: "Nissan", price: 25000, isDiesel: false },
    { brand: "Audi", price: 50000, isDiesel: true },
  ];

  const carCards = cars.map((car: Car) => {
    return (
      <div key={v4()} className="car_card">
        <h3>{car.brand}</h3>
        <p>Price: {car.price} EUR</p>
        <p>Fuel: {car.isDiesel ? "Diesel" : "Petrol"}</p>
      </div>
    );
  });

  return (
    <div className="homework06_wrapper">
      <h1 className="title">Cars Cards</h1>
      <div className="car_container">{carCards}</div>
    </div>
  );
}

export default Homework_06;
