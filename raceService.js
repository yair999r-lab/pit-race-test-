import fs from "fs";

const SERVERURL = "https://server-for-test-week-13.onrender.com/api/race";

async function downloadingInformation() {
  try {
    console.log("aaa")
    const respons = await fetch(SERVERURL);
    if (!respons.ok) {
      throw new Error(`contcion to the server filad!!: ${respons.status} `);
    }

    const dataJson = await respons.json()
    return dataJson

  } catch {
    console.error("contcion faild");
  }
}

// async function writeToJsonFile(allData) {
//   await fs.writeFile("allData.json", allData.json, "utf-8", (err) => {
//     if (err) {
//       throw new Error("filad to write to file!! " + `${err}`);
//     }
//   });
// }




const data = await downloadingInformation()
console.log(data);
export default data
// console.log(typeof(data));

// const write = await writeToJsonFile(data)
