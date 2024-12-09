import { ModalManager } from "./modalManager.js";

/**
 * Класс для отправки данных с формы
 */
export class FormHandler {
  static instance;

  attrs = {
    form: "data-js-form",
  };

  constructor(apiClient) {
    if (FormHandler.instance) return FormHandler.instance;
    this.apiClient = apiClient;
    this.#bindEvents();
    FormHandler.instance = this;
  }

  static getInstance(apiClient) {
    if (!FormHandler.instance) {
      FormHandler.instance = new FormHandler(apiClient);
    }
    return FormHandler.instance;
  }

  async #handleSubmit(e) {
    const { target, submitter } = e;
    if (!target.hasAttribute(`${this.attrs.form}`)) return;
    if (!target.tagName.toLowerCase() === "form") return;

    const cfg = JSON.parse(target.getAttribute(this.attrs.form));
    const {
      url,
      method = "POST",
      showModalAfterSuccess,
      preventDefault = true,
      redirectUrlAfterSuccess,
      delayBeforeRedirect,
    } = cfg;
    const data = new FormData(target);

    if (preventDefault) {
      e.preventDefault();
    }

    submitter.disabled = true;

    try {
      if (method.toUpperCase() === "GET") {
        const params = Object.fromEntries(data.entries());
        await this.apiClient.get(url, params);
      } else {
        await this.apiClient.post(url, data);
      }

      if (showModalAfterSuccess) {
        ModalManager.getInstance().closeAll();
        ModalManager.getInstance().open(showModalAfterSuccess, {
          type: "inline",
        });
      }

      if (redirectUrlAfterSuccess) {
        if (delayBeforeRedirect) {
          setTimeout(() => {
            location.href = redirectUrlAfterSuccess;
          }, delayBeforeRedirect);
        } else {
          location.href = redirectUrlAfterSuccess;
        }
      }
    } catch (error) {
      console.error("Ошибка при отправке формы:", error);
    } finally {
      submitter.disabled = false;
    }
  }

  #bindEvents() {
    document.addEventListener(
      "submit",
      (e) => {
        this.#handleSubmit(e);
      },
      true
    );
  }
}
