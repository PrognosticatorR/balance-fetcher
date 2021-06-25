import pkg from "winston";
const {
    createLogger,
    format: { combine, colorize, timestamp, json, simple },
    transports,
    config,
} = pkg;

class Logger {
    init = function () {
        return createLogger({
            defaultMeta: { component: "balance-service" },
            format: combine(
                timestamp({
                    format: "YYYY-MM-DD HH:mm:ss",
                }),
                json(),
                colorize(),
                simple()
            ),
            levels: config.syslog.levels,
            transports: [new transports.Console()],
            exceptionHandlers: [new transports.Console(), new transports.File({ filename: "combined.log" })],
        });
    };
}

const logger = new Logger().init();

export { logger };
