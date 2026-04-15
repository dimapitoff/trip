const fullTripPlan = [
  "5 мая (Кисловодск): приезд, заселение, легкая прогулка по Курортному бульвару, Нарзанной галерее и Колоннаде.",
  "6 мая (Кисловодск): Маршрут A (без возвратов) - Гора Малое Седло 1325 м, Скала Замок, Скала Человек, Микрогородок, Хозяин гор, Природные гроты, Храм воздуха, Долина роз.",
  "7 мая (Кисловодск): Маршрут C: Березовское ущелье - Березовское ущелье, Скальный сектор мыши, Скала черепаха, Водопад.",
  "8 мая (Кисловодск): спокойный день в парке - Храм воздуха и Долина роз, короткие радиальные выходы без длинных переходов.",
  "9 мая (Кисловодск): Маршрут B (без возвратов) - Золотые водопады, Березовые нарзаны, Смотровая площадка, Пещера.",
  "10 мая (Кисловодск): резерв на погоду и повтор любимых точек, вечерняя подготовка к переезду.",
  "11 мая (переезд в Ессентуки): выезд из Кисловодска, заселение, прогулка по курортной зоне и вечер в санатории \"Источник\".",
  "12 мая (Ессентуки): оздоровительный день - бальнеогрязелечебница (Николаевские ванны), санаторий \"Истокъ\" и прогулка по центру.",
  "13 мая (Ессентуки): короткий утренний выезд в термы (Суворовский источник № 1 или Машук Аква-Терм), затем сборы и отъезд."
];

