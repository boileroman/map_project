/**
 * Подключение внешнего скрипта
 */
export const getExternalScript = (url) => {
  return new Promise((res, rej) => {
    const script = document.createElement("script");
    script.src = url;
    script.onload = () => res();
    script.onerror = () => {
      rej(new Error(`cant load script ${url}`));
    };
    document.head.appendChild(script);
  });
};

getExternalScript().then().catch();
