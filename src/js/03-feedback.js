// Выполняй это задание в файлах 03-feedback.html и 03-feedback.js. Разбей его на несколько подзадач:

// Отслеживай на форме событие input, и каждый раз записывай в локальное хранилище объект с полями email и password, в которых сохраняй текущие значения полей формы. Пусть ключом для хранилища будет строка "feedback-form-state".
// При загрузке страницы проверяй состояние хранилища, и если там есть сохраненные данные, заполняй ими поля формы. В противном случае поля должны быть пустыми.
// При сабмите формы очищай хранилище и поля формы, а также выводи объект с полями email, password и текущими их значениями в консоль.
// Сделай так, чтобы хранилище обновлялось не чаще чем раз в 500 миллисекунд. Для этого добавь в проект и используй библиотеку lodash.throttle.

const formEl = document.querySelector(".feedback-form");
const inputEl = document.querySelector("input");
const buttonEl = document.querySelector("button");
const textarea = document.querySelector("textarea");
const FEED = "feedback-form-state";
const localValue = localStorage.getItem(FEED);

function saveLocal () {
    if(JSON.parse(localValue)){
        inputEl.value = JSON.parse(localValue).email;
        textarea.value = JSON.parse(localValue).message;
    }
}
saveLocal ();
