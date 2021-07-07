const file_writing = require('./file_writing');
const sysInfo = require('./sys_info');

path = sysInfo.user() + '/Desktop/system_information.json';

async function main() {
    console.log(this.path);
    console.log(file_writing.checkExistenceOfFile(this.path));
    if (file_writing.checkExistenceOfFile(this.path)) {
        await file_writing.writeContent(this.path);
    } else {
        await file_writing.writeContent(this.path);
    }
};
main();