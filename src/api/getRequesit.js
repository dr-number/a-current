

export default function getRequest(url){

  return new Promise(function (resolve, reject) {

    setTimeout(function () {

      (function () {
        getResource(url)
          .then(data => resolve(data))
          .catch(err => reject(new Error(err)));
      }());

      async function getResource(url) {
        const res = await fetch(url);

        if (!res.ok) { // не 200
          throw new Error(`Не удалось получить ${url}, статус: ${res.status}`);
        }

        try {
          const result = await res.json();
          //const result = await res.body;

          console.log(result);
          return result;

        } catch (e) {
          console.log("Error: " + e.name + "Message: " + e.message);
          throw new Error("Некорректный ответ от сервера! Возможно введены неверные данные!");
        }

      }

    }, 1000);

  });
}
