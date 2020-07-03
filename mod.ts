import * as log from "https://deno.land/std/log/mod.ts";

await log.setup({
    handlers: {
        console: new log.handlers.ConsoleHandler("DEBUG"),
    },
    loggers: {
        default: {
            level: "DEBUG",
            handlers: ["console"],
        }
    }
});

async function downloadLaunchData() {
    log.info("Downloading launch data...");
    const response = await fetch("https://api.spacexdata.com/v4/launches", { method: "GET" });

    if(!response.ok) {
        log.warning("Problem downloading launch data");
        throw new Error("Launch data download failed.");
    }

    const launchData = await response.json()
    //console.log(launchData);
}

await downloadLaunchData();