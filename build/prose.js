const glob = require('glob');
const process = require('process');
const exec = require('child_process').exec;

// lets assume everything is fine, and we should be able to exit normally
if(!process.exitCode) {
    process.exitCode = 0;
}

// find all the markdown files
let md_files = glob.sync('src/**/*.{md,MD}');

// run each one through proselint
md_files.forEach(f => {
    const prose = exec(`proselint ${f}`);
    // log the output data if any
    prose.stdout.on("data", d => {
        console.log(d);
    });

    // set the exit code so will report failure if proselint 
    // has raised errors on any of the files
    prose.on("close", code => {
        process.exitCode = Math.max(process.exitCode, code);
    })
})