#!/usr/bin/env node

// GIT Commit & Push using the argument as commit message.
const { execSync: exec } = require("child_process");
const commitMsg = process.argv[2];
console.log(commitMsg)
console.log(exec('git add .').toString());
console.log(exec(`git commit -m "${commitMsg}"`).toString());

try {
    exec(`git push`);
} catch (error) {
    console.log("Push failed.")
    console.log(`Trying with: "git push -u origin master" `)
    console.log(exec("git push -u origin master"))
}