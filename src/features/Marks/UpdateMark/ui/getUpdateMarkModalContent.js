import { Button } from "#shared/ui/Button";
import {
  MovieIcon,
  RestaurantIcon,
  MusicIcon,
  TheaterIcon,
  BarIcon,
  SaveIcon,
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
    <p>${markInfo.address.city}, ${markInfo.address.street}, ${markInfo.address.house}</p>
    <div class="updateModalContent__info">
      <div class="updateModalContent__info-block">
        <p class="updateModalContent__info-text">Тип метки</p>
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
            classNames: {
              containerOuter: ["choices", "customSelect"],
              itemChoice: ["choices__item--choice", "customSelect__choice"],
              containerInner: ["choices__inner", "customSelect__inner"],
              list: ["choices__list", "customSelect__list"],
              itemSelectable: [
                "choices__item--selectable",
                "customSelect__item--selectable",
              ],
            },
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
                  icon: RestaurantIcon({ iconColor: "var(--colorOrange)" }),
                },
              },
              {
                value: "Ночной клуб",
                label: "Ночной клуб",
                selected: markInfo.type === "trk",
                customProperties: {
                  icon: MusicIcon({ iconColor: "var(--colorPrimary)" }),
                },
              },
              {
                value: "Театр",
                label: "Театр",
                selected: markInfo.type === "theatre",
                customProperties: {
                  icon: TheaterIcon({ iconColor: "var(--colorPurple)" }),
                },
              },
              {
                value: "Кино",
                label: "Кино",
                selected: markInfo.type === "cinema",
                customProperties: {
                  icon: MovieIcon({ iconColor: "var(--colorGreenLight)" }),
                },
              },
            ],
          },
        })}
      </div>
      <label class="updateModalContent__info-block"><p class="updateModalContent__info-text">Комментарий пользователя</p>
        <input type="comment" value="${markInfo.comment}" name="comment"/>
      </label>
      <div class="updateModalContent__info-block">
        <p class="updateModalContent__info-text">Фотографии</p>
        ${markInfo.images
          .map(
            (image) =>
              `<img src="${image}" class="updateModalContent__info-image">`
          )
          .join("")}
      </div>
    </div>
    <div class="updateModalContent__btn">     
      ${Button({
        text: "Сохранить",
        iconSlot: SaveIcon({ iconColor }),
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
