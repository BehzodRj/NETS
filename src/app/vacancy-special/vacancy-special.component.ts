import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-vacancy-special',
  templateUrl: './vacancy-special.component.html',
  styleUrls: ['./vacancy-special.component.scss']
})
export class VacancySpecialComponent implements OnInit {
  vacancySpecialData: any = [
    {id: 1, img: './assets/img/Golang.svg', title: 'Golang разработчик', looking: 'Ищем Golang разработчик с опытом разработки от 1 года', tasks:'Разрабатывать микро-сервисов платформы на Golang;', write: 'Писать unit и интеграционных тестов;', create: 'Создавать и кастомизировать API;', optimize: 'Оптимизировать и профилировать реализованных решений.', programming: 'Опыт программирования на golang и умение писать unit тесты;', experience: 'Опыт работы с базами данных (postgresql, redis);', understanding: 'Понимание работы:-сетевых протоколов, таких как http и tcp;-протоколов сериализации данных (protobuf, json, etc); -kubernеtes и docker.', Knowledge: 'Знание с/с++;', Understanding:'Понимание принципов работы kafka;', pprof:'Опыт работы с pprof;', nginx:'Понимание принципов работы nginx.', willingness: 'Готовность работать самостоятельно и проективно;', pursuit: 'Стремление делать по-настоящему качественный продукт и брать на себя ответственность за результат;', ability: 'Способность учиться, осваивая новые технологии и приобретая новые навыки и компетенции;', openness: 'Открытость и взаимовыручку между участниками команды.'},

    {id: 2, img: './assets/img/pro.svg', title: 'Промоутер',looking: 'Наша команда в поиске промоутера', tasks:'Обход домов', write: 'Первичная консультация потенциальных клиентов по продуктам;', create: 'Выполнение плана продаж', optimize: 'Ведение отчётности по продажам;', programming: 'Знание техники продаж;', experience: 'Грамотная устная речь;', understanding: 'Коммуникабельность, целеустремлённость, клиентоориентированность',},
    
    {id: 3, img: './assets/img/men_pro.svg', title: 'Менеджер по продажам - ПО', tasks:'Генерация спроса на продукцию компании (программное обеспечение);', write: 'Создание, поддержание и развитие клиентской базы компании;', create: 'Сбор и анализ технико-коммерческой информации для оценки конкурентной обстановки;', optimize: 'Выполнение задач пресейла в рамках формирования спроса на продукцию;', tracking:'Отслеживание и исполнение прогноза продаж от вендора на продукцию', performanser:'Выполнение различных задач в рамках межрегиональных проектов по указанию руководства;', preparation:'Подготовка отчетности в установленной форме.', programming: 'Высшее экономическое образование;', experience: 'Опыт работы сфере продаж;', understanding: 'Знание языков: таджикский язык и русский язык обязательно, английский является преимуществом;', office:'Уверенный пользователь ПК ( MS Office).'},

    {id: 4, img: './assets/img/men_it.svg', title: 'Менеджер IT - Проектов',looking: 'Наша компания ищет энергичного и коммуникабельного Менеджера IT  проектов', tasks:'Подготовка коммерческих предложений;',write: 'Разработка проектной документации, предложений, технических заданий;', create: 'Контроль и обеспечения соблюдения сроков выполнения проектов;', optimize: 'Работа с договорами: организация и контроль ведения/исполнения договоров с поставщиками;', tracking:'Понимание планирования, управления проектами, специфики IT-отрасли;', performanser:'Взаимодействие с партнерами и производителями;', preparation:'Системный подход и аналитический склад ума;', activity: 'Активность, желание развиваться, работоспособность, нацеленность на результат;', good:'Хорошие навыки коммуникации (телефонные звонки, письма, личное общение).', programming: 'Навыки общения с партнерами, заказчиками и производителями по телефону;',experience: 'Грамотная речь, опыт деловой переписки;', understanding: 'Способность к обработке большого объема информации и обучению;', office:'Уверенный пользователь ПК ( MS Office).', competent:'Грамотная речь, соблюдение норм вежливого делового общения;', skill:'Умение и желание работать в команде;',accuraty:'Аккуратность, внимательность;', under:'Понимание базовых основ ведения проектов в IT-сфере;', similar:'Аналогичный опыт от 1 года'},

    {id: 5, img: './assets/img/devops.svg', title: 'DevOps инженер',looking: 'Ищем в команду DevOps инженера, который поможет нам поддерживать и развивать нашу инфраструктуру!', desk:'Кандидату на этой позиции предстоит работать с окружением наших проектов, которое построено на Linux, Docker, Ansible, GitLab CI, Apache, Nginx, Docker-compose, Cron и т.д.',tasks:'Администрирование систем на Linux, Nginx,Docker registry;',write: 'Настраивать и поддерживать различные процессы разработки и системного администрирования (билды, выкладка и т.д);', create: 'Администрирование дополнительных профильных программ компании',  programming: 'Опыт администрирования ОС Linux;',experience: 'Навыки по работе с планировщиком задач Cron', understanding: 'Навыки работы с веб серверами - Apache, Nginx);', office:'Приветствуется опыт работы с Docker и Docker-compose,', competent:'Желание учиться и развиваться', willingness: 'Готовность работать самостоятельно и активно;', pursuit: 'Стремление делать по-настоящему качественный продукт и брать на себя ответственность за результат;', ability: 'Способность учиться, осваивая новые технологии и приобретая новые навыки и компетенции;', openness: 'Открытость и взаимовыручку между участниками команды.'},

    {id: 6, img: './assets/img/pro.svg', title: 'Волонтёр - Промоутер', looking: 'Заинтересованы обучиться чему-то новому?', desk:'Если вам от 18 до 25 лет, вы живете в Душанбе, хотите набраться опыта в проведении крутых корпоративных и маркетинговых мероприятий, то мы вас ждем!',tasks:'Консультировать покупателей о продукции;',write: 'Обход домов с целю продвижения продуктов компании;', create: 'Выполнение плана продаж;',optimize:'Ведение отчётности по продажам:', willingness: 'Желание развиваться;', pursuit: 'Командное взаимодействие;', ability: 'Взаимоуважение;', openness: 'Честность.'}
  ]

  fullVacancyData: any
  vacancyAddForm!:FormGroup
  letterAddForm!: FormGroup
  modalShow = false
  getChooseFile:any
  show = true
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    
    this.vacancyAddForm = new FormGroup({
      surname: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      secondName: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      letter: new FormControl('',Validators.required),
      file: new FormControl('',Validators.required)
    }) 

    this.route.params.subscribe( (param: any) => {
      this.fullVacancyData = this.vacancySpecialData.filter( (res: any) => res.id == param.id)[0]
    })
  }

  send(){
    const vacancyAddFormData = {...this.vacancyAddForm.value}
    console.log(vacancyAddFormData) 
  }

  backToVacancy() {
    this.router.navigate(['/vacancy'])
    localStorage.setItem('showId', '2')
  }
 

  isFileChosen:boolean = false;
  fileName: string = 'Перетащи резюме сюда или выбери из папки';
  preUpload(event:any){
    let file = event.target.files[0];
    if (event.target.files.length > 0){
    this.isFileChosen = true;
    }        
    this.fileName = file.name;
  }

}