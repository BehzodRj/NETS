import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RequestsService } from '../all.service';
import * as jquery from 'jquery';

@Component({
  selector: 'app-private-clients-page',
  templateUrl: './private-clients-page.component.html',
  styleUrls: ['./private-clients-page.component.scss'],
})
export class PrivateClientsPageComponent implements OnInit {
  colorChannel: any = 1;
  progressValue: any = -1
  fileName = 'Перетащи фото сюда или выбери из папки';
  slideConfig = { 
    slidesToShow: 4, 
    slidesToScroll: 1,
    arrows: false, 
    responsive: [
      {
          breakpoint: 1600,
          settings: {
              slidesToShow: 3
          }
          
      },
      {
          breakpoint: 1200,
          settings: {
              slidesToShow: 2
          }

      },
      {
          breakpoint: 800,
          settings: {
              slidesToShow: 1
          }

      },
  ]
  };
  textConfig = { 
    slidesToShow: 1, 
    slidesToScroll: 1, 
    arrows: false,
   
  };
  
  
  tarifsData: any = [
    {
      id: 1,
      name: 'Nets 1',
      speed: 'Скорость до 1 Mbit/s',
      widthSpeed: 25,
      price: '99',
      li_1: 'Оборудование в аренду',
      li_2: '1',
      li_3: 'Бесплатное подключение',
      li_4: 'Безлимитный трафик',
      li_5: 'Доступ к локальным ресурсам до 100мбит',
    },
    {
      id: 2,
      name: 'Nets 2',
      speed: 'Скорость до 5 Mbit/s',
      widthSpeed:50,
      price: '125',
      li_1: 'Оборудование в аренду',
      li_2: '1',
      li_3: 'Бесплатное подключение',
      li_4: 'Безлимитный трафик',
      li_5: 'Доступ к локальным ресурсам до 100мбит',
    },
    { 
      id: 3,
      name: 'Nets 3',
      speed: 'Скорость до 10 Mbit/s',
      widthSpeed:75,
      price: '225',
      li_1: 'Оборудование в аренду',
      li_2: '2',
      li_3: 'Бесплатное подключение',
      li_4: 'Безлимитный трафик',
      li_5: 'Доступ к локальным ресурсам до 100мбит',
    },
    {
      id: 4,
      name: 'Nets 4',
      speed: 'Скорость до 20 Mbit/s',
      widthSpeed:100,
      price: '375',
      li_1: 'Оборудование в аренду',
      li_2: '2',
      li_3: 'Бесплатное подключение',
      li_4: 'Безлимитный трафик',
      li_5: 'Доступ к локальным ресурсам до 100мбит',
    },
  ]

