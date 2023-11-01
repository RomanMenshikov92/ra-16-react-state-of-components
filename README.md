# Состояние компонентов

[![Appveyor Build status](https://ci.appveyor.com/api/projects/status/ulei6fotn2l4tkq9?svg=true)](https://ci.appveyor.com/project/RomanMenshikov92/ra-16-react-state-of-components)

[![Pages build status](https://github.com/RomanMenshikov92/ra-16-react-state-of-components/actions/workflows/pages/pages-build-deployment/badge.svg)](https://github.com/RomanMenshikov92/ra-16-react-state-of-components/actions/workflows/pages/pages-build-deployment)

---

## [GutHub Pages](https://romanmenshikov92.github.io/ra-16-react-state-of-components/)

Необходимо выполнить и предоставить на проверку следующие задачи:

<details>
<summary>1. Портфолио с фильтрами</summary>

## Портфолио с фильтрами

Необходимо реализовать портфолио с фильтрами, аналогичное указанному на изображении.

![portfolio-all](./res/portfolio-all.png)

## Описание проекта

Разработайте компонент класса `Portfolio`, хранящий список фильтров, активный фильтр, а также список проектов.

Сами фильтры отображаются в компоненте без состояния `Toolbar`, которому от `Portfolio` мы передаём три свойства:

- `filters` — список фильтров, название которых совпадает с категориями проектов;
- `selected` — активный фильтр;
- `onSelectFilter(filter)` — обработчик события, который реагирует на выбор пользователем одного из фильтров, обработчик принимает один аргумент — строку с названием фильтра.

Пример:

```
<Toolbar
  filters={["All", "Websites", "Flayers", "Business Cards"]}
  selected="All"
  onSelectFilter={(filter) => {console.log(filter);}}/>
```

В этом примере при выборе фильтра его название будет выведено в консоль. Например, «Business Cards».

Изображения самих проектов отображаются компонентом без состояния `ProjectList`, которому от `Portfolio` мы передаём список проектов — в свойство `projects`. Отображение проектов — это единственная ответственность компонента `ProjectList`.

Чтобы компонент `Portfolio` мог реагировать на выбор пользователем фильтра проектов, например, `Business Cards`, и передавать отфильтрованные по категории `Business Cards` проекты в компонент `ProjectList`, в класс `Portfolio` необходимо добавить состояние (state).

Ваша задача:

- установить состояние выбранного фильтра в обработчике события, который `Portfolio` передаёт в свойство `onSelectFilter` компонента `Toolbar`;
- из компонента `Portfolio` передать активный фильтр в свойство `selected` компонента `Toolbar`;
- в компоненте `Portfolio` отфильтровать по активному фильтру проекты и передать их в компонент `ProjectList`.

![portfolio-cards.png](./res/portfolio-cards.png)

Набор данных для отображения:

```js
[
  {
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/mon.jpg",
    category: "Business Cards",
  },
  {
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg",
    category: "Websites",
  },
  {
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg",
    category: "Websites",
  },
  {
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/codystretch.jpg",
    category: "Websites",
  },
  {
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_003.jpg",
    category: "Business Cards",
  },
  {
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290.png",
    category: "Websites",
  },
  {
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg",
    category: "Websites",
  },
  {
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg",
    category: "Business Cards",
  },
  {
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_1.png",
    category: "Websites",
  },
  {
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_2.png",
    category: "Flayers",
  },
  {
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/the_ninetys_brand.jpg",
    category: "Websites",
  },
  {
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/dia.jpg",
    category: "Business Cards",
  },
  {
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197.jpg",
    category: "Websites",
  },
  {
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg",
    category: "Websites",
  },
  {
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg",
    category: "Business Cards",
  },
  {
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197_1.jpg",
    category: "Websites",
  },
  {
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_3.png",
    category: "Flayers",
  },
];
```

</details>

<details>
<summary>2. Расположение товаров</summary>

## Расположение товаров

Вам необоходимо сделать приложение для отображения товаров в интернет-магазине. Заказчик хочет, чтобы пользователь мог увидеть товары в виде карточек или в виде списка, в зависимости от того, какое расположение он выберет.

![cards view](./res/card_view.png)

## Описание проекта

Реализуйте компонент `Store`, который управляет состоянием приложения, хранит список товаров в атрибуте `products`.

Иконка разметки, которая указывает на переключение между типами расположения товаров, реализована в компоненте без состояния `IconSwitch`, которому от `Store` мы передаём два свойства:

- `icon` — название иконки, которую хотим показать. Название иконки соответствует названию класса из библиотеки [material icons](https://material.io/icons/#ic_view_module). В нашем случае это либо `view_list`, либо `view_module`.
- `onSwitch()` — обработчик события, который реагирует на нажатие пользователем на иконку.

Пример:

```jsx
<IconSwitch icon={"view_list"} onSwitch={() => console.log("change state here")} />
```

Сами товары отображаются в компонентах без состояния `CardsView` или `ListView`.

Компоненту `CardsView` от `Store` мы передаём свойство `cards` — массив с данными, каждый элемент из которого затем уже отображается с помощью карточки товара `ShopCard`.

То есть `CardsView` отображает много карточек `ShopCard`. На один товар — одна карточка `ShopCard`.

Компоненту `ListView` от `Store` мы передаём всего одно свойство `items` — массив с данными, каждый элемент из которого затем уже отображается с помощью `ShopItem` для товаров, которые мы хотим отобразить.

То есть `ListView` отображает много `ShopItem`. На один товар — один `ShopItem`.

Чтобы компонент `Store` мог реагировать на выбор пользователем вида разметки, в класс `Store` необходимо добавить состояние (state).

Ваша задача:

- установить состояние выбранного типа разметки в обработчике события, который `Store` передаёт в свойство `onSwitch` компонента `IconSwitch`;
- из компонента `Store` передать правильную иконку в свойство `icon` компонента `IconSwitch`;
- в компоненте `Store` отобразить товары в компоненте `CardsView` или `ListView` соответсвенно состоянию компонента `App`.

![list_view](./res/list_view.png)

Не забудьте подключить Material Icons:

```css
@import url("https://fonts.googleapis.com/icon?family=Material+Icons");
```

Данные для отображения:

```js
const products = [
  {
    name: "Nike Metcon 2",
    price: "130",
    color: "red",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg",
  },
  {
    name: "Nike Metcon 2",
    price: "130",
    color: "green",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg",
  },
  {
    name: "Nike Metcon 2",
    price: "130",
    color: "blue",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg",
  },
  {
    name: "Nike Metcon 2",
    price: "130",
    color: "black",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg",
  },
  {
    name: "Nike free run",
    price: "170",
    color: "black",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/7.jpg",
  },
  {
    name: "Nike Metcon 3",
    price: "150",
    color: "green",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/5.jpg",
  },
];
```

</details>

<details>
<summary>3. Выпадающий список  — необязательная задача</summary>

## Выпадающий список

Вам необходимо реализовать компоненты выпадающего списка.

## Описание проекта

![Выпадающий список](./res/dropdown.png)

Реализуйте компонент `DropdownList`, аналогичный указанному на рисунке. Для позиционирования выпадающего списка воспользуйтесь контейнером с `position: relatvie`. Для простоты будем считать, что размер кнопки, при нажатии на которую показывается выпадающий список, фиксированный. Соответственно, вам не нужно через DOM API вычислять размеры и отступы.

Структура компонентов:

- `Dropdown` — содержит кнопку и `DropdownList`, внутри себя хранит состояние, показывать или нет выпадающий список;
- `DropdownList` — содержит список `DropdownItem` и хранит информацию о текущем выбранном элементе.

Вам нужно:

1. При клике на кнопку показывать и скрывать выпадающее меню.
1. Отрисовывать список на базе массива, хранящегося в памяти, через `map`.
1. Подсвечивать выбранный элемент в списке, сделайте это на базе inline-стилей.

Подглядеть реализацию показа и сворачивания на чистом JS и CSS вы можете в исходниках, расположенных в этом же каталоге.

Вы можете реализовать эту задачу как с использованием functional компонентов, так и на базе class-based компонентов.

Но мы рекомендуем functional.

</details>
</br>

---

Любые вопросы по решению задач задавайте в группе в Discord.

Все три задачи лучше сдавать в разных репозиториях, то есть через create-react-app реализовать три проекта, чтобы не было конфликта стилей. Но если вы позаботитесь о том, что конфликта не будет, то можете сдавать и в одном проекте.

Все стили необходимо размещать в файле App.css.

#### Альтернативный способ создания приложения React с использованием тулинга Vite

Приложение также можно создать используя инструмент Vite.
Документация по созданию приложения [React](https://vitejs.dev/guide/).

1. Откройте терминал и пропишите следующую команду: `yarn create vite my-app --template react`,
   либо `yarn create vite my-app --template react-ts`, если
   нужен шаблон с TypeScript. Эта команда создаст настроенный
   шаблонный проект.
2. Откройте созданный проект в своей IDE.
3. Установите зависимости.
4. Готово. Чтобы запустить приложение, введите команду: `yarn dev`(либо `npm run dev`).
