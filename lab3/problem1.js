const dnsModule = require("dns");

const dnsResolver = dnsModule.resolve4;

dnsResolver("www.mum.edu", function (err, data) {
    console.log(data);
});