const cityData = {
  kislovodsk: {
    title: "Кисловодск",
    datePlan: "5-11 мая: проживание в Кисловодске.",
    center: [43.90533, 42.71739],
    zoom: 13,
    places: [
      {
        name: "Нарзанная галерея",
        coords: [43.89966, 42.7242],
        kind: "route",
        note: "Ключевая точка маршрута: историческая галерея и дегустация нарзана.",
        routeType: "Историческое место",
        visitTime: "30-40 мин",
        bestTime: "Утро",
        dayHint: "Старт маршрута",
        photos: [
          "https://avatars.mds.yandex.net/get-altay/4449685/2a0000018272599f5d3ee46c8e1fada1cfda/L_height",
          "https://avatars.mds.yandex.net/get-vh/15065920/2a0000019b2b96a46541197aaa33b833690d/smart_crop_516x290",
          "https://avatars.mds.yandex.net/get-altay/13818104/2a0000019157cebc8ce708db3e2bc5be672d/L_height"
        ]
      },
      {
        name: "Курортный бульвар",
        coords: [43.90081, 42.72491],
        kind: "route",
        note: "Центральная пешеходная улица с архитектурой, кафе и атмосферой старого курорта.",
        routeType: "Пешеходная зона",
        visitTime: "40-60 мин",
        bestTime: "День",
        dayHint: "После галереи",
        photos: [
          "https://core-pht-proxy.maps.yandex.ru/v1/photos/download?photo_id=dSfy5AsONginBPskrLD&image_size=M",
          "https://core-pht-proxy.maps.yandex.ru/v1/photos/download?photo_id=dSfy5AsONginBPskrLD&image_size=XL",
          "https://static-pano.maps.yandex.ru/v1/?panoid=1328557377_783243279_23_1749568153&size=500%2C240&azimuth=-160.9&tilt=10&api_key=maps&signature=sA8LZYXNWN47vKWO3XxT42iiuEVRQl9rVmONPOQ6EjM="
        ]
      },
      {
        name: "Главные нарзанные ванны",
        coords: [43.90154, 42.72427],
        kind: "route",
        note: "Знаковое здание на бульваре, важная историческая часть курортного ансамбля.",
        routeType: "Архитектурная достопримечательность",
        visitTime: "15-30 мин",
        bestTime: "День",
        dayHint: "Маршрут по центру",
        photos: [
          "https://static-pano.maps.yandex.ru/v1/?panoid=1328557657_783266273_23_1568638938&size=500%2C240&azimuth=305&tilt=2.4&api_key=maps&signature=YP2HV-EwzaKtM7bztZP7lliG1rU3TjLi2sgP3Oc7x3s=",
          "https://avatars.mds.yandex.net/get-altay/1047383/2a000001664abb57ff8310cd012fac03f95c/S",
          "https://avatars.mds.yandex.net/get-altay/4449685/2a0000018272599f5d3ee46c8e1fada1cfda/L_height"
        ]
      },
      {
        name: "Каскадная лестница",
        coords: [43.91055, 42.72923],
        kind: "route",
        note: "Одна из главных доминант маршрута с красивыми видами на город.",
        routeType: "Видовой маршрут",
        visitTime: "60-120 мин",
        bestTime: "После 16:00",
        dayHint: "Середина маршрута",
        photos: [
          "https://avatars.mds.yandex.net/get-altay/9895050/2a00000191a4e989de2007526e882e039994/L_height",
          "https://avatars.mds.yandex.net/get-vh/16401190/2a0000019d1e52c390c988bd2da8e5c7196f/smart_crop_516x290",
          "https://avatars.mds.yandex.net/get-altay/2761244/2a0000017077c7cb1f8c68a86a5eb0ca45f3/L_height"
        ]
      },
      {
        name: "Долина роз",
        coords: [43.92042, 42.73458],
        kind: "route",
        note: "Одна из главных точек нацпарка с панорамами и длинными прогулками.",
        routeType: "Парковый маршрут",
        visitTime: "90-150 мин",
        bestTime: "День",
        dayHint: "Финальная длинная прогулка",
        photos: [
          "https://avatars.mds.yandex.net/get-altay/4379646/2a000001904b5ed78f85c4804e49167ebf38/L_height",
          "https://avatars.mds.yandex.net/get-vh/15386257/2a00000198bd744a4ef91065782d16dfc60e/smart_crop_516x290",
          "https://avatars.mds.yandex.net/get-altay/13590061/2a0000019044d724a0ea547f99bfab281236/L_height"
        ]
      },
      {
        name: "Храм воздуха",
        coords: [43.91433, 42.7343],
        kind: "route",
        note: "Популярная обзорная площадка в национальном парке на однодневном маршруте.",
        routeType: "Смотровая точка",
        visitTime: "20-40 мин",
        bestTime: "Светлое время дня",
        dayHint: "Перед завершением маршрута",
        photos: [
          "https://static-pano.maps.yandex.ru/v1/?panoid=1328676222_783309180_23_1749046036&size=500%2C240&azimuth=-57.7&tilt=10&api_key=maps&signature=KHhTC4yrYwZXg1zWMCWZ0lbP-daHcrg3HDG7183GEDU=",
          "https://avatars.mds.yandex.net/get-altay/4379646/2a000001904b5ed78f85c4804e49167ebf38/L_height",
          "https://avatars.mds.yandex.net/get-vh/15386257/2a00000198bd744a4ef91065782d16dfc60e/smart_crop_516x290"
        ]
      },
      {
        name: "Канатная дорога в парке",
        coords: [43.91873, 42.73698],
        kind: "route",
        note: "Быстрый способ увидеть парк и панорамы, если хотите уложиться в один день.",
        routeType: "Панорамный подъем",
        visitTime: "20-30 мин",
        bestTime: "Днем",
        dayHint: "Опционально по времени",
        photos: [
          "https://avatars.mds.yandex.net/get-altay/13078542/2a0000018fab840d0532e1af58e781f18462/L_height",
          "https://avatars.mds.yandex.net/get-vh/15247478/2a0000019cc419102c540d6142869db6b393/smart_crop_516x290",
          "https://avatars.mds.yandex.net/get-altay/16105091/2a00000196c069c79eb65c07c35b3dfb2f95/L_height"
        ]
      },
      {
        name: "Маршрут №1: Экспресс-визит (ENJOY)",
        coords: [43.89966, 42.7242],
        kind: "route",
        note: "Короткий маршрут по Нижнему парку: Нарзанная галерея, Колоннада, грот Демона, Цветочный календарь, Стеклянная струя, мостик \"Дамский каприз\".",
        routeType: "Пешеходный маршрут по статье",
        visitTime: "1 час",
        bestTime: "Утро или вечер",
        dayHint: "1,3 км; легкий",
        photos: [
          "https://avatars.mds.yandex.net/get-altay/4449685/2a0000018272599f5d3ee46c8e1fada1cfda/L_height",
          "https://avatars.mds.yandex.net/get-vh/15065920/2a0000019b2b96a46541197aaa33b833690d/smart_crop_516x290",
          "https://avatars.mds.yandex.net/get-altay/13818104/2a0000019157cebc8ce708db3e2bc5be672d/L_height"
        ]
      },
      {
        name: "Маршрут №2: Главные достопримечательности (ENJOY)",
        coords: [43.91055, 42.72923],
        kind: "route",
        note: "Маршрут через главные точки парка: Царская площадка, Сосновая гора, Красные камни, Долина роз, канатная дорога, Семь ветров, Красное Солнышко, Каскадная лестница.",
        routeType: "Пешеходный маршрут по статье",
        visitTime: "3 часа",
        bestTime: "Днем",
        dayHint: "8,6 км; средний",
        photos: [
          "https://avatars.mds.yandex.net/get-altay/9895050/2a00000191a4e989de2007526e882e039994/L_height",
          "https://avatars.mds.yandex.net/get-vh/16401190/2a0000019d1e52c390c988bd2da8e5c7196f/smart_crop_516x290",
          "https://avatars.mds.yandex.net/get-altay/2761244/2a0000017077c7cb1f8c68a86a5eb0ca45f3/L_height"
        ]
      },
      {
        name: "Маршрут №3: Для максималистов (ENJOY)",
        coords: [43.9248, 42.7388],
        kind: "route",
        note: "Длинный трек по горной части: Красное Солнышко, памятник Лермонтову, Семь ветров, Малое Седло, тропа Косыгина, гроты, Хозяин гор, скала Человек.",
        routeType: "Трекинговый маршрут по статье",
        visitTime: "6 часов",
        bestTime: "Светлое время дня",
        dayHint: "15 км; сложный",
        photos: [
          "https://avatars.mds.yandex.net/get-altay/13078542/2a0000018fab840d0532e1af58e781f18462/L_height",
          "https://avatars.mds.yandex.net/get-vh/15247478/2a0000019cc419102c540d6142869db6b393/smart_crop_516x290",
          "https://avatars.mds.yandex.net/get-altay/16105091/2a00000196c069c79eb65c07c35b3dfb2f95/L_height"
        ]
      },
      {
        name: "Колоннада",
        coords: [43.90115, 42.72456],
        kind: "route",
        note: "Парадный вход в Кисловодский парк и одна из ключевых точек маршрута №1.",
        routeType: "Историческая архитектура",
        visitTime: "15-25 мин",
        bestTime: "День",
        dayHint: "Маршрут №1",
        photos: [
          "https://avatars.mds.yandex.net/get-altay/4449685/2a0000018272599f5d3ee46c8e1fada1cfda/L_height",
          "https://avatars.mds.yandex.net/get-vh/15065920/2a0000019b2b96a46541197aaa33b833690d/smart_crop_516x290",
          "https://avatars.mds.yandex.net/get-altay/13818104/2a0000019157cebc8ce708db3e2bc5be672d/L_height"
        ]
      },
      {
        name: "Грот Демона",
        coords: [43.90158, 42.72498],
        kind: "route",
        note: "Лермонтовская точка Нижнего парка рядом с Колоннадой и Лермонтовской площадкой.",
        routeType: "Культурная локация",
        visitTime: "15-20 мин",
        bestTime: "День",
        dayHint: "Маршрут №1",
        photos: [
          "https://avatars.mds.yandex.net/get-altay/1047383/2a000001664abb57ff8310cd012fac03f95c/S",
          "https://avatars.mds.yandex.net/get-altay/4449685/2a0000018272599f5d3ee46c8e1fada1cfda/L_height",
          "https://avatars.mds.yandex.net/get-vh/15065920/2a0000019b2b96a46541197aaa33b833690d/smart_crop_516x290"
        ]
      },
      {
        name: "Цветочный календарь",
        coords: [43.9023, 42.7257],
        kind: "route",
        note: "Историческая клумба-календарь, которую в статье относят к обязательным точкам экспресс-маршрута.",
        routeType: "Парковая достопримечательность",
        visitTime: "10-20 мин",
        bestTime: "День",
        dayHint: "Маршрут №1",
        photos: [
          "https://avatars.mds.yandex.net/get-altay/4379646/2a000001904b5ed78f85c4804e49167ebf38/L_height",
          "https://avatars.mds.yandex.net/get-vh/15386257/2a00000198bd744a4ef91065782d16dfc60e/smart_crop_516x290",
          "https://avatars.mds.yandex.net/get-altay/13590061/2a0000019044d724a0ea547f99bfab281236/L_height"
        ]
      },
      {
        name: "Беседка \"Стеклянная струя\"",
        coords: [43.9031, 42.7264],
        kind: "route",
        note: "Классическая беседка у Зеркального пруда, знаковая точка в маршрутах №1 и №2.",
        routeType: "Смотровая беседка",
        visitTime: "15-25 мин",
        bestTime: "День",
        dayHint: "Маршруты №1-2",
        photos: [
          "https://avatars.mds.yandex.net/get-altay/4379646/2a000001904b5ed78f85c4804e49167ebf38/L_height",
          "https://avatars.mds.yandex.net/get-vh/15386257/2a00000198bd744a4ef91065782d16dfc60e/smart_crop_516x290",
          "https://avatars.mds.yandex.net/get-altay/13590061/2a0000019044d724a0ea547f99bfab281236/L_height"
        ]
      },
      {
        name: "Мостик \"Дамский каприз\"",
        coords: [43.90425, 42.72725],
        kind: "route",
        note: "Романтичный мостик над Ольховкой, развилка для продолжения в Средний парк.",
        routeType: "Прогулочная точка",
        visitTime: "10-20 мин",
        bestTime: "День",
        dayHint: "Маршруты №1-2",
        photos: [
          "https://avatars.mds.yandex.net/get-altay/4379646/2a000001904b5ed78f85c4804e49167ebf38/L_height",
          "https://avatars.mds.yandex.net/get-vh/15386257/2a00000198bd744a4ef91065782d16dfc60e/smart_crop_516x290",
          "https://avatars.mds.yandex.net/get-altay/13590061/2a0000019044d724a0ea547f99bfab281236/L_height"
        ]
      },
      {
        name: "Царская площадка",
        coords: [43.9109, 42.7312],
        kind: "route",
        note: "Переход из Нижнего в Средний парк, стартовый участок маршрута №2 с хвойными аллеями.",
        routeType: "Парковая площадь",
        visitTime: "20-30 мин",
        bestTime: "День",
        dayHint: "Маршрут №2",
        photos: [
          "https://avatars.mds.yandex.net/get-altay/9895050/2a00000191a4e989de2007526e882e039994/L_height",
          "https://avatars.mds.yandex.net/get-vh/16401190/2a0000019d1e52c390c988bd2da8e5c7196f/smart_crop_516x290",
          "https://avatars.mds.yandex.net/get-altay/2761244/2a0000017077c7cb1f8c68a86a5eb0ca45f3/L_height"
        ]
      },
      {
        name: "Красные камни",
        coords: [43.91492, 42.73238],
        kind: "route",
        note: "Скальный массив из красного песчаника с панорамами, включен в главный обзорный маршрут.",
        routeType: "Природная достопримечательность",
        visitTime: "30-45 мин",
        bestTime: "После 16:00",
        dayHint: "Маршруты №2-3",
        photos: [
          "https://avatars.mds.yandex.net/get-altay/9895050/2a00000191a4e989de2007526e882e039994/L_height",
          "https://avatars.mds.yandex.net/get-vh/16401190/2a0000019d1e52c390c988bd2da8e5c7196f/smart_crop_516x290",
          "https://avatars.mds.yandex.net/get-altay/2761244/2a0000017077c7cb1f8c68a86a5eb0ca45f3/L_height"
        ]
      },
      {
        name: "Беседка \"Семь ветров\"",
        coords: [43.92345, 42.73925],
        kind: "route",
        note: "Высотная смотровая площадка с видами на парк и Эльбрус, ключевая точка маршрутов №2 и №3.",
        routeType: "Смотровая площадка",
        visitTime: "25-40 мин",
        bestTime: "Утро",
        dayHint: "Маршруты №2-3",
        photos: [
          "https://avatars.mds.yandex.net/get-altay/13078542/2a0000018fab840d0532e1af58e781f18462/L_height",
          "https://avatars.mds.yandex.net/get-vh/15247478/2a0000019cc419102c540d6142869db6b393/smart_crop_516x290",
          "https://avatars.mds.yandex.net/get-altay/16105091/2a00000196c069c79eb65c07c35b3dfb2f95/L_height"
        ]
      },
      {
        name: "Гора Красное Солнышко",
        coords: [43.92205, 42.73792],
        kind: "route",
        note: "Одна из самых популярных высотных точек парка с видами на закат и городской амфитеатр.",
        routeType: "Горная смотровая",
        visitTime: "30-60 мин",
        bestTime: "Закат",
        dayHint: "Маршруты №2-3",
        photos: [
          "https://avatars.mds.yandex.net/get-altay/13078542/2a0000018fab840d0532e1af58e781f18462/L_height",
          "https://avatars.mds.yandex.net/get-vh/15247478/2a0000019cc419102c540d6142869db6b393/smart_crop_516x290",
          "https://avatars.mds.yandex.net/get-altay/16105091/2a00000196c069c79eb65c07c35b3dfb2f95/L_height"
        ]
      },
      {
        name: "Гора Кольцо 871 м",
        coords: [43.9415116, 42.6936836],
        kind: "route",
        note: "Место из подборки тропинок: природная арка и смотровая точка в окрестностях Кисловодска.",
        routeType: "Скальная достопримечательность",
        visitTime: "30-60 мин",
        bestTime: "День",
        dayHint: "Подборка Яндекс Карт",
        photos: [
          "https://static-maps.yandex.ru/1.x/?ll=42.6936836,43.9415116&z=14&size=520,290&l=map&pt=42.6936836,43.9415116,pm2blm",
          "https://static-maps.yandex.ru/1.x/?ll=42.6936836,43.9415116&z=13&size=520,290&l=sat&pt=42.6936836,43.9415116,pm2blm",
          "https://static-maps.yandex.ru/1.x/?ll=42.6936836,43.9415116&z=15&size=520,290&l=sat,skl&pt=42.6936836,43.9415116,pm2blm"
        ]
      },
      {
        name: "Гора Малое Седло",
        coords: [43.92865, 42.74115],
        kind: "route",
        note: "Высшая точка парка из маршрута №3, основной трекинговый участок для выносливых.",
        routeType: "Горный трек",
        visitTime: "60-120 мин",
        bestTime: "Светлое время дня",
        dayHint: "Маршрут №3",
        photos: [
          "https://avatars.mds.yandex.net/get-altay/13078542/2a0000018fab840d0532e1af58e781f18462/L_height",
          "https://avatars.mds.yandex.net/get-vh/15247478/2a0000019cc419102c540d6142869db6b393/smart_crop_516x290",
          "https://avatars.mds.yandex.net/get-altay/16105091/2a00000196c069c79eb65c07c35b3dfb2f95/L_height"
        ]
      },
      {
        name: "Тропа Косыгина",
        coords: [43.92665, 42.73655],
        kind: "route",
        note: "Живописная туристическая тропа с гротами и скальными коридорами, центральная часть маршрута №3.",
        routeType: "Трекинговая тропа",
        visitTime: "2-3 часа",
        bestTime: "Светлое время дня",
        dayHint: "Маршрут №3",
        photos: [
          "https://avatars.mds.yandex.net/get-altay/13078542/2a0000018fab840d0532e1af58e781f18462/L_height",
          "https://avatars.mds.yandex.net/get-vh/15247478/2a0000019cc419102c540d6142869db6b393/smart_crop_516x290",
          "https://avatars.mds.yandex.net/get-altay/16105091/2a00000196c069c79eb65c07c35b3dfb2f95/L_height"
        ]
      },
      {
        name: "Скала Человек",
        coords: [43.92558, 42.73558],
        kind: "route",
        note: "Финальная скальная локация тропы Косыгина из маршрута №3 с обзором на Эльбрус.",
        routeType: "Скальная смотровая",
        visitTime: "20-40 мин",
        bestTime: "День",
        dayHint: "Маршрут №3",
        photos: [
          "https://avatars.mds.yandex.net/get-altay/13078542/2a0000018fab840d0532e1af58e781f18462/L_height",
          "https://avatars.mds.yandex.net/get-vh/15247478/2a0000019cc419102c540d6142869db6b393/smart_crop_516x290",
          "https://avatars.mds.yandex.net/get-altay/16105091/2a00000196c069c79eb65c07c35b3dfb2f95/L_height"
        ]
      },
      {
        name: "Вход в Березовскую балку (Березовская, 34)",
        coords: [43.8937966, 42.7115004],
        kind: "route",
        note: "Старт маршрута из статьи: вход в Березовскую балку у дома 34 по Березовской улице.",
        routeType: "Точка старта",
        visitTime: "10-15 мин",
        bestTime: "Утро",
        dayHint: "Маршрут Березовская балка",
        photos: [
          "https://static-maps.yandex.ru/1.x/?ll=42.7115004,43.8937966&z=15&size=520,290&l=map&pt=42.7115004,43.8937966,pm2blm",
          "https://static-maps.yandex.ru/1.x/?ll=42.7115004,43.8937966&z=13&size=520,290&l=sat&pt=42.7115004,43.8937966,pm2blm",
          "https://static-maps.yandex.ru/1.x/?ll=42.7115004,43.8937966&z=14&size=520,290&l=sat,skl&pt=42.7115004,43.8937966,pm2blm"
        ]
      },
      {
        name: "Березовское ущелье (верхний участок)",
        coords: [43.8856143, 42.6997083],
        kind: "route",
        note: "Живописный участок Березовского ущелья по пути к Фестивальной поляне и Золотым водопадам.",
        routeType: "Ущелье",
        visitTime: "40-60 мин",
        bestTime: "День",
        dayHint: "Маршрут Березовская балка",
        photos: [
          "https://static-maps.yandex.ru/1.x/?ll=42.6997083,43.8856143&z=14&size=520,290&l=map&pt=42.6997083,43.8856143,pm2blm",
          "https://static-maps.yandex.ru/1.x/?ll=42.6997083,43.8856143&z=13&size=520,290&l=sat&pt=42.6997083,43.8856143,pm2blm",
          "https://static-maps.yandex.ru/1.x/?ll=42.6997083,43.8856143&z=15&size=520,290&l=sat,skl&pt=42.6997083,43.8856143,pm2blm"
        ]
      },
      {
        name: "Березовское ущелье (средний участок)",
        coords: [43.8682282, 42.6714233],
        kind: "route",
        note: "Средний участок маршрута по дну балки с выходом к удаленным видовым точкам.",
        routeType: "Ущелье",
        visitTime: "60-90 мин",
        bestTime: "День",
        dayHint: "Маршрут Березовская балка",
        photos: [
          "https://static-maps.yandex.ru/1.x/?ll=42.6714233,43.8682282&z=13&size=520,290&l=map&pt=42.6714233,43.8682282,pm2blm",
          "https://static-maps.yandex.ru/1.x/?ll=42.6714233,43.8682282&z=12&size=520,290&l=sat&pt=42.6714233,43.8682282,pm2blm",
          "https://static-maps.yandex.ru/1.x/?ll=42.6714233,43.8682282&z=14&size=520,290&l=sat,skl&pt=42.6714233,43.8682282,pm2blm"
        ]
      },
      {
        name: "Элькуш (старт альтернативного спуска)",
        coords: [43.8634135, 42.6446145],
        kind: "route",
        note: "Поселок Элькуш в статье указан как удобная точка для сокращенного варианта маршрута.",
        routeType: "Транспортная точка",
        visitTime: "15-20 мин",
        bestTime: "Утро",
        dayHint: "Маршрут Березовская балка",
        photos: [
          "https://static-maps.yandex.ru/1.x/?ll=42.6446145,43.8634135&z=12&size=520,290&l=map&pt=42.6446145,43.8634135,pm2blm",
          "https://static-maps.yandex.ru/1.x/?ll=42.6446145,43.8634135&z=11&size=520,290&l=sat&pt=42.6446145,43.8634135,pm2blm",
          "https://static-maps.yandex.ru/1.x/?ll=42.6446145,43.8634135&z=13&size=520,290&l=sat,skl&pt=42.6446145,43.8634135,pm2blm"
        ]
      },
      {
        name: "Кичи-Балык (дорога к водопадам)",
        coords: [43.7905973, 42.6507536],
        kind: "route",
        note: "Опорная точка дороги Элькуш - Кичи-Балык для выхода к дальним участкам Березовского маршрута.",
        routeType: "Опорная точка",
        visitTime: "20-30 мин",
        bestTime: "День",
        dayHint: "Маршрут Березовская балка",
        photos: [
          "https://static-maps.yandex.ru/1.x/?ll=42.6507536,43.7905973&z=11&size=520,290&l=map&pt=42.6507536,43.7905973,pm2blm",
          "https://static-maps.yandex.ru/1.x/?ll=42.6507536,43.7905973&z=10&size=520,290&l=sat&pt=42.6507536,43.7905973,pm2blm",
          "https://static-maps.yandex.ru/1.x/?ll=42.6507536,43.7905973&z=12&size=520,290&l=sat,skl&pt=42.6507536,43.7905973,pm2blm"
        ]
      },
      {
        name: "Лермонтовская скала",
        coords: [43.868622, 42.737889],
        kind: "route",
        note: "Ключевая точка маршрута по Ольховской балке из статьи.",
        routeType: "Скальная достопримечательность",
        visitTime: "40-60 мин",
        bestTime: "День",
        dayHint: "Маршрут Ольховская балка",
        photos: [
          "https://static-maps.yandex.ru/1.x/?ll=42.737889,43.868622&z=14&size=520,290&l=map&pt=42.737889,43.868622,pm2blm",
          "https://static-maps.yandex.ru/1.x/?ll=42.737889,43.868622&z=13&size=520,290&l=sat&pt=42.737889,43.868622,pm2blm",
          "https://static-maps.yandex.ru/1.x/?ll=42.737889,43.868622&z=15&size=520,290&l=sat,skl&pt=42.737889,43.868622,pm2blm"
        ]
      },
      {
        name: "Посёлок Нарзанный",
        coords: [43.863559, 42.754472],
        kind: "route",
        note: "Рекомендуемая стартовая точка маршрута по Ольховской балке.",
        routeType: "Точка старта",
        visitTime: "10-15 мин",
        bestTime: "Утро",
        dayHint: "Маршрут Ольховская балка",
        photos: [
          "https://static-maps.yandex.ru/1.x/?ll=42.754472,43.863559&z=14&size=520,290&l=map&pt=42.754472,43.863559,pm2blm",
          "https://static-maps.yandex.ru/1.x/?ll=42.754472,43.863559&z=13&size=520,290&l=sat&pt=42.754472,43.863559,pm2blm",
          "https://static-maps.yandex.ru/1.x/?ll=42.754472,43.863559&z=15&size=520,290&l=sat,skl&pt=42.754472,43.863559,pm2blm"
        ]
      },
      {
        name: "Лермонтовский водопад",
        coords: [43.8837089, 42.7235542],
        kind: "route",
        note: "Водопад на реке Ольховка, который статья включает в основной пешеходный проход.",
        routeType: "Водопад",
        visitTime: "20-35 мин",
        bestTime: "День",
        dayHint: "Маршрут Ольховская балка",
        photos: [
          "https://static-pano.maps.yandex.ru/v1/?panoid=1328596676_783413895_23_1748175799&size=500%2C240&azimuth=172.8&tilt=10&api_key=maps&signature=eIwUBRvqolqSGZWR_U7kvJ3kSINPe54YToYQoeToj6A=",
          "https://avatars.mds.yandex.net/get-altay/4449685/2a0000018789a2ab1b5726d4bee99339ecf4/L_height",
          "https://avatars.mds.yandex.net/get-vh/15688477/2a0000019d3a94f3593ade62b5db5b671330/smart_crop_516x290"
        ]
      },
      {
        name: "Станция Подкумок",
        coords: [43.9614421, 42.7712014],
        kind: "route",
        note: "Стартовая точка маршрута к Подкумскому провалу и Спящей красавице.",
        routeType: "Транспортная точка",
        visitTime: "10-15 мин",
        bestTime: "Утро",
        dayHint: "Маршрут Спящая красавица",
        photos: [
          "https://static-maps.yandex.ru/1.x/?ll=42.7712014,43.9614421&z=14&size=520,290&l=map&pt=42.7712014,43.9614421,pm2blm",
          "https://static-maps.yandex.ru/1.x/?ll=42.7712014,43.9614421&z=13&size=520,290&l=sat&pt=42.7712014,43.9614421,pm2blm",
          "https://static-maps.yandex.ru/1.x/?ll=42.7712014,43.9614421&z=15&size=520,290&l=sat,skl&pt=42.7712014,43.9614421,pm2blm"
        ]
      },
      {
        name: "Пещера Подкумский провал",
        coords: [43.9746676, 42.7612704],
        kind: "route",
        note: "Ключевой объект маршрута из статьи: пещера в районе Подкумка.",
        routeType: "Пещера",
        visitTime: "25-40 мин",
        bestTime: "День",
        dayHint: "Маршрут Спящая красавица",
        photos: [
          "https://avatars.mds.yandex.net/get-altay/11732311/2a0000018cfe4e8f36401accf599ef9c30be/L_height",
          "https://static-maps.yandex.ru/1.x/?ll=42.7612704,43.9746676&z=14&size=520,290&l=map&pt=42.7612704,43.9746676,pm2blm",
          "https://static-maps.yandex.ru/1.x/?ll=42.7612704,43.9746676&z=13&size=520,290&l=sat&pt=42.7612704,43.9746676,pm2blm"
        ]
      },
      {
        name: "Боргустанский хребет (смотровая)",
        coords: [43.949398, 42.7257565],
        kind: "route",
        note: "Видовая точка Боргустанского хребта для завершающей части маршрута Спящей красавицы.",
        routeType: "Смотровая точка",
        visitTime: "30-45 мин",
        bestTime: "Ближе к закату",
        dayHint: "Маршрут Спящая красавица",
        photos: [
          "https://static-maps.yandex.ru/1.x/?ll=42.7257565,43.949398&z=12&size=520,290&l=map&pt=42.7257565,43.949398,pm2blm",
          "https://static-maps.yandex.ru/1.x/?ll=42.7257565,43.949398&z=11&size=520,290&l=sat&pt=42.7257565,43.949398,pm2blm",
          "https://static-maps.yandex.ru/1.x/?ll=42.7257565,43.949398&z=13&size=520,290&l=sat,skl&pt=42.7257565,43.949398,pm2blm"
        ]
      }
    ],
    housing: [
      {
        name: "Яндекс Путешествия: Green Grass",
        coords: [43.904147, 42.744213],
        kind: "housing",
        note: "Квартира рядом с парком, спокойный район.",
        dates: "5-12 мая",
        pricePerNight: "43 510 руб. за 7 ночей",
        rating: "5.0/5",
        reviews: "7 отзывов",
        source: "Яндекс Путешествия",
        bookingUrl: "https://travel.yandex.ru/hotels/kislovodsk/green-grass-411048213/?adults=2&checkinDate=2026-05-05&checkoutDate=2026-05-12&childrenAges=&roomCount=1&seed=portal-hotels-search",
        photos: [
          "https://avatars.mds.yandex.net/get-travel-extranet/10263018/2a000001922a919be36e2aeabdfaf41c9bcb/XL",
          "https://avatars.mds.yandex.net/get-travel-extranet/13581732/2a000001922a919979b11c3d06fb6eb5b01e/L",
          "https://avatars.mds.yandex.net/get-travel-extranet/13581732/2a000001922a91b3e89c782be41192cdfa5d/L"
        ]
      },
      {
        name: "Яндекс Путешествия: Вверх",
        coords: [43.875026, 42.699043],
        kind: "housing",
        note: "Дом в аренду в сосновом бору, тишина и приватность.",
        dates: "5-12 мая",
        pricePerNight: "53 690 руб. за 7 ночей",
        rating: "4.9/5",
        reviews: "31 отзыв",
        source: "Яндекс Путешествия",
        bookingUrl: "https://travel.yandex.ru/hotels/kislovodsk/vverkh/?adults=2&checkinDate=2026-05-05&checkoutDate=2026-05-12&childrenAges=&roomCount=1&seed=portal-hotels-search",
        photos: [
          "https://avatars.mds.yandex.net/get-travel-extranet/16132481/2a0000019d1a13ed305c009dabf2c171d2b4/XL",
          "https://avatars.mds.yandex.net/get-travel-extranet/16133006/2a0000019d1a13f07337b4247a740d6e6c6a/L",
          "https://avatars.mds.yandex.net/get-travel-extranet/16132481/2a0000019d1a1412cba7ba25f17015c1954a/L"
        ]
      },
      {
        name: "Яндекс Путешествия: Атмосфера",
        coords: [43.922226, 42.737107],
        kind: "housing",
        note: "Гостевой дом, завтрак включен, парковка на территории.",
        dates: "5-12 мая",
        pricePerNight: "37 158 руб. за 7 ночей",
        rating: "4.9/5",
        reviews: "342 отзыва",
        source: "Яндекс Путешествия",
        bookingUrl: "https://travel.yandex.ru/hotels/kislovodsk/atmosfera/?adults=2&checkinDate=2026-05-05&checkoutDate=2026-05-12&childrenAges=&roomCount=1&seed=portal-hotels-search",
        photos: [
          "https://avatars.mds.yandex.net/get-travel-extranet/15075424/2a0000019d5a2994fe228c0311489b2de107/XL",
          "https://avatars.mds.yandex.net/get-travel-extranet/17966166/2a0000019d5a29971a043519732b9db5aafd/L",
          "https://avatars.mds.yandex.net/get-travel-extranet/17966166/2a0000019d5a2bac130d71d287d54942701b/L"
        ]
      },
      {
        name: "Яндекс Путешествия: Вернисаж-лайн 5*",
        coords: [43.906115, 42.71455],
        kind: "housing",
        note: "Санаторий в центре, с бассейном и SPA.",
        dates: "5-12 мая",
        pricePerNight: "38 808 руб. за 7 ночей",
        rating: "4.6/5",
        reviews: "1696 отзывов",
        source: "Яндекс Путешествия",
        bookingUrl: "https://travel.yandex.ru/hotels/kislovodsk/vernisazh-lain/?adults=2&checkinDate=2026-05-05&checkoutDate=2026-05-12&childrenAges=&roomCount=1",
        photos: [
          "https://avatars.mds.yandex.net/get-travel-extranet/10738510/2a0000019d1c51975568952d9b59820bc2d7/XL",
          "https://avatars.mds.yandex.net/get-travel-extranet/16133006/2a0000019d1c519e7799ab1abc40a269833f/L",
          "https://avatars.mds.yandex.net/get-travel-extranet/17966166/2a0000019d1ba952b0781990f97e1fbc8eff/L"
        ]
      },
      {
        name: "Яндекс Путешествия: Вертебра",
        coords: [43.905494, 42.71729],
        kind: "housing",
        note: "Гостиница в центре у Курортного бульвара.",
        dates: "5-12 мая",
        pricePerNight: "25 200 руб. за 7 ночей",
        rating: "4.9/5",
        reviews: "679 отзывов",
        source: "Яндекс Путешествия",
        bookingUrl: "https://travel.yandex.ru/hotels/kislovodsk/vertebra/?adults=2&checkinDate=2026-05-05&checkoutDate=2026-05-12&childrenAges=&roomCount=1&seed=portal-hotels-search",
        photos: [
          "https://avatars.mds.yandex.net/get-travel-extranet/20158794/2a0000019d1b32715c010fbdbc82cd460aa7/XL",
          "https://avatars.mds.yandex.net/get-travel-extranet/20158794/2a0000019d1b3273b9b8c976e53ed253484b/L",
          "https://avatars.mds.yandex.net/get-travel-extranet/10738510/2a0000019d1b3275a69967296f289143296a/L"
        ]
      },
      {
        name: "Яндекс Путешествия: Мегаполис",
        coords: [43.886452, 42.726237],
        kind: "housing",
        note: "Дом в аренду с большой территорией и зоной отдыха.",
        dates: "5-12 мая",
        pricePerNight: "22 799 руб. за 7 ночей",
        rating: "5.0/5",
        reviews: "91 отзыв",
        source: "Яндекс Путешествия",
        bookingUrl: "https://travel.yandex.ru/hotels/kislovodsk/megapolis/?adults=2&checkinDate=2026-05-05&checkoutDate=2026-05-12&childrenAges=&roomCount=1&seed=portal-hotels-search",
        photos: [
          "https://avatars.mds.yandex.net/get-travel-extranet/20288260/2a0000019d1b651ceb320bb67e648577aab1/XL",
          "https://avatars.mds.yandex.net/get-travel-extranet/16440936/2a0000019d1b651cbb19cd420b4cfe882274/L",
          "https://avatars.mds.yandex.net/get-travel-extranet/20408875/2a0000019d22055d3ad81196525d65bd4592/L"
        ]
      }
    ]
  },
  essentuki: {
    title: "Ессентуки",
    datePlan: "11-13 мая: проживание в Ессентуках.",
    center: [44.0444, 42.8602],
    zoom: 13,
    places: [
      {
        name: "Ессентукская бальнеогрязелечебница (Николаевские ванны)",
        coords: [44.04112, 42.86097],
        kind: "health",
        note: "Историческая бальнеолечебница: процедуры назначаются врачом.",
        procedureType: "Бальнеолечение по назначению",
        visitTime: "45-90 мин",
        bestTime: "По записи",
        dayHint: "День 11-13",
        photos: [
          "https://avatars.mds.yandex.net/get-tycoon/5395686/2a0000017b7d217c7f0eec7eec216871576f/priority-headline-main-narrow",
          "https://static-pano.maps.yandex.ru/v1/?panoid=1329451500_782043223_23_1749579108&size=500%2C240&azimuth=166.1&tilt=10&api_key=maps&signature=3k7q6roeqmY5vasrOZXHln0d7vsbAxKZfVL-wHDdH7Y=",
          "https://avatars.mds.yandex.net/get-tycoon/1534662/2a0000017b8176b182fa73a1b8bcd22c9def/priority-headline-logo"
        ]
      },
      {
        name: "Санаторий \"Источник\"",
        coords: [44.04228, 42.86258],
        kind: "health",
        note: "Акватермальный комплекс в центре Ессентуков рядом с курортным парком.",
        procedureType: "SPA, сауны, бассейн",
        visitTime: "75-120 мин",
        bestTime: "08:00-22:00",
        dayHint: "День 11-13",
        photos: [
          "https://avatars.mds.yandex.net/get-altay/15397479/2a000001961e8f562c74b2d289bce62021ad/S",
          "https://static-pano.maps.yandex.ru/v1/?panoid=1329441417_782040425_23_1732342400&size=500%2C240&azimuth=5.4&tilt=10&api_key=maps&signature=LLBg5LgQ-p27fUPGFJQ0Tw3GNIgdhITJFuFx6oFWAMM=",
          "https://avatars.mds.yandex.net/get-vertis-journal/4471904/Istochnik_sanatoriy.png_1686067977005/845x845"
        ]
      },
      {
        name: "Санаторий \"Истокъ\"",
        coords: [44.04368, 42.86402],
        kind: "health",
        note: "Спа-комплекс в историческом особняке в шаге от курортного парка.",
        procedureType: "Хаммам, массажи, обертывания",
        visitTime: "90 мин",
        bestTime: "08:00-22:00",
        dayHint: "День 11-13",
        photos: [
          "https://avatars.mds.yandex.net/get-altay/758053/2a00000161572a92fb8dc7233e0bf2a5b8b3/L_height",
          "https://avatars.mds.yandex.net/get-vh/3245173/2a00000194d6b203f688f9fbf66256a932ab/smart_crop_516x290",
          "https://avatars.mds.yandex.net/get-altay/3836503/2a000001752111bfef60ee5e4a4822a810e6/L_height"
        ]
      },
      {
        name: "Суворовский термальный источник № 1",
        coords: [44.2069, 42.6515],
        kind: "health",
        note: "Крупный термальный комплекс со взрослым, детским, открытым и закрытым бассейнами.",
        procedureType: "Термальные бассейны",
        visitTime: "60-120 мин",
        bestTime: "09:00-22:00",
        dayHint: "Выезд из Ессентуков",
        photos: [
          "https://avatars.mds.yandex.net/get-altay/10488540/2a00000189e8a5c4c6976a0ecf5f30e7fd06/S",
          "https://static-pano.maps.yandex.ru/v1/?panoid=1328351549_781025084_23_1753750546&size=500%2C240&azimuth=-109.3&tilt=10&api_key=maps&signature=WKtzsIlv3TVwCQPqh17d9n170zcLx6k8jcHn158oMw0=",
          "https://avatars.mds.yandex.net/get-vertis-journal/3934100/Suvorovskiyno1.jpg_1686068267225/845x845"
        ]
      },
      {
        name: "Комплекс \"Жемчужина Кавказа\"",
        coords: [44.2299, 42.0589],
        kind: "health",
        note: "Большой современный комплекс с бассейнами разной температуры, сауной и хаммамом.",
        procedureType: "Термальные бассейны и SPA",
        visitTime: "90-180 мин",
        bestTime: "10:00-22:00",
        dayHint: "Выезд из Ессентуков",
        photos: [
          "https://avatars.mds.yandex.net/get-vh/14331150/2a00000199e95cfe3dd2b29e3f507c7039ed/smart_crop_516x290",
          "https://avatars.mds.yandex.net/get-altay/14193233/2a000001912473e1e59ef2c11d7b20b2c662/L_height",
          "https://avatars.mds.yandex.net/get-altay/10505037/2a000001912473dc07b86dcf96a7c7d20b1e/L_height"
        ]
      },
      {
        name: "Санаторий \"Машук Аква-Терм\"",
        coords: [44.0888, 43.0902],
        kind: "health",
        note: "Комплекс \"Итальянские термы\" с открытыми и закрытыми бассейнами под Железноводском.",
        procedureType: "Термальные бассейны, хаммам, аромасауна",
        visitTime: "120-240 мин",
        bestTime: "10:00-21:00",
        dayHint: "Выезд из Ессентуков",
        photos: [
          "https://avatars.mds.yandex.net/get-altay/5115998/2a0000018f34f1bb63bd79b3e8523cded363/L_height",
          "https://avatars.mds.yandex.net/get-vh/17418840/2a0000019d479ac70d94adda3fcec5a18590/smart_crop_516x290",
          "https://avatars.mds.yandex.net/get-altay/12594487/2a000001909652a84a52f223263bb69d53a6/L_height"
        ]
      }
    ],
    housing: [
      {
        name: "Яндекс Путешествия: Park & House Hotel",
        coords: [44.059421, 42.866209],
        kind: "housing",
        note: "Гостиница рядом с парком и питьевыми галереями.",
        dates: "11-13 мая",
        pricePerNight: "10 400 руб. за 2 ночи",
        rating: "5.0/5",
        reviews: "761 отзыв",
        source: "Яндекс Путешествия",
        bookingUrl: "https://travel.yandex.ru/hotels/essentuky/park-house-hotel/?adults=2&checkinDate=2026-05-11&checkoutDate=2026-05-13&childrenAges=&roomCount=1&seed=portal-hotels-search",
        photos: [
          "https://avatars.mds.yandex.net/get-travel-extranet/20288260/2a0000019d1ea0603dc439edd9b674558b4a/L",
          "https://avatars.mds.yandex.net/get-travel-extranet/19252813/2a0000019d1e76c8ff097161742847900e04/L",
          "https://avatars.mds.yandex.net/get-travel-extranet/16143969/2a0000019d1e76c8ffb8bd8d3e8ac6838bb8/L"
        ]
      },
      {
        name: "Яндекс Путешествия: Эсперо",
        coords: [44.050866, 42.869909],
        kind: "housing",
        note: "Отель в центре, рядом бюветы и парк.",
        dates: "11-13 мая",
        pricePerNight: "10 240 руб. за 2 ночи",
        rating: "4.6/5",
        reviews: "815 отзывов",
        source: "Яндекс Путешествия",
        bookingUrl: "https://travel.yandex.ru/hotels/essentuky/espero/?adults=2&checkinDate=2026-05-11&checkoutDate=2026-05-13&childrenAges=&roomCount=1&seed=portal-hotels-search",
        photos: [
          "https://avatars.mds.yandex.net/get-travel-extranet/20288260/2a0000019d1fab35b78b54850ee824cbf15f/L",
          "https://avatars.mds.yandex.net/get-travel-extranet/20288260/2a0000019d1fab35b79a2858175f595b2c48/L",
          "https://avatars.mds.yandex.net/get-travel-extranet/20408875/2a0000019d207cdb4fe4b182bf64c583e7c3/L"
        ]
      },
      {
        name: "Яндекс Путешествия: Предгорье",
        coords: [44.052443, 42.902926],
        kind: "housing",
        note: "Современный отель, удобен для поездок по КМВ.",
        dates: "11-13 мая",
        pricePerNight: "8 127 руб. за 2 ночи",
        rating: "5.0/5",
        reviews: "676 отзывов",
        source: "Яндекс Путешествия",
        bookingUrl: "https://travel.yandex.ru/hotels/essentuky/predgore-oktiabrskaia-ulitsa/?adults=2&checkinDate=2026-05-11&checkoutDate=2026-05-13&childrenAges=&roomCount=1&seed=portal-hotels-search",
        photos: [
          "https://avatars.mds.yandex.net/get-travel-extranet/19846911/2a0000019d1ea1525dbaa5e3c653f6751aff/L",
          "https://avatars.mds.yandex.net/get-travel-extranet/16143969/2a0000019d1e76e8bfb1b4913e5b6dd7b73c/L",
          "https://avatars.mds.yandex.net/get-travel-extranet/20158794/2a0000019d1ea1525de1bbd09f2b86e59b4c/L"
        ]
      },
      {
        name: "Яндекс Путешествия: Комфорт",
        coords: [44.030146, 42.874307],
        kind: "housing",
        note: "Гостевой дом в Ессентукской, тихий район у парка.",
        dates: "11-13 мая",
        pricePerNight: "5 600 руб. за 2 ночи",
        rating: "5.0/5",
        reviews: "104 отзыва",
        source: "Яндекс Путешествия",
        bookingUrl: "https://travel.yandex.ru/hotels/stavropol-krai/komfort/?adults=2&checkinDate=2026-05-11&checkoutDate=2026-05-13&childrenAges=&roomCount=1&seed=portal-hotels-search",
        photos: [
          "https://avatars.mds.yandex.net/get-travel-extranet/20310193/2a0000019d21baa483873bbdee7cb286fd7a/L",
          "https://avatars.mds.yandex.net/get-travel-extranet/20268021/2a0000019d21baa483a7b6b1e671c5f24e00/L",
          "https://avatars.mds.yandex.net/get-travel-extranet/17966166/2a0000019d21baa483e3bbde365999a07769/L"
        ]
      },
      {
        name: "Яндекс Путешествия: Термальный",
        coords: [44.036614, 42.859318],
        kind: "housing",
        note: "Гостевой дом со SPA и термальной зоной.",
        dates: "11-13 мая",
        pricePerNight: "14 400 руб. за 2 ночи",
        rating: "5.0/5",
        reviews: "705 отзывов",
        source: "Яндекс Путешествия",
        bookingUrl: "https://travel.yandex.ru/hotels/essentuky/termalnyi/?adults=2&checkinDate=2026-05-11&checkoutDate=2026-05-13&childrenAges=&roomCount=1&seed=portal-hotels-search",
        photos: [
          "https://avatars.mds.yandex.net/get-travel-extranet/16143969/2a0000019d162316c7e29ac4bc9771f1aff9/L",
          "https://avatars.mds.yandex.net/get-travel-extranet/16161392/2a0000019d16231cbb20807f772c6e56c745/L",
          "https://avatars.mds.yandex.net/get-travel-extranet/17966166/2a0000019d16231e65f2565afe2f89088657/L"
        ]
      },
      {
        name: "Яндекс Путешествия: Авантаж",
        coords: [44.04977, 42.854472],
        kind: "housing",
        note: "Гостиница недалеко от центра и курортной зоны.",
        dates: "11-13 мая",
        pricePerNight: "10 359 руб. за 2 ночи",
        rating: "4.3/5",
        reviews: "287 отзывов",
        source: "Яндекс Путешествия",
        bookingUrl: "https://travel.yandex.ru/hotels/essentuky/avantazh/?adults=2&checkinDate=2026-05-11&checkoutDate=2026-05-13&childrenAges=&roomCount=1&seed=portal-hotels-search",
        photos: [
          "https://avatars.mds.yandex.net/get-travel-extranet/16132481/2a0000019d16825962c8bd981bc3956c3489/L",
          "https://avatars.mds.yandex.net/get-travel-extranet/16143969/2a0000019d16825cced06412bc464fecb56e/L",
          "https://avatars.mds.yandex.net/get-travel-extranet/16161392/2a0000019d168263fec31b6ab9a1ad2688e4/L"
        ]
      }
    ]
  }
};

