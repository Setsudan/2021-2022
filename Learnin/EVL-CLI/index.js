#!/usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
import gradient from "gradient-string";
import figlet from "figlet";
import { createSpinner } from "nanospinner";
import { execSync } from "child_process";
let projectName;

const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));
async function welcome() {
  const msg = "EVL CLI";
  figlet(msg, (err, data) => {
    console.log(gradient.pastel.multiline(data));
  });
  await sleep();
  console.log(`
  ${chalk.gray(`visit https://docs-ethlny.vercel.app for more info`)} \n
  Welp since you've summoned me let's get to work
  `);
}

async function askProjectName() {
  const answers = await inquirer.prompt({
    name: "project_name",
    type: "input",
    message: "What's your project name ?",
    default() {
      return "my-app";
    },
  });
  projectName = answers.project_name;
}
async function handleAnswer(arg) {
  const spinner = createSpinner(
    "Alright wait a sec you beauty (it is normal if the spinner stops for few seconds)"
  ).start();
  await sleep();
  switch (arg) {
    case "React App":
      execSync(`npx create-react-app ${projectName}`);
      spinner.success();
      console.log(`Now run\n${chalk.greenBright(
        "code . \n cd"
      )} ${projectName} \n${chalk.greenBright("npm run start")};
      `);
      break;
    case "Next App":
      execSync(`npx create-next-app@latest ${projectName}`);
      spinner.success();
      console.log(`Now run\n${chalk.greenBright(
        "code . \n cd"
      )} ${projectName} \n${chalk.greenBright("npm run dev")};
      `);
      break;
    case "Strapi App":
      execSync(`npx create-strapi-app@latest ${projectName}`);
      console.log(`Now run\n${chalk.greenBright(
        "code . \n cd"
      )} ${projectName} \n${chalk.greenBright("npm run start")};
          `);
      spinner.success();
      break;
    default:
      spinner.error({ text: "☠️.... Uuuh something went wrong on my end☠️" });
      break;
  }
}
async function projectType() {
  const answers = await inquirer.prompt({
    name: "project type",
    type: "list",
    message: `OOOOh and ${chalk.italic(`${projectName}`)} will be ?`,
    choices: ["React App", "Next App", "Strapi App"],
  });
  return handleAnswer(answers["project type"]);
}

await welcome();

await askProjectName();

await projectType();

// Vue app [deprecated]
//case "Vue App":
//  execSync("npm install -g @vue/cli");
//  execSync("npm update -g @vue/cli");
//  execSync(`vue create ${projectName}`);
//  spinner.success();
//  console.log(`Now run\n${chalk.greenBright(
//    "cd"
//  )} ${projectName} \n${chalk.greenBright("vue ui")};
//  `);
//  break;
