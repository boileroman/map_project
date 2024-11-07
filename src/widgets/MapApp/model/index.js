import { StoreService } from "#shared/lib/services/StoreService";

export class MapApp {
  constructor(storageName) {
    this.store = new StoreService(storageName);
    this.store.updateStore("addMarker", { id: 1, value: "test" });
    this.store.updateStore("addMarkers", [
      { id: 1, value: "test" },
      { id: 2, value: "test123" },
    ]);
    this.store.updateStore("addMarkers", [
      { id: 1, value: "test" },
      { id: 3, value: "test1234" },
    ]);
    this.store.updateStore("removeMarkers", [1, 2]);
  }

  subscribeForStoreService() {
    this.markerSubscription = this.StoreService.subscribeToMarkers(() => {});
    this.filterSubscribtion = this.StoreService.subscribeToFilters(() => {});
  }

  unsubscribeFromStore() {}
}