cityData.kislovodsk.places = [
  {
    name: "Гора Малое Седло 1325 м",
    coords: [43.885328, 42.767479],
    kind: "route",
    note: "Единственная достопримечательность Кисловодска на карте по вашему запросу.",
    routeType: "Природная достопримечательность",
    visitTime: "60-120 мин",
    bestTime: "День",
    dayHint: "Кисловодск",
    mapUrl: "https://yandex.ru/maps/org/gora_maloye_sedlo_1325_m/201170928739/",
    photos: [
      "https://avatars.mds.yandex.net/get-vh/13303071/2a00000199fb7e85ca3136f3a26c1434b5cc/orig",
      "https://avatars.mds.yandex.net/get-vh/13740974/2a00000197b7fafc2c41778a8636032ab111/orig",
      "https://avatars.mds.yandex.net/get-vh/5278262/2a0000019111871a072b21cacfd16e72c4c0/orig"
    ]
  },
  {
    name: "Скала Замок",
    coords: [43.885913, 42.767389],
    kind: "route",
    note: "Горная вершина: Ставропольский край, Кисловодск, Кисловодский национальный парк.",
    routeType: "Горная вершина",
    visitTime: "30-60 мин",
    bestTime: "День",
    dayHint: "Кисловодск",
    mapUrl: "https://yandex.ru/maps/org/skala_zamok/99142338165/",
    photos: [
      "https://avatars.mds.yandex.net/get-altay/6322664/2a0000018fee72fba054de6e41d4e885b0ae/orig",
      "https://avatars.mds.yandex.net/get-vh/5109306/2a00000191ae9ac43dd52fd916d7a0d267d6/orig",
      "https://static-pano.maps.yandex.ru/v1/?panoid=1328859377_783407451_23_1686391990&size=500%2C240&azimuth=-0.9&tilt=10&api_key=maps&signature=6jBKF0gD8FG584gHRxs2mzJx54OEdWZECL2nrGsXs_E="
    ]
  },
  {
    name: "Скала Человек",
    coords: [43.888966, 42.75413],
    kind: "route",
    note: "Горная вершина: Ставропольский край, Кисловодск, Кисловодский национальный парк.",
    routeType: "Горная вершина",
    visitTime: "30-60 мин",
    bestTime: "День",
    dayHint: "Кисловодск",
    mapUrl: "https://yandex.ru/maps/org/skala_chelovek/101380776544/",
    photos: [
      "https://avatars.mds.yandex.net/get-vh/20337455/2a0000019d908b86f0095942008fac9c3191/orig",
      "https://avatars.mds.yandex.net/get-vh/13749859/2a000001977a93f16bc2638b9c210dc74c91/orig",
      "https://avatars.mds.yandex.net/get-vh/15059138/2a000001999fb9f781772f62598819c7ebe1/orig"
    ]
  },
  {
    name: "Храм воздуха",
    coords: [43.896172, 42.740535],
    kind: "route",
    note: "Популярная обзорная площадка Кисловодского национального парка.",
    routeType: "Смотровая точка",
    visitTime: "20-40 мин",
    bestTime: "Светлое время дня",
    dayHint: "Кисловодск",
    mapUrl: "https://yandex.ru/maps/?text=%D0%A5%D1%80%D0%B0%D0%BC%20%D0%B2%D0%BE%D0%B7%D0%B4%D1%83%D1%85%D0%B0%20%D0%9A%D0%B8%D1%81%D0%BB%D0%BE%D0%B2%D0%BE%D0%B4%D1%81%D0%BA",
    photos: [
      "https://static-pano.maps.yandex.ru/v1/?panoid=1328676222_783309180_23_1749046036&size=500%2C240&azimuth=-57.7&tilt=10&api_key=maps&signature=KHhTC4yrYwZXg1zWMCWZ0lbP-daHcrg3HDG7183GEDU=",
      "https://avatars.mds.yandex.net/get-altay/4379646/2a000001904b5ed78f85c4804e49167ebf38/L_height",
      "https://avatars.mds.yandex.net/get-vh/15386257/2a00000198bd744a4ef91065782d16dfc60e/smart_crop_516x290"
    ]
  },
  {
    name: "Микрогородок",
    coords: [43.893358, 42.760487],
    kind: "route",
    note: "Достопримечательность: Ставропольский край, Кисловодск, Кисловодский национальный парк.",
    routeType: "Достопримечательность",
    visitTime: "20-40 мин",
    bestTime: "День",
    dayHint: "Кисловодск",
    mapUrl: "https://yandex.ru/maps/?text=%D0%9C%D0%B8%D0%BA%D1%80%D0%BE%D0%B3%D0%BE%D1%80%D0%BE%D0%B4%D0%BE%D0%BA%20%D0%9A%D0%B8%D1%81%D0%BB%D0%BE%D0%B2%D0%BE%D0%B4%D1%81%D0%BA%20%D0%9A%D0%B8%D1%81%D0%BB%D0%BE%D0%B2%D0%BE%D0%B4%D1%81%D0%BA%D0%B8%D0%B9%20%D0%BD%D0%B0%D1%86%D0%B8%D0%BE%D0%BD%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9%20%D0%BF%D0%B0%D1%80%D0%BA",
    photos: [
      "https://avatars.mds.yandex.net/get-altay/10175550/2a0000018bbf77abc6794fe3566d3be73fd2/orig",
      "https://avatars.mds.yandex.net/get-altay/7186075/2a00000184661e99c7d0eb4d0500d0d8fc2c/orig",
      "https://avatars.mds.yandex.net/get-altay/4437253/2a0000017afbdfeaa31288ffa1347292d754/orig"
    ]
  },
  {
    name: "Скульптурная форма в природном гроте Хозяин гор",
    coords: [43.894755, 42.755783],
    kind: "route",
    note: "Жанровая скульптура: Ставропольский край, городской округ Кисловодск. Точка привязана к ближайшему подтвержденному месту на тропе Косыгина.",
    routeType: "Жанровая скульптура",
    visitTime: "20-40 мин",
    bestTime: "День",
    dayHint: "Кисловодск",
    mapUrl: "https://yandex.ru/maps/org/skulpturnaya_forma_v_prirodnom_grote_khozyain_gor/231974339539/",
    photos: [
      "https://avatars.mds.yandex.net/get-altay/6528051/2a00000188af96250d1b30607d014b0db197/orig",
      "https://avatars.mds.yandex.net/get-altay/7021598/2a00000187db0fa1195f227b0d145f5091e5/orig",
      "https://avatars.mds.yandex.net/get-altay/15231053/2a00000196ba35b850135755b6acc4f191fa/orig"
    ]
  },
  {
    name: "Природные гроты",
    coords: [43.897948, 42.755096],
    kind: "route",
    note: "Природная достопримечательность в Кисловодском национальном парке.",
    routeType: "Природа",
    visitTime: "30-60 мин",
    bestTime: "День",
    dayHint: "Кисловодск",
    mapUrl: "https://yandex.ru/maps/?ll=42.755096%2C43.897948&z=16",
    photos: [
      "https://avatars.mds.yandex.net/get-altay/10175550/2a0000018bbf77abc6794fe3566d3be73fd2/orig",
      "https://avatars.mds.yandex.net/get-altay/7186075/2a00000184661e99c7d0eb4d0500d0d8fc2c/orig",
      "https://avatars.mds.yandex.net/get-altay/4437253/2a0000017afbdfeaa31288ffa1347292d754/orig"
    ]
  },
  {
    name: "Долина роз",
    coords: [43.895481, 42.73863],
    kind: "route",
    note: "Одна из самых популярных природных локаций Кисловодского национального парка.",
    routeType: "Природа",
    visitTime: "40-90 мин",
    bestTime: "День",
    dayHint: "Кисловодск",
    mapUrl: "https://yandex.ru/maps/?ll=42.738630%2C43.895481&z=16",
    photos: [
      "https://avatars.mds.yandex.net/get-altay/4379646/2a000001904b5ed78f85c4804e49167ebf38/L_height",
      "https://avatars.mds.yandex.net/get-vh/15386257/2a00000198bd744a4ef91065782d16dfc60e/smart_crop_516x290",
      "https://avatars.mds.yandex.net/get-altay/13590061/2a0000019044d724a0ea547f99bfab281236/L_height"
    ]
  },
  {
    name: "Березовые нарзаны",
    coords: [43.849738, 42.644959],
    kind: "route",
    note: "Природная локация в районе Кисловодска.",
    routeType: "Природа",
    visitTime: "30-60 мин",
    bestTime: "День",
    dayHint: "Кисловодск",
    mapUrl: "https://yandex.ru/maps/?ll=42.644959%2C43.849738&z=15",
    photos: [
      "https://avatars.mds.yandex.net/get-altay/10175550/2a0000018bbf77abc6794fe3566d3be73fd2/orig",
      "https://avatars.mds.yandex.net/get-altay/7186075/2a00000184661e99c7d0eb4d0500d0d8fc2c/orig",
      "https://avatars.mds.yandex.net/get-altay/4437253/2a0000017afbdfeaa31288ffa1347292d754/orig"
    ]
  },
  {
    name: "Золотые водопады",
    coords: [43.837492, 42.621632],
    kind: "route",
    note: "Природная достопримечательность в окрестностях Кисловодска.",
    routeType: "Водопад",
    visitTime: "40-90 мин",
    bestTime: "День",
    dayHint: "Кисловодск",
    mapUrl: "https://yandex.ru/maps/?ll=42.621632%2C43.837492&z=15",
    photos: [
      "https://avatars.mds.yandex.net/get-altay/10175550/2a0000018bbf77abc6794fe3566d3be73fd2/orig",
      "https://avatars.mds.yandex.net/get-altay/7186075/2a00000184661e99c7d0eb4d0500d0d8fc2c/orig",
      "https://avatars.mds.yandex.net/get-altay/4437253/2a0000017afbdfeaa31288ffa1347292d754/orig"
    ]
  },
  {
    name: "Смотровая площадка",
    coords: [43.857338, 42.651398],
    kind: "route",
    note: "Видовая точка в окрестностях Кисловодска.",
    routeType: "Смотровая точка",
    visitTime: "20-40 мин",
    bestTime: "День",
    dayHint: "Кисловодск",
    mapUrl: "https://yandex.ru/maps/?ll=42.651398%2C43.857338&z=15",
    photos: [
      "https://avatars.mds.yandex.net/get-vh/13303071/2a00000199fb7e85ca3136f3a26c1434b5cc/orig",
      "https://avatars.mds.yandex.net/get-vh/13740974/2a00000197b7fafc2c41778a8636032ab111/orig",
      "https://avatars.mds.yandex.net/get-vh/5278262/2a0000019111871a072b21cacfd16e72c4c0/orig"
    ]
  },
  {
    name: "Пещера",
    coords: [43.87322, 42.634864],
    kind: "route",
    note: "Природная пещера в окрестностях Кисловодска.",
    routeType: "Пещера",
    visitTime: "30-60 мин",
    bestTime: "День",
    dayHint: "Кисловодск",
    mapUrl: "https://yandex.ru/maps/?ll=42.634864%2C43.873220&z=15",
    photos: [
      "https://avatars.mds.yandex.net/get-altay/10175550/2a0000018bbf77abc6794fe3566d3be73fd2/orig",
      "https://avatars.mds.yandex.net/get-altay/7186075/2a00000184661e99c7d0eb4d0500d0d8fc2c/orig",
      "https://avatars.mds.yandex.net/get-altay/4437253/2a0000017afbdfeaa31288ffa1347292d754/orig"
    ]
  },
  {
    name: "Березовское ущелье",
    coords: [43.884809, 42.698391],
    kind: "route",
    note: "Точка маршрута по Березовскому ущелью.",
    routeType: "Ущелье",
    visitTime: "20-40 мин",
    bestTime: "День",
    dayHint: "Кисловодск",
    mapUrl: "https://yandex.ru/maps/?ll=42.698391%2C43.884809&z=16",
    photos: [
      "https://avatars.mds.yandex.net/get-altay/10175550/2a0000018bbf77abc6794fe3566d3be73fd2/orig",
      "https://avatars.mds.yandex.net/get-altay/7186075/2a00000184661e99c7d0eb4d0500d0d8fc2c/orig",
      "https://avatars.mds.yandex.net/get-altay/4437253/2a0000017afbdfeaa31288ffa1347292d754/orig"
    ]
  },
  {
    name: "Скальный сектор мыши",
    coords: [43.886022, 42.700412],
    kind: "route",
    note: "Скальный участок маршрута в районе Березовского ущелья.",
    routeType: "Скальный сектор",
    visitTime: "20-40 мин",
    bestTime: "День",
    dayHint: "Кисловодск",
    mapUrl: "https://yandex.ru/maps/?ll=42.700412%2C43.886022&z=16",
    photos: [
      "https://avatars.mds.yandex.net/get-altay/10175550/2a0000018bbf77abc6794fe3566d3be73fd2/orig",
      "https://avatars.mds.yandex.net/get-altay/7186075/2a00000184661e99c7d0eb4d0500d0d8fc2c/orig",
      "https://avatars.mds.yandex.net/get-altay/4437253/2a0000017afbdfeaa31288ffa1347292d754/orig"
    ]
  },
  {
    name: "Скала черепаха",
    coords: [43.891425, 42.707743],
    kind: "route",
    note: "Скальная видовая точка на тропе маршрута.",
    routeType: "Скала",
    visitTime: "20-40 мин",
    bestTime: "День",
    dayHint: "Кисловодск",
    mapUrl: "https://yandex.ru/maps/?ll=42.707743%2C43.891425&z=16",
    photos: [
      "https://avatars.mds.yandex.net/get-altay/10175550/2a0000018bbf77abc6794fe3566d3be73fd2/orig",
      "https://avatars.mds.yandex.net/get-altay/7186075/2a00000184661e99c7d0eb4d0500d0d8fc2c/orig",
      "https://avatars.mds.yandex.net/get-altay/4437253/2a0000017afbdfeaa31288ffa1347292d754/orig"
    ]
  },
  {
    name: "Водопад",
    coords: [43.893567, 42.711672],
    kind: "route",
    note: "Финальная точка маршрута по ущелью.",
    routeType: "Водопад",
    visitTime: "30-60 мин",
    bestTime: "День",
    dayHint: "Кисловодск",
    mapUrl: "https://yandex.ru/maps/?ll=42.711672%2C43.893567&z=16",
    photos: [
      "https://avatars.mds.yandex.net/get-altay/10175550/2a0000018bbf77abc6794fe3566d3be73fd2/orig",
      "https://avatars.mds.yandex.net/get-altay/7186075/2a00000184661e99c7d0eb4d0500d0d8fc2c/orig",
      "https://avatars.mds.yandex.net/get-altay/4437253/2a0000017afbdfeaa31288ffa1347292d754/orig"
    ]
  }
];

