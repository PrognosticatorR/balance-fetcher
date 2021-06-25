import fs from "fs";
import { logger } from "./logger.js";

class UpdateAddresses {
    getAddresses = async function () {
        const buff = fs.readFileSync("./data.txt");
        const data = buff.toString();
        return data.trim().split(" ");
    };

    setAddresses = async function (str) {
        fs.writeFile("./data.txt", `${str} `, { flag: "a+" }, (err) => {
            if (err) throw err;
            logger.info(`Address ${str} was appended to file!`);
        });
    };

    removeAddress = async function (str) {
        const currentData = this.getAddresses();
        let newData = currentData.filter((address) => address !== str);
        fs.writeFile("./data.txt", newData.toString(), (err) => {
            if (err) throw err;
            logger.info(`Address ${str} was removed from the file!`);
        });
    };
}

export { UpdateAddresses };
