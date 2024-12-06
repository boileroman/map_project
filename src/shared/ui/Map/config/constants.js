import {
  BarIcon,
  GeoIcon,
  MovieIcon,
  MusicIcon,
  RestaurantIcon,
  TheaterIcon,
} from "#shared/ui/Icons/index.js";

export const classNames = {
  ballonContent: "yandexMap__ballonContent",
  ballonLayout: "yandexMap__ballonLayout",
  mark: "yandexMap__mark",
  centerMarker: "yandexMap__centerMarker",
};

export const iconShapeCfg = {
  type: "Circle",
  coordinates: [0, 0],
  radius: 50,
};

export const iconsPresets = {
  bars: BarIcon({ iconColor: "var(--colorRed)" }),
  cinema: MovieIcon({ iconColor: "var(--colorGreenLight)" }),
  theatre: TheaterIcon({ iconColor: "var(--colorPurple)" }),
  restaurant: RestaurantIcon({ iconColor: "var(--colorOrange)" }),
  trk: MusicIcon({ iconColor: "var(--colorBlue)" }),
  centerMarker: GeoIcon({ iconColor: "var(--colorGray)" }),
};

export const yandexMapConfig = {
  apiUrl: "https://api-maps.yandex.ru/2.1/?apikey",
  defaultCenter: [52.5, 57.9],
  defaultZoom: 10,
  lang: "ru_RU",
};

export const yandexMapCustomEventNames = {
  markClicked: "yandexMap::markClicked",
};
