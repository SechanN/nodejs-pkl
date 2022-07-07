import dns from 'dns';

function callback(error, ip) {
    console.info(ip)
}

dns.lookup("www.rayhanrizkiputra.xyz", callback)
// 18.139.201.98