const markerPresetByKind = {
  route: "islands#blueIcon",
  health: "islands#greenIcon",
  housing: "islands#orangeIcon"
};

const PHOTO_VARIANTS_PER_ITEM = 3;

const PHOTO_POOLS = {
  route: [
    "https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?auto=compress&cs=tinysrgb&w=640&h=360&dpr=1",
    "https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=640&h=360&dpr=1",
    "https://images.pexels.com/photos/210186/pexels-photo-210186.jpeg?auto=compress&cs=tinysrgb&w=640&h=360&dpr=1",
    "https://images.pexels.com/photos/1005417/pexels-photo-1005417.jpeg?auto=compress&cs=tinysrgb&w=640&h=360&dpr=1",
    "https://images.pexels.com/photos/35600/road-sun-rays-path.jpg?auto=compress&cs=tinysrgb&w=640&h=360&dpr=1",
    "https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=640&h=360&dpr=1"
  ],
  health: [
    "https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=640&h=360&dpr=1",
    "https://images.pexels.com/photos/6621466/pexels-photo-6621466.jpeg?auto=compress&cs=tinysrgb&w=640&h=360&dpr=1",
    "https://images.pexels.com/photos/6621467/pexels-photo-6621467.jpeg?auto=compress&cs=tinysrgb&w=640&h=360&dpr=1",
    "https://images.pexels.com/photos/4587959/pexels-photo-4587959.jpeg?auto=compress&cs=tinysrgb&w=640&h=360&dpr=1",
    "https://images.pexels.com/photos/7755474/pexels-photo-7755474.jpeg?auto=compress&cs=tinysrgb&w=640&h=360&dpr=1",
    "https://images.pexels.com/photos/3738341/pexels-photo-3738341.jpeg?auto=compress&cs=tinysrgb&w=640&h=360&dpr=1"
  ],
  housing: [
    "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=640&h=360&dpr=1",
    "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=640&h=360&dpr=1",
    "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=640&h=360&dpr=1",
    "https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=640&h=360&dpr=1",
    "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=640&h=360&dpr=1",
    "https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg?auto=compress&cs=tinysrgb&w=640&h=360&dpr=1",
    "https://images.pexels.com/photos/2034335/pexels-photo-2034335.jpeg?auto=compress&cs=tinysrgb&w=640&h=360&dpr=1",
    "https://images.pexels.com/photos/1838554/pexels-photo-1838554.jpeg?auto=compress&cs=tinysrgb&w=640&h=360&dpr=1"
  ]
};

