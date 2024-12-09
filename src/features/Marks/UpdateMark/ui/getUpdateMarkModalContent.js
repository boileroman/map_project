import { Button } from "#shared/ui/Button";
import {
  MovieIcon,
  RestaurantIcon,
  MusicIcon,
  TheaterIcon,
  BarIcon,
} from "#shared/ui/Icons/index";
import { Select } from "#shared/ui/Select/ui/Select";

/**
 * Контент модалки обновления метки
 */
export const getUpdateMarkModalContent = ({
  markInfo,
  url,
  method = "post",
  iconColor = "var(--colorBlack)",
}) => {
  return `<div class="updateModalContent" >
  <form data-js-form=${JSON.stringify({ url, method, showModalAfterSuccess: "#modalSuccess", delayBeforeRedirect: 3000 })}>
    <h3>Редактировать метку</h3>
    <p>${markInfo.title}</p>
    <div>
      <label>Комментарий пользователя
        <input type="comment" value="${markInfo.comment}" name="comment"/>
      </label>
      ${Select({
        extraAttrs: [
          {
            name: "data-js-update-mark-info-select-type",
            value: markInfo.id,
          },
          {
            name: "name",
            value: "typeMark",
          },
        ],
        cfg: {
          preset: "default",
          itemSelectText: "",
          searchEnabled: false,
          choices: [
            {
              value: "Бar",
              label: "Бар",
              selected: markInfo.type === "bars",
              customProperties: {
                icon: BarIcon({ iconColor: "var(--colorRed)" }),
              },
            },
            {
              value: "Ресторан",
              label: "Ресторан",
              selected: markInfo.type === "restaurant",
              customProperties: {
                icon: RestaurantIcon({ iconColor: "var(--colorRed)" }),
              },
            },
            {
              value: "Ночной клуб",
              label: "Ночной клуб",
              selected: markInfo.type === "trk",
              customProperties: {
                icon: MusicIcon({ iconColor: "var(--colorRed)" }),
              },
            },
            {
              value: "Театр",
              label: "Театр",
              selected: markInfo.type === "theatre",
              customProperties: {
                icon: TheaterIcon({ iconColor: "var(--colorRed)" }),
              },
            },
            {
              value: "Кино",
              label: "Кино",
              selected: markInfo.type === "cinema",
              customProperties: {
                icon: MovieIcon({ iconColor: "var(--colorPrimary)" }),
              },
            },
          ],
        },
      })}
      ${Button({
        text: "Сохранить",
        extraAttrs: [
          {
            name: "type",
            value: "submit",
          },
        ],
      })}
    </div>
  </form>
  </div>`;
};
