import "./styles.js";
import { ApiClient } from "../shared/lib/services/ApiClient.js";
import { ChoiceSelectModel } from "../shared/ui/Select/model/index.js";
import { MapApp } from "../widgets/MapApp/model/index.js";
import { DeleteMarkModel } from "#features/Marks/DeleteMark/model/index.js";
import { UpdateMarkModel } from "#features/Marks/UpdateMark/model/index.js";
import { API_URL } from "#shared/config/constants";

import "choices.js/public/assets/styles/choices.css";
//import { ModalManager } from "#shared/lib/plugins/modalManager.js";
import { StoreService } from "#shared/lib/services/StoreService.js";

async function initMSW() {
  if (process.env.NODE_ENV === "development") {
    const { getMocks } = await import("#shared/api/browser");
    await getMocks();
    console.debug("msw ready");
  } else {
    return Promise.resolve();
  }
}

function domReady() {
  return new Promise((res) => {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", res);
    } else {
      res();
    }
  });
}

Promise.all([initMSW(), domReady()]).then(() => {
  window.App = {};
  new ChoiceSelectModel();
  window.App.ChoiceSelectModel = ChoiceSelectModel;
  window.App.StoreServiceForMap = new StoreService("mapAppStore");
  new MapApp(window.App.StoreServiceForMap, new ApiClient(API_URL));
  new DeleteMarkModel(window.App.StoreServiceForMap);
  new UpdateMarkModel(window.App.StoreServiceForMap);
});
