#!/usr/bin/env node

import { execSync } from 'child_process';

const runCommand = command => {
  try {
    execSync(command, { stdio: 'inherit' });
    return true;
  } catch (e) {
    console.error(`Failed to execute ${command}`, e);
    return false;
  }
};

const repoName = process.argv[2];
const gitCheckoutCommand = `git clone --depth 1 https://github.com/ryan-ahn/npm-express-starter ${repoName}`;
const installDepsCommand = `cd ${repoName} && npm install`;
const checkedOut = runCommand(gitCheckoutCommand);

if (!checkedOut) {
  process.exit(-1);
}

const installedDeps = runCommand(installDepsCommand);

if (!installedDeps) {
  process.exit(-1);
}

console.log('======= Success =======');