const FALLBACK_IMAGE =
  "https://placehold.co/640x360/e2e8f0/334155?text=%D0%A4%D0%BE%D1%82%D0%BE+%D0%B2%D1%80%D0%B5%D0%BC%D0%B5%D0%BD%D0%BD%D0%BE+%D0%BD%D0%B5%D0%B4%D0%BE%D1%81%D1%82%D1%83%D0%BF%D0%BD%D0%BE";

const cityMeta = {
  kislovodsk: {
    cityName: "Кисловодск",
    checkinDate: "2026-05-05",
    checkoutDate: "2026-05-11"
  },
  essentuki: {
    cityName: "Ессентуки",
    checkinDate: "2026-05-11",
    checkoutDate: "2026-05-13"
  }
};

const cityRouteTracks = {
  kislovodsk: [
    {
      id: "kisl-route-1",
      title: "Маршрут №1: Экспресс-визит",
      length: "1,3 км",
      duration: "1 час",
      difficulty: "Легкий",
      color: "#0ea5e9",
      pointNames: [
        "Нарзанная галерея",
        "Колоннада",
        "Грот Демона",
        "Цветочный календарь",
        "Беседка \"Стеклянная струя\"",
        "Мостик \"Дамский каприз\""
      ]
    },
    {
      id: "kisl-route-2",
      title: "Маршрут №2: Главные достопримечательности",
      length: "8,6 км",
      duration: "3 часа",
      difficulty: "Средний",
      color: "#f97316",
      pointNames: [
        "Нарзанная галерея",
        "Беседка \"Стеклянная струя\"",
        "Царская площадка",
        "Красные камни",
        "Долина роз",
        "Канатная дорога в парке",
        "Беседка \"Семь ветров\"",
        "Гора Красное Солнышко",
        "Каскадная лестница"
      ]
    },
    {
      id: "kisl-route-3",
      title: "Маршрут №3: Для максималистов",
      length: "15 км",
      duration: "6 часов",
      difficulty: "Сложный",
      color: "#dc2626",
      pointNames: [
        "Гора Красное Солнышко",
        "Беседка \"Семь ветров\"",
        "Гора Малое Седло",
        "Тропа Косыгина",
        "Скала Человек",
        "Долина роз"
      ]
    },
    {
      id: "kisl-route-4",
      title: "Маршрут №4: Березовская балка и Золотые водопады",
      length: "до 26 км (туда-обратно)",
      duration: "6-8 часов",
      difficulty: "Средний",
      color: "#16a34a",
      pointNames: [
        "Вход в Березовскую балку (Березовская, 34)",
        "Березовское ущелье (верхний участок)",
        "Березовское ущелье (средний участок)",
        "Элькуш (старт альтернативного спуска)",
        "Кичи-Балык (дорога к водопадам)"
      ]
    },
    {
      id: "kisl-route-5",
      title: "Маршрут №5: Ольховская балка (Лермонтовские места)",
      length: "до 10 км",
      duration: "3-4 часа",
      difficulty: "Легкий",
      color: "#7c3aed",
      pointNames: [
        "Посёлок Нарзанный",
        "Лермонтовская скала",
        "Лермонтовский водопад",
        "Беседка \"Стеклянная струя\""
      ]
    },
    {
      id: "kisl-route-6",
      title: "Маршрут №6: Спящая красавица и Подкумский провал",
      length: "8-12 км",
      duration: "4-6 часов",
      difficulty: "Средний",
      color: "#ca8a04",
      pointNames: [
        "Станция Подкумок",
        "Пещера Подкумский провал",
        "Боргустанский хребет (смотровая)",
        "Станция Подкумок"
      ]
    }
  ]
};

