import { PlaceSwitchGroup } from "#features/PlaceSwitchGroup";

/**
 * Страница
 * @return {string}
 */
const indexPage = () => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <main class="ml17 mt152">
        ${PlaceSwitchGroup()}
        <div id="map1" class="yandexMap mt24" style="width: 1407px; aspect-ratio: 2 / 1; display: flex; justify-content: center; align-items: center"></div>
    </main>
    <div style="display: none">
      <div id="modalSuccess">
          <p>Успешно!</p>
      </div>
      <div id="modalError">
        <p>Не успешно!</p>
      </div>
    </div>
</body>
</html>
`;

export default indexPage;
