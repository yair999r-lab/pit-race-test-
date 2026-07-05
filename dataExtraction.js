import fs from "fs/promises";
import { json } from "stream/consumers";

export async function readFromJson() {
  try {
    const data = await fs.readFile("./allData.json", "utf-8");
    return json(data);
  } catch {
    throw new Error("filad to read file!");
  }
}

const data = await readFromJson();

export const race = data.raceName;
export const currentLap = data.currentLap;
export const totalLaps = data.totalLaps;

export const allCars = data["cars"];

export function waitingCars() {
  const withCars = [];
  for (const car of allCars) {
    if (car["status"] === "waiting") {
      withCars.push(car);
        console.log(`Car: ${car.carNumber} | Driver: ${car.driverName}`);
      
    }
  }
  if (withCars.length === 0) {
    console.log("no cars waiting");
  }
  return withCars;
}

export function doneCars(){
    const doneCar = []
    for(const car of allCars){
        if(car['status'] === "done"){
            doneCar.push(car)
             console.log(`Car: ${car.carNumber} | Driver: ${car.driverName}`)
        }
    }if(doneCar.length === 0){
        console.log("no cars dont yet");
        
    }return 
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
