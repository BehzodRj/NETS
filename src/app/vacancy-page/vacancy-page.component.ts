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
    {id: 1, img: './assets/img/Golang.svg', title: 'Golang разработчик', description: 'Не просто специалист…а Мега-коммуникабельный, активный, способный уладить любую проблему супер-герой!'},
    {id: 2, img: './assets/img/pro.svg', title: 'Промоутер', description: 'Осуществляет активные продажи, поиск новых клиентов В2В сегмента, процесс продвижение новых услуг для юридических лиц.'},
    {id: 3, img: './assets/img/men_pro.svg', title: 'Менеджер по продажам - ПО', description: 'Не просто оператор…а Мега-коммуникабельный, активный, способный уладить любую проблему супер-герой!'},
    {id: 4, img: './assets/img/men_it.svg', title: 'Менеджер IT - Проектов', description: 'Не просто специалист…а Мега-коммуникабельный, активный, способный уладить любую проблему супер-герой!'},
    {id: 5, img: './assets/img/devops.svg', title: 'DevOps инженер', description: 'Осуществляет активные продажи, поиск новых клиентов В2В сегмента, процесс продвижение новых услуг для юридических лиц.'},
    {id: 6, img: './assets/img/pro.svg', title: 'Волонтёр - Промоутер', description: 'Не просто оператор…а Мега-коммуникабельный, активный, способный уладить любую проблему супер-герой!'}
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