cityRouteTracks.kislovodsk = [
  {
    id: "kisl-custom-route-1",
    title: "Маршрут A: Парк, гроты и скалы (без возвратов)",
    length: "4,0 км",
    duration: "1 ч - 1 ч 25 мин",
    difficulty: "Средний",
    color: "#0ea5e9",
    pointNames: [
      "Гора Малое Седло 1325 м",
      "Скала Замок",
      "Скала Человек",
      "Микрогородок",
      "Скульптурная форма в природном гроте Хозяин гор",
      "Природные гроты",
      "Храм воздуха",
      "Долина роз"
    ]
  },
  {
    id: "kisl-custom-route-2",
    title: "Маршрут B: Нарзаны, пещера и водопады (без возвратов)",
    length: "5,5 км",
    duration: "1 ч 20 мин - 1 ч 50 мин",
    difficulty: "Средний",
    color: "#f97316",
    pointNames: [
      "Золотые водопады",
      "Березовые нарзаны",
      "Смотровая площадка",
      "Пещера"
    ]
  },
  {
    id: "kisl-custom-route-3",
    title: "Маршрут C: Березовское ущелье",
    length: "1,5 км",
    duration: "25-35 мин",
    difficulty: "Легкий",
    color: "#22c55e",
    pointNames: [
      "Березовское ущелье",
      "Скальный сектор мыши",
      "Скала черепаха",
      "Водопад"
    ]
  }
];

