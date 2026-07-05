import { downloadingInformation, writeToJsonFile } from "./raceService.js"; 
import { readFromJson, race, currentLap, totalLaps, allCars, waitingCars, findCarBynum, doneCars } from "./dataExtraction.js";


console.log("Pit Stop Queue - Race Team Management System")
console.log("Race engineer: Let's check the current queue status on the pit wall.\n");

console.log("Loading queue data...\n");

const data = await downloadingInformation()
await writeToJsonFile(data)
const newData = await readFromJson()


console.log("========== PIT STOP QUEUE ==========");
console.log(`Race: ${race}`);
console.log(`Lep: ${currentLap}/${totalLaps}`);
console.log(`Total cars in race: ${allCars.length}\n`);

console.log("Cars waiting for pit stop: ")
const witingcar = waitingCars()

console.log("\nCars done: ");
doneCars()


if(witingcar.length > 0){
console.log("\nNext car to enter the pit: ");
console.log(`Car: ${witingcar[0].carNumber} | Driver: ${witingcar[0].driverName}`);
console.log("=================================\n");

console.log(`Radio message to car: ${witingcar[0].carNumber} "Box box box, ${witingcar[0].driverName} pit this lap!"\n`);}
else{
    console.log("no cars waiting to pit");
    
}
console.log("--- Search for a car by number ---");
findCarBynum(44)
findCarBynum(22)


console.log("\nProcess completed successfully. The pit wall is up to date.");











