import { createRoot } from "react-dom/client";
import { regex, lectioUser } from "../types/globals";
import React from "react";

import dynamic from "next/dynamic";

chrome.tabs.onUpdated.addListener(async (tabId, changeInfo, tab) => {
    const [_, schoolID, site] = regex.URL_GROUPING.exec(tab.url!) || [null, null, null];

    if (changeInfo.status === "complete" && schoolID) {
        // switch(site) {
        // case "forside": {
        //     console.log("Brugeren er på forsiden af lectio!!!");
        //     break;
        // }
        // case "login": {
        //     console.log("Brugeren skal til at logge ind.");
        //     break;
        // }
        // }
        console.log(site);
        // import(`../pages/${site}.tsx`).then((instance) => {
        //     // const instance = new module();
        //     console.log(instance);
        // }).catch((error) => {
        //     console.error("Error importing module:", error);
        // });

        // The idea is to make it system-based routing.
        const instance = await import(`../pages/${site}.tsx`);
        console.log(new instance());
    }
});
  