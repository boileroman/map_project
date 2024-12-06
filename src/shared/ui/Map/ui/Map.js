/**
 * Компонент карты
 * @return {string}
 */
export const Map = ({
  label = "",
  extraClasses = ["mt24"],
  extraAttrs = [],
  extraInputAttrs = [],
} = {}) => {
  return `<div id="map1" class="yandexMap ${extraClasses}"></div>`;
};
