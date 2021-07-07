const os = require('os');
const disk = require('diskusage');

/**
 * 
 * @returns string 
 */
function memoryInfo() {
    let mem = Math.round(os.totalmem() / 1024 / 1024 / 1024) + ' GB';
    return 'Memory ' + mem;
}

/**
 * 
 * @returns string
 */
function cpuInfo() {
    let cores = os.cpus('model').length;
    let cpu_details = os.cpus()[0].model;
    let capacity = cpu_details.split('@')[1];
    let company_name = cpu_details.split('@')[0].split(' CPU');
    let core_string = '';
    if (cores == 8) {
        core_string = 'Quad-Core'
    } else if (cores == 4) {
        core_string = 'Dual-Core'
    }
    return 'Processor ' + capacity + ' ' + core_string + ' ' + company_name
}

/**
 * 
 * @returns string
 */
function platform() {
    return 'Hostname ' + os.hostname() + "\nPlatform " + os.platform();
}

/**
 * 
 * @returns string
 */
function diskInfo() {
    let path = os.platform() === 'win32' ? 'c:' : '/';
    let diskDetail = '';
    disk.check(path, function(err, info) {
        if (err) {
            diskDetail = err;
        } else {
            diskDetail = 'Memory Disk ' + Math.round(info.total / 1024 / 1024 / 1024) + ' GB';
        }
    });
    return diskDetail;
}

module.exports.cpuInfo = cpuInfo;
module.exports.memoryInfo = memoryInfo;
module.exports.diskInfo = diskInfo;
module.exports.platform = platform;