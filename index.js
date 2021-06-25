import { logger } from "./src/logger.js";
import { UpdateAddresses } from "./src/updateAddresses.js";
import { Timer } from "./src/timer.js";
import config from "./src/config.js";

const addresses = new UpdateAddresses();

class Main {
    startTimer = async function () {
        logger.info(`setting up a ${config.TIME_INTERVEL} second timer...`);
        const timer = new Timer(config.TIME_INTERVEL);
        timer.startTimer();
        await addresses.getAddresses();
    };
}

//Methods
// addresses.removeAddress() //pass the addresss to remove
// addresses.setAddresses() //pass address in string string formate

const server = new Main();
server.startTimer();
