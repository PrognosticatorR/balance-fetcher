import cron from "node-cron";
import { logger } from "ethers";
import { Check } from "./check.js";

class Timer extends Check {
    constructor(time) {
        super();
        this.intervel = time;
    }
    async startTimer() {
        logger.info("starting the timer for " + this.intervel + " seconds.");
        cron.schedule(`*/${this.intervel} * * * * *`, () => {
            this.fetchBalances();
        });
    }
}

export { Timer };
