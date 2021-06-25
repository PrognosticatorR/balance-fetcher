import { providers, utils } from "ethers";
import configs from "./config.js";
import { logger } from "./logger.js";
import { UpdateAddresses } from "./updateAddresses.js";

class Check {
    addresses = new UpdateAddresses();
    jsonProvider = new providers.JsonRpcProvider(configs.RPC_URI, configs.CHAIN_ID);

    _fetchBalance = async function (address) {
        const balance = await this.jsonProvider.getBalance(address);
        return utils.formatEther(balance);
    };

    _checkThreshold = async function (address) {
        let currentBalance = await this._fetchBalance(address);
        if (currentBalance < 0.5) {
            logger.info("balance is less then 0.5.", { address });
        }
    };

    fetchBalances = async function () {
        const addresses = await this.addresses.getAddresses();
        await addresses.forEach((address) => {
            this._checkThreshold(address);
        });
    };
}

export { Check };
