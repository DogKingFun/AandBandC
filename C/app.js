const dgram = require('dgram');

const PORT_C = 8002;
const HOST_C = 'c';

const socket = dgram.createSocket('udp4');

socket.on('message', (buf, rinfo) => {
    console.log(rinfo.address + ':' + rinfo.port +' - ' + buf);
    //let str = buf.toString('ascii', 0, rinfo.size);
    //console.log(str);
    let msg = JSON.parse(buf);
    console.log(msg);
    console.log(msg.i);
});

socket.bind(PORT_C, HOST_C);