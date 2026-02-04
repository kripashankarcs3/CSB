const rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Enter something: ", (answer) => {
    console.log("You entered:", answer);
    rl.close();
});
