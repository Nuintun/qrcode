const { Encoder, QRKanji, QRByte } = require('../../es5');

const qrcode = new Encoder();

qrcode.write('你好世界\n');
qrcode.write(new QRByte('hello world\n'));
qrcode.write(new QRKanji('こんにちは世界'));
qrcode.make();

console.log(qrcode.toDataURL());
