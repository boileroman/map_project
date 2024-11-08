import { API_ENDPOINTS } from "#shared/config/constants";
import { YandexMap } from "#shared/ui/Map/model";

export class MapApp {
  constructor(storeService, apiClient) {
    this.apiClient = apiClient;
    this.storeService = storeService;
    this.storeService.updateStore("addMarkers", [
      { id: 1, value: "test" },
      { id: 2, value: "test123" },
    ]);

    this.yandexMap = new YandexMap({
      containerSelector: "#map1",
      apiUrl: "https://api-maps.yandex.ru/2.1/?apikey",
      apiKey: "b4a559eb-311c-4123-8025-480ecdc62549",
      lang: "ru_RU",
      center: [55.751574, 37.573856],
      zoom: 10,
    });

    this.yandexMap
      .initMap()
      .then((res) => {
        console.debug("Карта инциализирована", res, this.yandexMap.instance);
        this.yandexMap.addMark();
      })
      .catch((e) => console.error(e));

    this.yandexMap.addMark();

    this.subscribeForStoreService();
    this.fetchMarkers();
  }

  async fetchMarkers() {
    try {
      const data = await this.apiClient.get(API_ENDPOINTS.marks.list);
      console.debug(data.data.marks);
      if (data && data.data.marks) {
        this.storeService.updateStore("addMarkers", data.data.marks);
        console.debug("Markers added to store:", data.data.marks);
      } else {
        console.warn("No marks found in response");
      }
    } catch (error) {
      console.error("Ошибка при получении маркеров:", error);
    }
  }

  handleMarkersChanged() {
    console.debug("markers changed", this.storeService.getMarkers());
  }

  handleFiltersChanged() {
    console.debug("markers changed", this.storeService.getFilters());
  }

  subscribeForStoreService() {
    this.markerSubscription = this.storeService.subscribeToMarkers(() => {
      this.handleMarkersChanged();
    });
    this.filterSubscription = this.storeService.subscribeToFilters(() => {
      this.handleFiltersChanged();
    });
  }

  unsubscribeFromStoreService() {
    this.markerSubscription?.();
    this.subscribeOnStoreChange?.();
  }
}
