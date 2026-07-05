import fs from "fs/promises";
import { json } from "stream/consumers";

export async function readFromJson() {
  try {
    const data = await fs.readFile("./allData.json", "utf-8");
    return json(data);
  } catch {}
}

const data = await readFromJson();

export const race = data.raceName;

export const allCars = data["cars"];
export const currentLap = data.currentLap;
export const totalLaps = data.totalLaps;
// console.log(totalLaps, currentLap);

// const cars = []
// for(const car of allCars){
//     cars.push(car)
// }
// console.log(cars);

export function waitingCars() {
    const withCars = []
  for (const car of allCars) {
    if (car["status"] === "waiting") {
        withCars.push(car)
      for (const car of withCars) {
        console.log(`Car: ${car.carNumber} | Driver: ${car.driverName}`);
      }
    }
  }if(withCars.length === 0){
    console.log("no cars waiting");
  }
  return withCars;
}

export function findCarBynum(num) {
  for (const car of allCars) {
    if (car.carNumber === num) {
      console.log(
        `Found car: ${car.carNumber} | Driver: ${car.driverName} | Status: ${car.status}`,
      );
      return;
    } else {
      console.log(
        `Error: No car found with number ${num} in the current race.`,
      );
      return;
    }
  }
}
