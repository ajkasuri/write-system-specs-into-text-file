const { checkExistenceOfFile, writeContent } = require('./file_writing');
const sysInfo = require('./sys_info');

path = sysInfo.user() + '/Desktop/system_information.json';

async function main() {
    await checkExistenceOfFile(this.path);
    if (checkExistenceOfFile(this.path)) {
        await writeContent(this.path);
    } else {
        await writeContent(this.path);
    }
};
main();