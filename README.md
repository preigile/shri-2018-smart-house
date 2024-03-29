## Запуск

В приложении используется [parcel.js](https://parceljs.org/getting_started.html).
Установить его можно с помощью команды `npm install -g parcel-bundler` или `yarn global add parcel-bundler`.

Склонируйте репозиторий и запустите приложение:

```
git clone https://github.com/preigile/smart-house.git
cd app
parcel index.html
```

## Ход мыслей

Выполнение 2-го задания начала с вёрстки. Чтобы распределить основные блоки использовала grid layout.
К сожалению, они до сих пор не поддерживаются Edge, не успела обработать этот вариант, но сделала бы это переписыванием на flexbox.
Остальные элементы компоновала с помощью флексбоксов.

Основные трудности, с которыми столкнулась, обработка событий, в данном случае клика при использовании innerHtml.
Чтобы решить эту проблему, вначале использовала eval. В продакшене такой вариант лучше не применять,
так как это может привести к различным секьюрити последствиям. Позже, избавилась от eval и объявляла функции в глобальной области видимость,
каждую в своём именном пространстве.

Карточки очень похожи друг на друга, разница лишь в содержимом. Чтобы не повторяться, создала переиспользуемые компоненты.
Способ создания компонентов на ванильном js кажется интересным для понимания работы современных фреймворков,
но в случае с постоянным перерендериванием всего DOM является не оптимальным.
В новой спецификации html5 появилась возможность расширять html и добавлять кастомные теги. Поддержка реализована ещё не всеми браузерами,
в дальнейшем, полагаю, это может стать не плохой альтернативой современным фреймворкам при создании простых веб приложений.

Некоторые моменты не успела доделать. Так, например, постраничное листание для десктопной версии и отображение деталей девайсов по клику.
По клику на каждую карточку вызывается заглушка, которая требует функцию. Из-за отсутствия функции, которая отображала бы детали девайсов,
в консоли можно увидеть ошибку. 

Дополнительно реализована сортировка по типам девайсов.
