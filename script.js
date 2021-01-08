const idioms = [
  [
    'Don’t judge a book by its cover.',
    'Strike while the iron is hot.',
    'Better late than never.',
    'Don’t bite the hand that feeds you.',
    'Don’t put all your eggs in one basket.',
    'My hands are tied.',
    'It’s the tip of the iceberg.',
    'Easy come, easy go.',
    'The forbidden fruit is always the sweetest.',
    'You can’t make an omelet without breaking a few eggs.',
    'The grass is always greener on the other side of the fence',
    'When in Rome, do as the Romans do.',
    'Don’t make a mountain out of an anthill.',
    'An apple a day keeps the doctor away.',
    'Rome wasn’t built in a day',
    'You made your bed, now you have to lie in it.',
    'Don’t count your chickens before they hatch.',
    'Money doesn’t grow on trees.',
    'Too many cooks spoil the broth',
    'Many hands make light work.',
    'Honesty is the best policy.',
    'Practice makes perfect.',
    'Where there’s a will, there’s a way.',
    'Look before you leap.',
    'Beggars can’t be choosers.',
    'The early bird catches the worm.',
    'The cat is out of the bag.',
    'He who laughs last, laughs longest.',
    'It’s better to be safe than sorry',
    'Old habits die hard.'
  ],
  [
    'Не суди книгу по ее обложке; не все то золото, что блестит.',
    'Куй железо пока горячо.',
    'Лучше поздно, чем никогда.',
    'Не кусай руку, которая тебя кормит.',
    'Не клади все яйца в одну корзину; не ставь все на одну карту.',
    'Мои руки связаны.',
    'Это вершина айсберга.',
    'Легко пришло, легко ушло; как пришло, так и ушло; бог дал, бог взял.',
    'Запретный плод всегда сладок.',
    'Нельзя сделать яичницу, не разбив яиц.',
    'Хорошо там, где нас нет.',
    'В чужой монастырь со своим уставом не ходят.',
    'Не делай из мухи слона.',
    'Лук от семи недуг.',
    'Москва не сразу строилась.',
    'Кто кашу заварил, тому и расхлебывать.',
    'Цыплят по осени считают.',
    'Деньги не растут на деревьях; деньги на улице не валяются.',
    'у семи нянек дитя без глазу.',
    'Берись дружно – не будет грузно; когда рук много – работа спорится.',
    'Честность – лучшая стратегия; тайное становится явным; шила в мешке не утаишь.',
    'Практика ведет к совершенству; повторение – мать учения; навык мастера ставит.',
    'Кто хочет, тот добьется; было бы желание, а способ найдется.',
    'Не зная броду, не суйся в воду.',
    'Беднякам выбирать не приходится; не до жиру быть бы живу.',
    'Кто рано встает, тому бог подает; кто рано встает, того удача ждет.',
    'Тайное стало явным; карты вскрыты.',
    'Хорошо смеется тот, кто смеется последним.',
    'Семь раз отмерь – один отрежь.',
    'Привычка – вторая натура; от старых привычек трудно избавиться.'
  ]
];

const generateButton = document.querySelector('.generator-button');
const englistBlock = document.querySelector('.generator-content-eng');
const russianBlock = document.querySelector('.generator-content-rus');

const getRandomNumber = (length) => Math.floor(Math.random() * (length));

const getRandomIdiom = () => {
  let engResult = '';
  let rusResult = '';
  for (let i = 0; i < idioms.length; i++) {				
    let randNumber = getRandomNumber(idioms[0].length);
    engResult = idioms[0][randNumber];
    rusResult = idioms[1][randNumber];
  };
  englistBlock.textContent = engResult;
  russianBlock.textContent = rusResult;
}

generateButton.addEventListener('click', getRandomIdiom);