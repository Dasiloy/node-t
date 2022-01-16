const os = require("os");

const osList = {
    userInfo: os.userInfo(),
    upTime: os.uptime(),
    type: os.type(),
    release:os.release(),
    totalMem: os.totalmem(),
    freeMem:os.freemem(),
};

console.log(osList);
