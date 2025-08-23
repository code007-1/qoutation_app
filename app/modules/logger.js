/*import winston from "winston";

export const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    defaultMeta: { service: 'user-service' },
    transports: [
        //
        // - Write all logs with importance level of `error` or higher to `error.log`
        //   (i.e., error, fatal, but not other levels)
        //
        new winston.transports.File({ filename: 'error.log', level: 'error' }),
        //
        // - Write all logs with importance level of `info` or higher to `combined.log`
        //   (i.e., fatal, error, warn, and info, but not trace)
        //
        new winston.transports.File({ filename: 'combined.log' }),
    ],
});

//
// If we're not in production then log to the `console` with the format:
// `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
//
if (process.env.NODE_ENV !== 'production') {
    logger.add(new winston.transports.Console({
        format: winston.format.simple(),
    }));
}*/

// fingerprint.js
import si from 'systeminformation';
import pkg from 'node-machine-id';
const { machineIdSync } = pkg;
import crypto from 'crypto';

async function getFingerprint() {
    const cpu = await si.cpu();
    const motherboard = await si.baseboard();
    const id = machineIdSync();

    const raw = `${cpu.brand}-${motherboard.serial}-${id}`;
    console.log("Fingerprint raw data: ", id);
    return crypto.createHash('sha256').update(raw).digest('hex');
}

/*getFingerprint().then(fingerprint => {
    console.log("Machine Fingerprint: ", fingerprint);
}).catch(err => {
    console.error("Error generating fingerprint: ", err);
});*/

// generateLicense.js
import fs from 'fs';
//import crypto from 'crypto';

function generateLicense(fingerprint, expiryDays = 365) {
    const license = { deviceId: fingerprint, expiryDate: Date.now() + (expiryDays * 24 * 60 * 60 * 1000), issuedDate: Date.now() };

    const sign = crypto.createSign('RSA-SHA256');
    sign.update(JSON.stringify(license));
    const privateKey = fs.readFileSync('./app/modules/private.pem', 'utf8');
    license.signature = sign.sign(privateKey, 'base64');

    fs.writeFileSync('./license.json', JSON.stringify(license, null, 2));
    console.log('License generated!');
}

//generateLicense("83976faf3aafcc52c29c698627f03124474bd9f29a3f96fa8111ab1fe26268b2", 365);

// validateLicense.js
//const getFingerprint = require('./fingerprint');

async function validateLicense() {
    const license = JSON.parse(fs.readFileSync('./app/modules/license.json', 'utf8'));
    const publicKey = fs.readFileSync('./app/modules/public.pem', 'utf8');
    const fingerprint = await getFingerprint();

    if (license.deviceId !== fingerprint) {
        throw new Error('Device mismatch');
    }

    if (new Date(license.expiryDate) < Date.now()) {
        throw new Error('License expired');
    }

    const { signature, ...dataToVerify } = license;
    const verify = crypto.createVerify('RSA-SHA256');
    verify.update(JSON.stringify(dataToVerify));

    if (!verify.verify(publicKey, signature, 'base64')) {
        throw new Error('Invalid signature');
    }

    console.log('License is valid. Features:', license);
}

validateLicense().then(() => {
    console.log('License validation successful.');
}).catch(err => {
    console.error('License validation failed:', err.message);
});   