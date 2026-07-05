import fs from "fs";

const SERVERURL = "https://server-for-test-week-13.onrender.com/api/race";

export async function downloadingInformation() {
  try {
    const respons = await fetch(SERVERURL);
    if (!respons.ok) {
      throw new Error(`contcion to the server filad!!: ${respons.status} `);
    }

    const dataJson = await respons.json();
    return dataJson;
  } catch {
    console.error("contcion faild");
  }
}

export async function writeToJsonFile(allData) {
    const data = JSON.stringify(allData)
  await fs.writeFile("allData.json", data, "utf-8", (err) => {
    if (err) {
      throw new Error("filad to write to file!! " + `${err}`);
    }
  });
}


