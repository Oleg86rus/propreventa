export const company = {
  name: 'Proprevent',
  phone: '+7(3462) 765 - 909',
  email: 'preventasurgut@mail.ru',
  social: {
    instagram: '',
    
  },
  date: '2021 - 2022',
  description: 'Клиника интегративной персональной медицины'
};

export const checkupsDescriptionConst = {
  title: 'Чек-апы',
  listTitle: 'Главное отличие чек-апов в клинике ProPrevent в том, что каждый чек-ап составляется врачом анти-возрастной медицины, основываясь на опыте работы, последних международных исследованиях и трендах лабораторной диагностики.',
  list: [
    'вы сдадите анализы в лаборатории, которая отвечает всем требования международных стандартов.',
    'на приеме у врача получите полную расшифровку анализов, в которой будут выявлены даже самые мельчайшие дисбалансы. Наши врачи владеют самыми последними знаниями оптимальных референсов лабораторной диагностики.',
    'для вас будет разработана индивидуальная программа коррекции здоровья, в которой ювелирно подберутся лекарственные препараты и БАД, необходимые именно вам.'
  ]
};

export const analyzesDescriptionConst = {
  title: 'Анализы',
  description: 'На базе клиники ProPreventa работает современно клинико-диагностическая лаборатория, выполняющая более 3500 видов исследований от анализа крови до секвенирование генома и генетического паспорта, по самым высоким международным стандартам.',
  listTitle: 'Преимущества лаборатории ДНКОМ',
  list: [
    'здесь выполняются самые редкие тесты, недоступные в других лабораториях',
    'первая в России ANTI-AGE  лаборатория. Внедрены панели оценки старения и биомаркеры chekup, сдав которые можно понять какие системы и органы тела стареют быстрее и какие превентивные меры можно предпринять',
    'сотрудничает с ассоциацией врачей PreventAge',
    'оснащена самым высокотехнологичным оборудованием от ведущих мировых производителей Европы, Японии, США',
    'оборудование работает только на оригинальных реагентах.',
    'участвует в международной программе внешней оценки качества лабораторных исследований EQUAS',
    'каждый результат анализа проходит врачебную проверку',
    'в медицинском сообществе репутация лаборатории очень высока. Врачи ценят ДНКОМ за точные результаты исследований. Самые сложные тесты традиционно проводятся здесь'
  ],
  href: 'https://dnkom.ru/surgut/analizy-i-tseny/po-tipu/'
};

export const style = {
  h1: 'text-2xl font-bold text-center mt-4 mb-4',
  p: 'mt-2 mb-2 text-sm font-normal text-gray-900',
  p_Price: 'mt-1 text-lg font-medium text-gray-900',
  buttonInCard: 'inline-flex items-center px-4 py-2 border border-amber-500 rounded-[10px] shadow-sm text-sm font-medium text-black hover:bg-amber-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 transition-all duration-500',
  button: 'px-4 py-2 border border-amber-500 rounded-[10px] shadow-sm text-sm font-medium text-black hover:bg-amber-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 transition-all duration-500',
  div: 'flex flex-wrap justify-center p-4',
  ul: 'mt-1 mb-1 text-sm font-normal text-gray-900',
  li: 'list-disc mb-1 ml-4',
};

export const navList = [
  {
    id: 1,
    name: 'Чек-апы',
    href: '/checkups'
  },
  {
    id: 2,
    name: 'Анализы',
    href: '/analyzes'
  },
  {
    id: 3,
    name: 'Генетические исследования',
    href: '/geneticResearch'
  },
  {
    id: 4,
    name: 'IV-терапия',
    href: '/IVTherapyesList'
  },
  {
    id: 5,
    name: 'Врачи',
    href: '/doctors'
  },
  {
    id: 6,
    name: 'О нас',
    href: '/aboutUs'
  }
];