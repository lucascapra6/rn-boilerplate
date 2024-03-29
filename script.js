#!/usr/bin/env node
const { execSync } = require("child_process");

const installDependencies = () => {
  const dependencies = [
    "@hookform/resolvers",
    "@react-navigation/native",
    "@react-navigation/native-stack",
    "@shopify/restyle",
    "@reduxjs/toolkit",
    "react-redux",
    "redux",
    "react-native-reanimated",
    "@tanstack/react-query",
    "axios",
    "date-fns",
    "react-hook-form",
    "react-native-mmkv",
    "react-native-safe-area-context",
    "react-native-screens",
    "react-native-svg",
    "zod",
    "zustand",
    "react-native-reanimated",
    "react-error-boundary"
  ];

  const devDependencies = [
    "@tanstack/eslint-plugin-query",
    "@testing-library/jest-native",
    "@testing-library/react-native",
    "@types/jest",
    "@types/react-redux",
    "@tsconfig/react-native",
    "babel-plugin-module-resolver",
    "cz-conventional-changelog",
    "eslint-plugin-import",
    "lint-staged",
    "msw",
    "ts-node",
    "react-native-dotenv",
    "husky",
  ];

  console.log("\n\n");

  console.log(
    "@lucascapra6/react-native-boilerplate initialized with success! 🚀\n"
  );

  console.log("Installing dependencies... 🛠️\n");
  execSync(`yarn add ${dependencies.join(" ")}`, { stdio: "inherit" });
  console.log("Dependencies installed successfully. 🚀\n");

  console.log("Installing dev dependencies... 🛠️\n");
  execSync(`yarn add ${devDependencies.join(" ")} -D`, { stdio: "inherit" });
  console.log("Dev dependencies installed successfully.🚀\n");
};

const renameNpmignoreToGitignore = () => {
  execSync("mv .npmignore .gitignore", { stdio: "inherit" });
};

const main = () => {
  execSync("git init", { stdio: "inherit" });
  installDependencies();
  renameNpmignoreToGitignore();
};

new Promise((resolve) => {
  main();
  resolve();
})
  .then(() => {
    console.log(
      "- 🎉  Congrats! Your project is ready with @lucascapra6/react-native-boilerplate! 🎉\n"
    );

    console.log(
      "- 📚 If you need to read more about this boilerplate : https://github.com/lucascapra6/rn-boilerplate/blob/master/README.md\n"
    );
    console.log(
      "- 🤕 If you have some troubles : https://github.com/lucascapra6/rn-boilerplate/issues\n"
    );
    console.log(
      "- ⭐ If you love this boilerplate, give us a star, you will be a ray of sunshine in our lives :) https://github.com/lucascapra6/rn-boilerplate\n"
    );
  })
  .catch((error) => {
    console.error(`🚨 An error occurred with post init script: ${error}`);
    throw new Error();
  });
