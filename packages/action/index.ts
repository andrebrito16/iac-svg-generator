import * as fs from "fs";
import * as core from "@actions/core";
import * as path from 'path';

(async () => {
  try {

    const iacToken = process.env.IAC_TOKEN!;

    const { fetchUserGrades } = await import("./fetch_user_grades");

    const gradesRAWText = await fetchUserGrades({ token: iacToken });

    const { parseData } = await import("./parse_data");

    const grades = parseData(gradesRAWText);

    console.log(grades, "DATA")

    const { generateSVG } = await import("./generate_svg");

    const svg = generateSVG(grades);

    console.log(`💾 writing to iac_grades.svg`);
    fs.mkdirSync(path.dirname("iac_grades.svg"), { recursive: true });
    fs.writeFileSync("iac_grades.svg", svg);
    core.setOutput("svg_file", "iac_grades.svg");
  } catch (e: any) {
    core.setFailed(`Action failed with "${e.message}"`);
  }
})();
