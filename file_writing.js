const sysInfo = require('./sys_info');
const fs = require('fs');

let content = "****** Following is the system specifications *****\n\n";
content += sysInfo.platform() + "\n" + sysInfo.cpuInfo() + "\n" + sysInfo.memoryInfo() + "\n" + sysInfo.diskInfo() + "\n";

const checkExistenceOfFile = (path) => {
    if (fs.existsSync(path)) {
        return Promise.resolve(true).then(res => console.log(res))
            .catch(err => console.log(err));;
    }
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