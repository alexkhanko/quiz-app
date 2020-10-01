const questions = {
  easy: [
    {
      question: "Назовите крупнейшую планету в нашей Солнечной системе.",
      answers: [
        { id: "1", text: "Юпитер", correct: true },
        { id: "2", text: "Марс" },
        { id: "3", text: "Земля" },
        { id: "4", text: "Нептун" },
      ]
    },
    {
      question: "Назовите химический символ кислорода.",
      answers: [
        { id: "1", text: "H" },
        { id: "2", text: "O", correct: true },
        { id: "3", text: "C" },
        { id: "4", text: "I" },
      ]
    },
    {
      question: "Как иначе называется сейсмическая волна в океане",
      answers: [
        { id: "1", text: "Отлив" },
        { id: "2", text: "Водоворот" },
        { id: "3", text: "Цунами", correct: true },
        { id: "4", text: "Прилив" },
      ]
    },
    {
      question: "Назовите седьмой элемент периодической таблицы Менделеева.",
      answers: [
        { id: "1", text: "Водород" },
        { id: "2", text: "Кислород" },
        { id: "3", text: "Углерод" },
        { id: "4", text: "Азот", correct: true },
      ]
    },
    {
      question: "Как называется высочайшая гора в мире?",
      answers: [
        { id: "1", text: "Монблан" },
        { id: "2", text: "Эльбрус" },
        { id: "3", text: "Афон" },
        { id: "4", text: "Эверест", correct: true },
      ]
    },
  ],
  medium: [
    {
      question: "Как называется звезда, которая находится ближе всего к Земле?",
      answers: [
        { id: "1", text: "Аль Хауд" },
        { id: "2", text: "Мусцида" },
        { id: "3", text: "Солнце", correct: true },
        { id: "4", text: "Сириус" },
      ]
    },
    {
      question: "Сколько примерно составляет уровень pH чистой воды?",
      answers: [
        { id: "1", text: "1" },
        { id: "2", text: "7", correct: true },
        { id: "3", text: "4" },
        { id: "4", text: "87" },
      ]
    },
    {
      question: "Как называется расплавленная порода, которая извергается из вулкана?",
      answers: [
        { id: "1", text: "Руда" },
        { id: "2", text: "Вода" },
        { id: "3", text: "Магма" },
        { id: "4", text: "Лава", correct: true },
      ]
    },
    {
      question: "Сколько костей в своём теле имеет акула?",
      answers: [
        { id: "1", text: "0", correct: true },
        { id: "2", text: "113" },
        { id: "3", text: "84" },
        { id: "4", text: "10" },
      ]
    },
    {
      question: "Страх перед каким животным называется арахнофобией?",
      answers: [
        { id: "1", text: "пауки", correct: true },
        { id: "2", text: "собаки" },
        { id: "3", text: "коровы" },
        { id: "4", text: "курицы" },
      ]
    },
  ],
  difficult: [
    {
      question: "Как называется часть человеческого скелета, которая защищает мозг?",
      answers: [
        { id: "1", text: "бедренная кость" },
        { id: "2", text: "таз" },
        { id: "3", text: "грудная клетка" },
        { id: "4", text: "череп", correct: true },
      ]
    },
    {
      question: "Как называется элемент с химическим символом He?",
      answers: [
        { id: "1", text: "Хлор" },
        { id: "2", text: "Гелий", correct: true },
        { id: "3", text: "Йод" },
        { id: "4", text: "Бор" },
      ]
    },
    {
      question: "Какой знаменитый учёный был удостоен Нобелевской премии 1921 года по физике за свою работу по теоретической физике?",
      answers: [
        { id: "1", text: "Фарадей" },
        { id: "2", text: "Ом" },
        { id: "3", text: "Планк" },
        { id: "4", text: "Энштейн", correct: true },
      ]
    },
    {
      question: "Радиодеталь, обладающая сопротивлением",
      answers: [
        { id: "1", text: "резистор", correct: true },
        { id: "2", text: "конденсатор" },
        { id: "3", text: "диод" },
        { id: "4", text: "транзистор" },
      ]
    },
    {
      question: "прибор для измерения напряжения",
      answers: [
        { id: "1", text: "частотометр" },
        { id: "2", text: "вольтметр", correct: true },
        { id: "3", text: "амперметр" },
        { id: "4", text: "омметр" },
      ]
    },
  ]
};

export default questions;
