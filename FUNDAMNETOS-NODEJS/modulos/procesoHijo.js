const { exec } = require('child_process');


exec("ls", (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }
    console.log(`stdout: \n${stdout}`);
});


const myShellScript = exec('sh modulos/scriptBash.sh');
myShellScript.stdout.on('data', (data) => {
    console.log(data);
});


myShellScript.stderr.on('data', (data) => {
    console.error(data);
});
