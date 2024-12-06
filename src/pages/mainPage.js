import { PlaceSwitchGroup } from "#features/PlaceSwitchGroup";
import { Map } from "#shared/ui/Map/index";

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
        ${Map()}
    </main>
</body>
</html>
`;

export default indexPage;
