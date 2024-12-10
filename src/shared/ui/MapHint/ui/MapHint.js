/**
 * Компонент карты
 * @return {string}
 */
export const MapHint = ({
  label = "",
  extraClasses = [],
  extraAttrs = [],
  extraInputAttrs = [],
} = {}) => {
  return `<div class="mapHint">
    <h3 class="mapHint-text">Адрес можно выбрать на карте</h3>
    <p class="mapHint-text">Перетаскивайте метку или кликайте по карте<p>
  </div>`;
};
