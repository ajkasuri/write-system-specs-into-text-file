const sysInfo = require('./sys_info');
const fs = require('fs');
const { exit } = require('process');

let content = "****** Following is the system specifications *****\n\n";
content += sysInfo.platform() + "\n" + sysInfo.cpuInfo() + "\n" + sysInfo.memoryInfo() + "\n" + sysInfo.diskInfo() + "\n";

function checkExistenceOfFile(path) {
    console.log(path);
    return fs.existsSync(path);
}

function writeContent(path) {
    fs.writeFile(path, content, err => {
        if (err) {
            console.error(err)
            return;
        }
    });
}

module.exports.writeContent = writeContent;
module.exports.checkExistenceOfFile = checkExistenceOfFile;