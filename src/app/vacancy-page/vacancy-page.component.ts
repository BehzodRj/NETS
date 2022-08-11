import { trigger, state, style, transition, animate, query, stagger, keyframes } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vacancy-page',
  templateUrl: './vacancy-page.component.html',
  styleUrls: ['./vacancy-page.component.scss'],
})
export class VacancyPageComponent implements OnInit {
  show: any = false
  fstBlock = false
  vacancyData: any = [
    {id: 1, img: './assets/img/vacancy.svg', title: 'Специалист по подключениям', description: 'Не просто специалист…а Мега-коммуникабельный, активный, способный уладить любую проблему супер-герой!'},
    {id: 2, img: './assets/img/manager.svg', title: 'Менеджер В2В', description: 'Осуществляет активные продажи, поиск новых клиентов В2В сегмента, процесс продвижение новых услуг для юридических лиц.'},
    {id: 3, img: './assets/img/operator.svg', title: 'Оператор', description: 'Не просто оператор…а Мега-коммуникабельный, активный, способный уладить любую проблему супер-герой!'}
  ]

  constructor() {}

  ngOnInit() {
    let loc: any = localStorage.getItem('showId')

    if(loc == 1) {
      setTimeout(() => {
        this.show = true
      }, 9000);
    } else if(loc == 2) {
      this.show = true
    }
  }

}
