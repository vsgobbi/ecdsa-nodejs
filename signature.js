var crypto = require("crypto");
var fs = require("fs");

//First generate pair of keys using openssl:
//openssl ecparam -name secp256k1 -genkey -out privateKey.pem
//openssl ec -in privateKey.pem -pubout -out publicKey.pem

var keys = {
  priv: "-----BEGIN EC PRIVATE KEY-----\n" +
        "MHQCAQEEIGrnWEhlyNWxkGo7I8OvBrctEy6Fl+0T7nfMLdNbg8ggoAcGBSuBBAAK\n" +
        "oUQDQgAEIrlQZcJ4EQtUcMDUYEJlMqiZGWPBr30ARnWibTYRGHHjRNFkEl2AtTvY\n" +
        "EEduQkd3jjKurqpLkakEjrIVFh70GQ==\n" +
        "-----END EC PRIVATE KEY-----\n",
  pub: "-----BEGIN PUBLIC KEY-----\n" +
       "MFYwEAYHKoZIzj0CAQYFK4EEAAoDQgAEIrlQZcJ4EQtUcMDUYEJlMqiZGWPBr30A\n" +
       "RnWibTYRGHHjRNFkEl2AtTvYEEduQkd3jjKurqpLkakEjrIVFh70GQ==\n" +
       "-----END PUBLIC KEY-----\n"
};

var message = fs.readFileSync("message.txt", "utf8");

var sign = crypto.createSign("sha256");
sign.update(message);
var signature = sign.sign(keys.priv);
var verify = crypto.createVerify("sha256");
verify.update(message);
verified = verify.verify(keys.pub, signature)

console.log(signature.toString("base64"))
console.log(verified)
