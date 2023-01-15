
let store = {
    questions: [
        {
            questionNumber: 'Вопрос №1',
            question: 'Самая жаркая планета?',
            var1: 'Марс',
            var2: 'Венера',
            var3: 'Земля',
            var4: 'Меркурий',
            value1: 'no',
            value2: 'yes',
            value3: 'no',
            value4: 'no',
            path: '/1',
            link: '/2',
            next: 'Следующий вопрос',
            image: './images/ques1.jpg'
        },
        {
            questionNumber: 'Вопрос №2',
            question: 'Сколько пар хромосом включает геном человека?',
            var1: '22 пары',
            var2: '23 пары',
            var3: '24 пары',
            var4: '21 пара',
            value1: 'no',
            value2: 'yes',
            value3: 'no',
            value4: 'no',
            path: '/2',
            link: '/3',
            next: 'Следующий вопрос',
            image: './images/ques2.jpg'

        },
        {
            questionNumber: 'Вопрос №3',
            question: 'Сколько океанов на нашей планете?',
            var1: '3 океана',
            var2: '4 океана',
            var3: '5 океанов',
            var4: '6 океанов',
            value1: 'no',
            value2: 'no',
            value3: 'yes',
            value4: 'no',
            path: '/3',
            link: '/4',
            next: 'Следующий вопрос',
            image: './images/ques3.jpg'

        },
        {
            questionNumber: 'Вопрос №4',
            question: 'Какой элемент таблицы Менделеева обозначается как "Ag"?',
            var1: 'Железо',
            var2: 'Серебро',
            var3: 'Золото',
            var4: 'Уран',
            value1: 'no',
            value2: 'yes',
            value3: 'no',
            value4: 'no',
            path: '/4',
            link: '/5',
            next: 'Следующий вопрос',
            image: './images/ques4.jpg'

        },
        {
            questionNumber: 'Вопрос №5',
            question: 'Сколько дециметров в 0,2 км?',
            var1: '2000 дм',
            var2: '200 дм',
            var3: '20000 дм',
            var4: '20 дм',
            value1: 'yes',
            value2: 'no',
            value3: 'no',
            value4: 'no',
            path: '/5',
            link: '/6',
            next: 'Следующий вопрос',
            image: './images/ques5.jpg'

        },
        {
            questionNumber: 'Вопрос №6',
            question: 'Какая самая длинная река в мире?',
            var1: 'Амазонка',
            var2: 'Нил',
            var3: 'Янцзы',
            var4: 'Волга',
            value1: 'yes',
            value2: 'no',
            value3: 'no',
            value4: 'no',
            path: '/6',
            link: '/7',
            next: 'Следующий вопрос',
            image: './images/ques6.jpg'

        },
        {
            questionNumber: 'Вопрос №7',
            question: 'Какое число цифрами означает "LXXVII"?',
            var1: '47',
            var2: '1027',
            var3: '527',
            var4: '77',
            value1: 'no',
            value2: 'no',
            value3: 'no',
            value4: 'yes',
            path: '/7',
            link: '/8',
            next: 'Следующий вопрос',
            image: './images/ques7.jpg'

        },
        {
            questionNumber: 'Вопрос №8',
            question: 'Какая планета названа в честь римского бога торговли?',
            var1: 'Марс',
            var2: 'Сатурн',
            var3: 'Меркурий',
            var4: 'Юпитер',
            value1: 'no',
            value2: 'no',
            value3: 'yes',
            value4: 'no',
            path: '/8',
            link: '/9',
            next: 'Следующий вопрос',
            image: './images/ques8.jpg'

        },
        {
            questionNumber: 'Вопрос №9',
            question: 'Какой стране принадлежит Гренландия?',
            var1: 'Великобритания',
            var2: 'Дания',
            var3: 'Норвегия',
            var4: 'Гренландия',
            value1: 'no',
            value2: 'yes',
            value3: 'no',
            value4: 'no',
            path: '/9',
            link: '/10',
            next: 'Следующий вопрос',
            image: './images/ques9.jpg'

        },
        {
            questionNumber: 'Вопрос №10',
            question: 'Сколько длилась столетняя война?',
            var1: '123 года',
            var2: '97 лет',
            var3: '100 лет',
            var4: '116 лет',
            value1: 'no',
            value2: 'no',
            value3: 'no',
            value4: 'yes',
            path: '/10',
            link: '/11',
            next: 'Следующий вопрос',
            image: './images/ques10.jpg'

        },
        {
            questionNumber: 'Вопрос №11',
            question: 'Кто совершли первое кругосветное путешествие?',
            var1: 'Кук',
            var2: 'Магеллан',
            var3: 'Колумб',
            var4: 'Крузерштерн',
            value1: 'no',
            value2: 'yes',
            value3: 'no',
            value4: 'no',
            path: '/11',
            link: '/12',
            next: 'Следующий вопрос',
            image: './images/ques11.jpg'

        },
        {
            questionNumber: 'Вопрос №12',
            question: 'В какой галактике находится планета Земля?',
            var1: 'Андромеда',
            var2: 'Млечный путь',
            var3: 'Магелланово облако',
            var4: 'Сверхскопление Девы',
            value1: 'no',
            value2: 'yes',
            value3: 'no',
            value4: 'no',
            path: '/12',
            link: '/result',
            next: 'Перейти к результату',
            image: './images/ques12.jpg'

        },
    ]
}

export default store