let mapInstance;
let currentCityKey = "kislovodsk";
let activeObjects = [];
let activeTrackObjects = [];
let activeKinds = new Set(["route", "health", "housing"]);
let activeRouteTrackIds = new Set();
const PRIMARY_HOTEL_NAME = "Яндекс Путешествия: Вверх";
let showOtherHotels = false;

function isPrimaryHotel(item) {
  return item.kind === "housing" && item.name === PRIMARY_HOTEL_NAME;
}

function stripProviderPrefix(name) {
  return name.replace(/^(Yandex Travel|Яндекс Путешествия):\s*/u, "").trim();
}

function buildSpecificHotelUrl(item) {
  const meta = cityMeta[item.cityKey] || {
    cityName: "",
    checkinDate: "2026-05-05",
    checkoutDate: "2026-05-13"
  };

  const searchText = encodeURIComponent(`${stripProviderPrefix(item.name)} ${meta.cityName}`);
  return `https://travel.yandex.ru/hotels/?adults=2&checkinDate=${meta.checkinDate}&checkoutDate=${meta.checkoutDate}&searchText=${searchText}`;
}

function normalizePhotoQuery(text) {
  return text
    .toLowerCase()
    .replace(/[№]/g, "number")
    .replace(/[^a-zа-я0-9\s-]/giu, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function buildPhotoQuery(item, cityName) {
  const baseName = item.kind === "housing" ? stripProviderPrefix(item.name) : item.name;
  const categoryHint = item.kind === "housing" ? "hotel exterior" : item.kind === "health" ? "spa spring" : "landmark park";
  return normalizePhotoQuery(`${baseName} ${cityName} ${categoryHint}`);
}

function hashString(value) {
  let hash = 0;
  for (let i = 0; i < value.length; i += 1) {
    hash = (hash << 5) - hash + value.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

function createItemPhotoSet(item, cityName, itemIndex) {
  const pool = PHOTO_POOLS[item.kind] || PHOTO_POOLS.route;
  const seed = hashString(`${buildPhotoQuery(item, cityName)}-${itemIndex}`);

  return Array.from({ length: PHOTO_VARIANTS_PER_ITEM }, (_, photoIndex) => {
    const idx = (seed + photoIndex) % pool.length;
    return pool[idx];
  });
}

function enrichItemsWithPhotos() {
  Object.entries(cityData).forEach(([cityKey, city]) => {
    const cityName = cityMeta[cityKey]?.cityName || city.title;

    city.places.forEach((item, index) => {
      item.cityKey = cityKey;
      const primaryPhotos = Array.isArray(item.photos) ? item.photos : [];
      const backupPhotos = createItemPhotoSet(item, cityName, index);
      item.photos = [...new Set([...primaryPhotos, ...backupPhotos])].slice(0, PHOTO_VARIANTS_PER_ITEM);
    });

    city.housing.forEach((item, index) => {
      item.cityKey = cityKey;
      if (!Array.isArray(item.photos) || item.photos.length === 0) {
        item.photos = createItemPhotoSet(item, cityName, city.places.length + index);
      }
    });
  });
}

function buildPhotoGallery(item) {
  const photos = item.photos || [];
  if (photos.length === 0) {
    return "";
  }

  const photoCards = photos.slice(0, 3).map((src, index) => {
    return `<img src="${src}" alt="${item.name} фото ${index + 1}" style="width:100%;height:92px;object-fit:cover;border-radius:8px;" onerror="if(!this.dataset.fallback){this.dataset.fallback='1';this.src='${FALLBACK_IMAGE}';}else{this.style.display='none';}">`;
  });

  return `<div style="display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:6px;margin-bottom:8px;">${photoCards.join("")}</div>`;
}

function applyFilterKinds(kinds, filterInputs) {
  const nextKinds = new Set(kinds);
  filterInputs.forEach((input) => {
    input.checked = nextKinds.has(input.dataset.filterKind);
  });

  activeKinds = nextKinds;
  renderMap(currentCityKey);
}

function getFilteredItems(city) {
  return [...city.places, ...city.housing].filter((item) => {
    if (!activeKinds.has(item.kind)) {
      return false;
    }

    if (item.kind !== "housing") {
      return true;
    }

    if (currentCityKey !== "kislovodsk") {
      return true;
    }

    if (isPrimaryHotel(item)) {
      return true;
    }

    return showOtherHotels;
  });
}

function createPlacemark(item) {
  const typeLabel = item.kind === "housing" ? "Жилье" : item.kind === "health" ? "Оздоровление" : "Маршрут";
  const coordsText = `${item.coords[0].toFixed(5)}, ${item.coords[1].toFixed(5)}`;

  const details = [
    buildPhotoGallery(item),
    `<div><strong>Категория:</strong> ${typeLabel}</div>`,
    `<div><strong>Описание:</strong> ${item.note}</div>`,
    `<div><strong>Координаты:</strong> ${coordsText}</div>`
  ];

  if (item.kind === "housing") {
    const bookingLink = item.bookingUrl || buildSpecificHotelUrl(item);
    details.push(`<div><strong>Даты:</strong> ${item.dates || "5-13 мая"}</div>`);
    details.push(`<div><strong>Цена:</strong> ${item.pricePerNight || "уточняется"}</div>`);
    details.push(`<div><strong>Рейтинг:</strong> ${item.rating || "н/д"} (${item.reviews || "без отзывов"})</div>`);
    details.push(`<div><strong>Источник:</strong> ${item.source || "Яндекс Путешествия"}</div>`);
    details.push(`<div><a href="${bookingLink}" target="_blank" rel="noopener noreferrer">Открыть отель в Яндекс Путешествиях</a></div>`);
  } else if (item.kind === "health") {
    details.push(`<div><strong>Процедура:</strong> ${item.procedureType || "оздоровление"}</div>`);
    details.push(`<div><strong>Лучшее время:</strong> ${item.bestTime || "в любое время"}</div>`);
    details.push(`<div><strong>Длительность:</strong> ${item.visitTime || "30-60 мин"}</div>`);
    details.push(`<div><strong>День маршрута:</strong> ${item.dayHint || "по плану"}</div>`);
  } else {
    details.push(`<div><strong>Формат:</strong> ${item.routeType || "прогулка"}</div>`);
    details.push(`<div><strong>Лучшее время:</strong> ${item.bestTime || "днем"}</div>`);
    details.push(`<div><strong>Длительность:</strong> ${item.visitTime || "60-120 мин"}</div>`);
    details.push(`<div><strong>День маршрута:</strong> ${item.dayHint || "по плану"}</div>`);
  }

  if (item.mapUrl) {
    details.push(`<div><a href="${item.mapUrl}" target="_blank" rel="noopener noreferrer">Открыть карточку в Яндекс Картах</a></div>`);
  }

  return new ymaps.Placemark(
    item.coords,
    {
      hintContent: item.name,
      balloonContentHeader: item.name,
      balloonContentBody: `<div style="font-size: 14px; line-height: 1.45; display: grid; gap: 4px;">${details.join("")}</div>`,
      balloonContentFooter: typeLabel
    },
    {
      preset: markerPresetByKind[item.kind] || "islands#redIcon"
    }
  );
}

function renderList(city) {
  const itineraryList = document.getElementById("itinerary-list");
  const cityTitle = document.getElementById("city-title");
  const datePlan = document.getElementById("date-plan");

  cityTitle.textContent = city.title;
  datePlan.textContent = city.datePlan;

  itineraryList.innerHTML = "";

  fullTripPlan.forEach((step) => {
    const li = document.createElement("li");
    li.textContent = step;
    itineraryList.appendChild(li);
  });
}

function getCityRouteTracks(cityKey) {
  return cityRouteTracks[cityKey] || [];
}

function setDefaultRouteTrackSelection(cityKey) {
  const tracks = getCityRouteTracks(cityKey);
  if (tracks.length === 0) {
    activeRouteTrackIds = new Set();
    return;
  }

  activeRouteTrackIds = new Set();
}

function getCoordsByPlaceName(city) {
  const coordsByName = new Map();
  city.places.forEach((place) => {
    coordsByName.set(place.name, place.coords);
  });
  return coordsByName;
}

function getTrackCoords(track, city) {
  const coordsByName = getCoordsByPlaceName(city);
  return track.pointNames.map((pointName) => coordsByName.get(pointName)).filter((coords) => Array.isArray(coords));
}

function renderRouteTrackLegend(cityKey) {
  const container = document.getElementById("route-tracks");
  if (!container) {
    return;
  }

  const tracks = getCityRouteTracks(cityKey);
  if (tracks.length === 0) {
    container.innerHTML = '<p class="route-tracks-empty">Для этого города треки маршрутов пока не заданы.</p>';
    return;
  }

  container.innerHTML = tracks
    .map((track) => {
      const isActive = activeRouteTrackIds.has(track.id) ? "is-active" : "";
      const safeTitle = track.title.replace(/"/g, "&quot;");
      return `
        <button type="button" class="route-track-btn ${isActive}" data-track-id="${track.id}" style="border-left-color:${track.color};">
          <span class="route-track-title">${safeTitle}</span>
          <span class="route-track-meta">${track.length} • ${track.duration} • ${track.difficulty}</span>
        </button>
      `;
    })
    .join("");
}

function renderRouteTracks(cityKey, city) {
  activeTrackObjects.forEach((geoObject) => mapInstance.geoObjects.remove(geoObject));
  activeTrackObjects = [];

  const tracks = getCityRouteTracks(cityKey).filter((track) => activeRouteTrackIds.has(track.id));
  tracks.forEach((track) => {
    const coords = getTrackCoords(track, city);
    if (coords.length < 2) {
      return;
    }

    const multiRoute = new ymaps.multiRouter.MultiRoute(
      {
        referencePoints: coords,
        params: {
          routingMode: "pedestrian"
        }
      },
      {
        boundsAutoApply: false,
        wayPointVisible: false,
        viaPointVisible: false,
        routeActiveStrokeColor: track.color,
        routeActiveStrokeWidth: 5,
        routeActiveStrokeOpacity: 0.85,
        routeStrokeColor: track.color,
        routeStrokeWidth: 5,
        routeStrokeOpacity: 0.75
      }
    );

    multiRoute.properties.set({
      hintContent: track.title,
      balloonContent: `${track.title}<br>${track.length}, ${track.duration}, ${track.difficulty}`
    });

    mapInstance.geoObjects.add(multiRoute);
    activeTrackObjects.push(multiRoute);
  });
}

function getActiveTrackPoints(cityKey, city) {
  const tracks = getCityRouteTracks(cityKey).filter((track) => activeRouteTrackIds.has(track.id));
  return tracks.flatMap((track) => getTrackCoords(track, city));
}

function renderMap(cityKey) {
  const city = cityData[cityKey];
  if (!city || !mapInstance) {
    return;
  }

  const filteredItems = getFilteredItems(city);

  activeObjects.forEach((geoObject) => mapInstance.geoObjects.remove(geoObject));
  activeObjects = [];

  const objects = filteredItems.map((item) => createPlacemark(item));
  objects.forEach((obj) => mapInstance.geoObjects.add(obj));
  activeObjects = objects;

  renderRouteTrackLegend(cityKey);
  renderRouteTracks(cityKey, city);

  const visibleInterestItems = filteredItems.filter(
    (item) => item.kind === "route" || item.kind === "health" || item.kind === "housing"
  );
  const interestItems = visibleInterestItems.length > 0 ? visibleInterestItems : [...city.places, ...city.housing];
  const trackPoints = getActiveTrackPoints(cityKey, city);
  const boundsPoints = [...interestItems.map((item) => item.coords), ...trackPoints];

  if (boundsPoints.length > 0) {
    const bounds = ymaps.util.bounds.fromPoints(boundsPoints);
    mapInstance.setBounds(bounds, {
      checkZoomRange: true,
      zoomMargin: [24, 24, 24, 24],
      duration: 300
    });
  } else {
    mapInstance.setCenter(city.center, city.zoom, {
      duration: 300
    });
  }

  renderList(city);
}

function switchTab(nextCityKey) {
  currentCityKey = nextCityKey;
  setDefaultRouteTrackSelection(nextCityKey);
  document.querySelectorAll(".tab-btn").forEach((button) => {
    const isActive = button.dataset.city === nextCityKey;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-selected", String(isActive));
  });

  renderMap(nextCityKey);
}

function initFilters() {
  const filterInputs = document.querySelectorAll("input[data-filter-kind]");
  filterInputs.forEach((input) => {
    input.addEventListener("change", () => {
      const checkedKinds = [...filterInputs]
        .filter((node) => node.checked)
        .map((node) => node.dataset.filterKind);

      applyFilterKinds(checkedKinds, filterInputs);
    });
  });

  document.querySelectorAll("button[data-filter-action]").forEach((button) => {
    button.addEventListener("click", () => {
      const action = button.dataset.filterAction;
      if (action === "all") {
        applyFilterKinds(["route", "health", "housing"], filterInputs);
      } else if (action === "route") {
        applyFilterKinds(["route"], filterInputs);
      } else if (action === "housing") {
        applyFilterKinds(["housing"], filterInputs);
      } else if (action === "health") {
        applyFilterKinds(["health"], filterInputs);
      }
    });
  });
}

function initTabs() {
  document.querySelectorAll(".tab-btn").forEach((button) => {
    button.addEventListener("click", () => {
      if (button.dataset.city === currentCityKey) {
        return;
      }
      switchTab(button.dataset.city);
    });
  });
}

function initHotelToggle() {
  const toggleButton = document.getElementById("toggle-other-hotels");
  if (!toggleButton) {
    return;
  }

  toggleButton.addEventListener("click", () => {
    showOtherHotels = !showOtherHotels;
    toggleButton.setAttribute("aria-pressed", String(showOtherHotels));
    renderMap(currentCityKey);
  });
}

function initRouteTrackLegend() {
  const container = document.getElementById("route-tracks");
  const legend = document.querySelector(".route-legend");

  if (!container || !legend) {
    return;
  }

  legend.addEventListener("click", (event) => {
    const actionButton = event.target.closest("button[data-route-track-action]");
    if (!actionButton) {
      return;
    }

    const action = actionButton.dataset.routeTrackAction;
    const tracks = getCityRouteTracks(currentCityKey);
    if (action === "all") {
      activeRouteTrackIds = new Set(tracks.map((track) => track.id));
    } else if (action === "none") {
      activeRouteTrackIds = new Set();
    }

    renderMap(currentCityKey);
  });

  container.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-track-id]");
    if (!button) {
      return;
    }

    const trackId = button.dataset.trackId;
    if (activeRouteTrackIds.has(trackId)) {
      activeRouteTrackIds.delete(trackId);
    } else {
      activeRouteTrackIds.add(trackId);
    }

    renderMap(currentCityKey);
  });
}

function initMap() {
  mapInstance = new ymaps.Map("map", {
    center: cityData[currentCityKey].center,
    zoom: cityData[currentCityKey].zoom,
    controls: ["zoomControl", "typeSelector", "fullscreenControl"]
  });

  setDefaultRouteTrackSelection(currentCityKey);
  initRouteTrackLegend();
  renderMap(currentCityKey);
  initTabs();
  initFilters();
  initHotelToggle();
}

function getYandexMapsApiKey() {
  return (window.YANDEX_MAPS_API_KEY || "").trim();
}

function showMapBootstrapError(message) {
  const mapNode = document.getElementById("map");
  if (!mapNode) {
    return;
  }

  mapNode.innerHTML = `<div style="display:flex;align-items:center;justify-content:center;height:100%;padding:1rem;text-align:center;font-family:'Montserrat Alternates','Trebuchet MS',sans-serif;color:#7f1d1d;background:#fef2f2;border:1px solid #fecaca;">${message}</div>`;
}

function loadYandexMapsApi(apiKey) {
  return new Promise((resolve, reject) => {
    if (window.ymaps) {
      resolve(window.ymaps);
      return;
    }

    const script = document.createElement("script");
    script.src = `https://api-maps.yandex.ru/2.1/?lang=ru_RU&apikey=${encodeURIComponent(apiKey)}`;
    script.async = true;
    script.onload = () => {
      if (window.ymaps) {
        resolve(window.ymaps);
      } else {
        reject(new Error("API загружено, но объект ymaps не найден"));
      }
    };
    script.onerror = () => reject(new Error("Не удалось загрузить API Яндекс Карт"));

    document.head.appendChild(script);
  });
}

function bootstrapMap() {
  const apiKey = getYandexMapsApiKey();
  if (!apiKey) {
    showMapBootstrapError("Укажите API-ключ в файле config.local.js: window.YANDEX_MAPS_API_KEY = \"ваш_ключ\";");
    return;
  }

  enrichItemsWithPhotos();
  loadYandexMapsApi(apiKey)
    .then(() => {
      ymaps.ready(initMap);
    })
    .catch((error) => {
      showMapBootstrapError(`Ошибка загрузки карты: ${error.message}`);
    });
}

bootstrapMap();