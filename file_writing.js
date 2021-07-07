const sysInfo = require('./sys_info');
const fs = require('fs');

let content = "****** Following is the system specifications *****\n\n";
content += sysInfo.platform() + "\n" + sysInfo.cpuInfo() + "\n" + sysInfo.memoryInfo() + "\n" + sysInfo.diskInfo() + "\n";

function writeContent() {
    fs.writeFile('./system_specifications.txt', content, err => {
        if (err) {
            console.error(err)
            return;
        }
    });
}

module.exports.writeContent = writeContent;