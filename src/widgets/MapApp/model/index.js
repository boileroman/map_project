import { StoreService } from "#shared/lib/services/StoreService";

export class MapApp {
  constructor(storageName) {
    this.store = new StoreService(storageName);
    this.store.updateStore("addMarkers", { id: 1, value: "test" });
  }

  subscribeForStoreService() {
    this.markerSubscription = this.StoreService.subscribeToMarkers(() => {});
    this.filterSubscribtion = this.StoreService.subscribeToFilters(() => {});
  }

  unsubscribeFromStore() {}
}
