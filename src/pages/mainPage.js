import { Button } from "#shared/ui/Button/index";
import {
  GeoIcon,
  YesIcon,
  NoIcon,
  RestaurantIcon,
  BarIcon,
  MovieIcon,
  TheaterIcon,
  MusicIcon,
} from "#shared/ui/Icons/index";
import { Select } from "#shared/ui/Select/ui/Select";
import { Switch } from "#shared/ui/Switch/index";

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
    <header>
        <h1>Welcome to the Home Page</h1>
    </header>
    <main>
        <p>Hello world!</p>
        <div class="isFlex mb16 gap8">
          ${Button({ text: "Да", iconSlot: YesIcon(), extraClasses: ["btn--isGreenLightIcon"] })}
          ${Button({ text: "Нет", iconSlot: NoIcon(), extraClasses: ["btn--isRedIcon"] })}
        </div>
        ${Switch({
          label: "hello",
          extraInputAttrs: [
            { name: "name", value: "formAuth" },
            { name: "form", value: "rememberMe" },
          ],
        })}
        <div style="max-width: 279px">${Select({
          extraAttrs: [{ name: "id", value: "select-type-mark" }],
          cfg: {
            preset: "default",
            itemSelectText: "",
            searchEnabled: false,
            choices: [
              {
                value: "Ресторан",
                label: "Ресторан",
                selected: true,
                customProperties: {
                  icon: RestaurantIcon({ iconColor: "var(--colorRed)" }),
                },
              },
              {
                value: "Ночной клуб",
                label: "Ночной клуб",
                selected: false,
                customProperties: {
                  icon: MusicIcon({ iconColor: "var(--colorRed)" }),
                },
              },
              {
                value: "Театр",
                label: "Театр",
                selected: false,
                customProperties: {
                  icon: TheaterIcon({ iconColor: "var(--colorRed)" }),
                },
              },
              {
                value: "Кино",
                label: "Кино",
                selected: false,
                customProperties: {
                  icon: MovieIcon({ iconColor: "var(--colorPrimary)" }),
                },
              },
              {
                value: "Бар",
                label: "Бар",
                selected: false,
                customProperties: {
                  icon: BarIcon({ iconColor: "var(--colorRed)" }),
                },
              },
            ],
          },
        })}
        ${Select({
          extraAttrs: [{ name: "id", value: "select-type-mark" }],
          cfg: {
            preset: "fancy",
            itemSelectText: "",
            searchEnabled: false,
            choices: [
              {
                value: "Ресторан",
                label: "Ресторан",
                selected: true,
                customProperties: {
                  icon: RestaurantIcon({ iconColor: "var(--colorRed)" }),
                },
              },
              {
                value: "Ночной клуб",
                label: "Ночной клуб",
                selected: false,
                customProperties: {
                  icon: MusicIcon({ iconColor: "var(--colorRed)" }),
                },
              },
              {
                value: "Театр",
                label: "Театр",
                selected: false,
                customProperties: {
                  icon: TheaterIcon({ iconColor: "var(--colorRed)" }),
                },
              },
              {
                value: "Кино",
                label: "Кино",
                selected: false,
                customProperties: {
                  icon: MovieIcon({ iconColor: "var(--colorPrimary)" }),
                },
              },
              {
                value: "Бар",
                label: "Бар",
                selected: false,
                customProperties: {
                  icon: BarIcon({ iconColor: "var(--colorRed)" }),
                },
              },
            ],
          },
        })}
        </div>
        ${GeoIcon()}
    </main>
</body>
</html>
`;

export default indexPage;
