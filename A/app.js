const dgram = require('dgram');

const PORT_A = 8000;
const HOST_A = 'a';

const PORT_B = 8001;
const HOST_B = 'b';

const socket = dgram.createSocket('udp4');

var count = 0;

setInterval(() => {
    count++;
    let data = {'c': count ,'i':[{'id':'string'}],'o':[],'t':Date.now()};
    let json_str = JSON.stringify(data);
    let message = new Buffer.from(json_str);
    socket.send(message, 0, message.length, PORT_B, HOST_B, (err, bytes) => {
        if (err) throw err;
    });
}, 1000);


socket.bind(PORT_A, HOST_A);
