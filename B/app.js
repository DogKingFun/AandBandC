const dgram = require('dgram');

const PORT_B = 8001;
const HOST_B = 'b';

const PORT_C = 8002;
const HOST_C = 'c';

const socket = dgram.createSocket('udp4');

socket.on('message', (buf, rinfo) => {
    let str = buf.toString('ascii', 0, rinfo.size);
    let msg = JSON.parse(str);
    let json_str = JSON.stringify(msg);
    let message = new Buffer.from(json_str);
    socket.send(message,0,message.length, PORT_C,HOST_C,(err,bytes) => {
      if(err)throw err;
    });
});

socket.bind(PORT_B, HOST_B);