  wifiData: any = [
    {
      id: 1,
      name: 'GPON+ WIFI',
      img: './assets/img/gpon_wifi.svg',
      text: 'ONU BDCOM GP1704-2F-E',
      price: '450',
    },
    {
      id: 2,
      name: 'IPTV',
      img: './assets/img/iptv.svg',
      text: 'TX3 mini',
      price: '299',
    },
    {
      id: 3,
      name: 'GPON',
      img: './assets/img/gpon.svg',
      text: 'SNR-ONU-GPON-1G-mini-C+',
      price: '299',
    },
    {
      id: 2,
      name: 'IPTV',
      img: './assets/img/iptv.svg',
      text: 'TX3 mini',
      price: '299',
    },
  ];
  wifiModal: any = [
    {
      id: 1,
      img: './assets/img/gpon_wifi.svg',
      title: 'ONU BDCOM GP1704-2F-E',
      price: '450',
      textModal:
        'BDCOM GP1704 — это умный абонентский терминал со встроенными: беспроводной, VoIP и CATV функциями. BDCOM GP1704 ориентирована на интегрированную мультисервисную сеть оператора связи.',
    },
    {
      id: 2,
      img: './assets/img/iptv.svg',
      title: 'IPTV',
      price: '299',
      textModal:
        'TX3 mini работает на операционной системе Android 9.0, имеет производительный 4-ядерный процессор Quad Core ARM Cortex A53 и видео процессор Penta Core Mali-450. Имеет высокую скорость работы и высокое разрешение картинки, включая 4К UHD.',
    },
    {
      id: 3,
      img: './assets/img/gpon.svg',
      title: 'GPON',
      price: '299',
      textModal:
        'Абонентский терминал ONU GPON, 1 порт 10/100/1000Base-T, в мини корпусе. Полная совместимость со стандартом ITU-T G.984.X, поддерживает 1 порт GPON (SC/UPC) и 1 порт 10/100/1000-Base-T (RJ45).',
    },
    {
      id: 4,
      img: './assets/img/gpon.svg',
      title: 'GPON',
      price: '299',
      textModal:
        'Абонентский терминал ONU GPON, 1 порт 10/100/1000Base-T, в мини корпусе. Полная совместимость со стандартом ITU-T G.984.X, поддерживает 1 порт GPON (SC/UPC) и 1 порт 10/100/1000-Base-T (RJ45).',
    },
  ];
  textSetting: any = [
    {
      id: 1,
      title: 'Доступные цены и удобная оплата.',
      text: ' Оптимальная ценовая политика, которая полностью соответствует Вашим требованиям и желаниям. Для более удобной работы мы предоставляем нашим клиентам несколько способов оплаты услуг : Онлайн и в терминалах по городу.',  
    },
    {
      id: 2,
      title: 'Техническая поддержка.',
      text: '  Для бесперебойного предоставления услуг у нас работают аварийные бригады, тем самым обеспечивая круглосуточную тех.поддержку. Мы на связи 24/7.',  
    },
    {
      id: 3,
      title: 'Абсолютно безлимитный интернет',
      text: '  Стабильный интернет-сигнал, обеспечивающий безопасность передачи Ваших данных: посещение как внешних так и внутренних ресурсов, проведение операций в онлайн-банке, и многое другое. Безлимитные тарифы дадут Вам безграничный доступ ко всем возможностям интернета от развлечений, до работы.',  
    },
     
  ];
 
  slickInit(e: any) {
    console.log('slick initialized');
  }
  breakpoint(e: any) {
    console.log('breakpoint');
  }
  afterChange(e: any) {
    console.log('afterChange');
  }
  beforeChange(e: any) {
    console.log('beforeChange');
  }

  
  allChannels: any = []
  tarifsName: any;
  connectionForm!: FormGroup;
  showModalConnection = false;
  modalWifi = false;
  clrTech = 0;
  slideMargin = 0;
  slideMargin2 = 0;
  activeWifi = 0;

  constructor(private request: RequestsService) {}

  ngOnInit() {
    this.connectionForm = new FormGroup({
      surname: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      secondName: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      comments: new FormControl('', Validators.required),
      file: new FormControl('', Validators.required),
    });

    this.allChannels = this.request.allChannelsService
  }
  submit() {
    const connectionFormData = { ...this.connectionForm.value };
    console.log(connectionFormData);
  }

  connectionTarifs(id: number) {
    this.showModalConnection = true;
    this.tarifsName = this.tarifsData.filter(
      (res: any) => res.id == id
    )[0].name;
  }
  wifiClick(id: number) {
    this.modalWifi = true;
    this.activeWifi = id;
  }

  gpon(elem: any) {
    this.clrTech = 1;
    console.log(elem.target.value);
  }

  ethernet(elem: any) {
    this.clrTech = 2;
    console.log(elem.target.value);
  }

  antenna(elem: any) {
    this.clrTech = 3;
    console.log(elem.target.value);
  }

  upload(event: any) {
    let file = event.target.files[0];
    this.fileName = file.name;
  }
   

  allChannelButton() {
    this.colorChannel = 1
    this.allChannels = this.request.allChannelsService
  }

  tajikChannelButton() {
    this.colorChannel = 2
    this.allChannels = this.request.tajikChannelsService
  }

  movieChannelButton() {
    this.colorChannel = 3
    this.allChannels = this.request.movieChannelsService
  }

  childChannelButton() {
    this.colorChannel = 4
    this.allChannels = this.request.childChannelsService
  }

  sportChannelButton() {
    this.colorChannel = 5
    this.allChannels = this.request.sportChannelsService
  }

  informativeChannelButton() {
    this.colorChannel = 6
    this.allChannels = this.request.informativeChannelsService
  }

  entertainmentChannelButton() {
    this.colorChannel = 7
    this.allChannels = this.request.entertainmentChannelsService
  }

  mouseProgress(idx: number) {
    this.progressValue = idx
  }
 
}
