import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {
  allChannelsService = [
    { img: './assets/img/allChannels_category/All/1.jpg' },
    { img: './assets/img/allChannels_category/All/2.jpg' },
    { img: './assets/img/allChannels_category/All/3.png' },
    { img: './assets/img/allChannels_category/All/4.png' },
    { img: './assets/img/allChannels_category/All/5.png' },
    { img: './assets/img/allChannels_category/All/6.png' },
    { img: './assets/img/allChannels_category/All/7.jpg' },
    { img: './assets/img/allChannels_category/All/8.jpg' },
    { img: './assets/img/allChannels_category/All/9.jpg' },
    { img: './assets/img/allChannels_category/All/10.jpg' },
    { img: './assets/img/allChannels_category/All/11.jpg' },
    { img: './assets/img/allChannels_category/All/12.jpg' },
    { img: './assets/img/allChannels_category/All/13.jpg' },
    { img: './assets/img/allChannels_category/All/14.jpg' },
    { img: './assets/img/allChannels_category/All/15.jpg' },
    { img: './assets/img/allChannels_category/All/16.jpg' },
    { img: './assets/img/allChannels_category/All/17.jpg' },
    { img: './assets/img/allChannels_category/All/18.png' },
    { img: './assets/img/allChannels_category/All/19.png' },
    { img: './assets/img/allChannels_category/All/20.png' },
    { img: './assets/img/allChannels_category/All/21.png' },
    { img: './assets/img/allChannels_category/All/22.jpg' },
    { img: './assets/img/allChannels_category/All/23.jpg' },
    { img: './assets/img/allChannels_category/All/24.jpg' },
    { img: './assets/img/allChannels_category/All/25.jpg' },
    { img: './assets/img/allChannels_category/All/26.jpg' },
    { img: './assets/img/allChannels_category/All/27.jpg' },
    { img: './assets/img/allChannels_category/All/28.jpg' },
    { img: './assets/img/allChannels_category/All/29.jpg' },
    { img: './assets/img/allChannels_category/All/30.jpg' },
    { img: './assets/img/allChannels_category/All/31.jpg' },
    { img: './assets/img/allChannels_category/All/32.jpg' },
    { img: './assets/img/allChannels_category/All/33.jpg' },
    { img: './assets/img/allChannels_category/All/34.jpg' },
    { img: './assets/img/allChannels_category/All/35.jpg' },
    { img: './assets/img/allChannels_category/All/36.jpg' },
    { img: './assets/img/allChannels_category/All/37.jpg' },
    { img: './assets/img/allChannels_category/All/38.jpg' },
    { img: './assets/img/allChannels_category/All/39.jpg' },
    { img: './assets/img/allChannels_category/All/40.jpg' },
    { img: './assets/img/allChannels_category/All/41.jpg' },
    { img: './assets/img/allChannels_category/All/42.jpg' },
    { img: './assets/img/allChannels_category/All/43.jpg' },
    { img: './assets/img/allChannels_category/All/44.jpg' },
    { img: './assets/img/allChannels_category/All/45.jpg' },
    { img: './assets/img/allChannels_category/All/46.jpg' },
    { img: './assets/img/allChannels_category/All/47.jpg' },
    { img: './assets/img/allChannels_category/All/48.jpg' },
    { img: './assets/img/allChannels_category/All/49.jpg' },
    { img: './assets/img/allChannels_category/All/50.jpg' },
    { img: './assets/img/allChannels_category/All/51.jpg' },
    { img: './assets/img/allChannels_category/All/52.jpg' },
    { img: './assets/img/allChannels_category/All/53.jpg' },
    { img: './assets/img/allChannels_category/All/54.jpg' },
    { img: './assets/img/allChannels_category/All/55.jpg' },
    { img: './assets/img/allChannels_category/All/56.jpg' },
    { img: './assets/img/allChannels_category/All/57.jpg' },
    { img: './assets/img/allChannels_category/All/58.jpg' },
    { img: './assets/img/allChannels_category/All/59.jpg' },
    { img: './assets/img/allChannels_category/All/60.jpg' },
    { img: './assets/img/allChannels_category/All/61.jpg' },
    { img: './assets/img/allChannels_category/All/62.jpg' },
    { img: './assets/img/allChannels_category/All/63.jpg' },
    { img: './assets/img/allChannels_category/All/64.jpg' },
    { img: './assets/img/allChannels_category/All/65.jpg' },
    { img: './assets/img/allChannels_category/All/66.jpg' },
    { img: './assets/img/allChannels_category/All/67.jpg' },
    { img: './assets/img/allChannels_category/All/68.jpg' },
    { img: './assets/img/allChannels_category/All/69.jpg' },
    { img: './assets/img/allChannels_category/All/70.jpg' },
    { img: './assets/img/allChannels_category/All/71.jpg' },
    { img: './assets/img/allChannels_category/All/72.jpg' },
    { img: './assets/img/allChannels_category/All/73.jpg' },
    { img: './assets/img/allChannels_category/All/74.jpg' },
    { img: './assets/img/allChannels_category/All/75.jpg' },
    { img: './assets/img/allChannels_category/All/76.jpg' },
    { img: './assets/img/allChannels_category/All/77.jpg' },
    { img: './assets/img/allChannels_category/All/78.jpg' },
    { img: './assets/img/allChannels_category/All/79.jpg' },
    { img: './assets/img/allChannels_category/All/80.jpg' },
    { img: './assets/img/allChannels_category/All/81.jpg' },
    { img: './assets/img/allChannels_category/All/82.jpg' },
    { img: './assets/img/allChannels_category/All/83.jpg' },
    { img: './assets/img/allChannels_category/All/84.jpg' },
    { img: './assets/img/allChannels_category/All/85.jpg' },
    { img: './assets/img/allChannels_category/All/86.jpg' },
    { img: './assets/img/allChannels_category/All/87.jpg' },
    { img: './assets/img/allChannels_category/All/88.jpg' },
    { img: './assets/img/allChannels_category/All/89.jpg' },
    { img: './assets/img/allChannels_category/All/90.jpg' },
    { img: './assets/img/allChannels_category/All/91.jpg' },
    { img: './assets/img/allChannels_category/All/92.jpg' },
    { img: './assets/img/allChannels_category/All/93.jpg' },
    { img: './assets/img/allChannels_category/All/94.jpg' },
    { img: './assets/img/allChannels_category/All/96.jpg' },
    { img: './assets/img/allChannels_category/All/97.jpg' },
    { img: './assets/img/allChannels_category/All/98.jpg' },
    { img: './assets/img/allChannels_category/All/99.jpg' },
    { img: './assets/img/allChannels_category/All/100.jpg' },
    { img: './assets/img/allChannels_category/All/101.jpg' },
    { img: './assets/img/allChannels_category/All/102.jpg' },
    { img: './assets/img/allChannels_category/All/104.jpg' },
    { img: './assets/img/allChannels_category/All/105.jpg' },
    { img: './assets/img/allChannels_category/All/106.jpg' },
    { img: './assets/img/allChannels_category/All/107.jpg' },
    { img: './assets/img/allChannels_category/All/108.jpg' },
    { img: './assets/img/allChannels_category/All/109.jpg' },
    { img: './assets/img/allChannels_category/All/110.jpg' },
    { img: './assets/img/allChannels_category/All/111.jpg' },
    { img: './assets/img/allChannels_category/All/112.jpg' },
    { img: './assets/img/allChannels_category/All/113.jpg' },
    { img: './assets/img/allChannels_category/All/114.jpg' },
    { img: './assets/img/allChannels_category/All/115.jpg' },
    { img: './assets/img/allChannels_category/All/116.jpg' },
    { img: './assets/img/allChannels_category/All/117.jpg' },
    { img: './assets/img/allChannels_category/All/118.jpg' },
    { img: './assets/img/allChannels_category/All/119.jpg' },
    { img: './assets/img/allChannels_category/All/120.jpg' },
    { img: './assets/img/allChannels_category/All/121.jpg' },
    { img: './assets/img/allChannels_category/All/122.jpg' },
    { img: './assets/img/allChannels_category/All/123.jpg' },
    { img: './assets/img/allChannels_category/All/124.jpg' },
    { img: './assets/img/allChannels_category/All/125.jpg' },
    { img: './assets/img/allChannels_category/All/126.jpg' },
    { img: './assets/img/allChannels_category/All/127.jpg' },
    { img: './assets/img/allChannels_category/All/128.jpg' },
    { img: './assets/img/allChannels_category/All/129.jpg' },
    { img: './assets/img/allChannels_category/All/130.jpg' },
    { img: './assets/img/allChannels_category/All/131.jpg' },
    { img: './assets/img/allChannels_category/All/132.jpg' },
    { img: './assets/img/allChannels_category/All/133.jpg' },
    { img: './assets/img/allChannels_category/All/134.jpg' },
    { img: './assets/img/allChannels_category/All/135.jpg' },
    { img: './assets/img/allChannels_category/All/136.jpg' },
    { img: './assets/img/allChannels_category/All/137.jpg' },
    { img: './assets/img/allChannels_category/All/138.jpg' },
    { img: './assets/img/allChannels_category/All/139.jpg' },
    { img: './assets/img/allChannels_category/All/140.jpg' },
    { img: './assets/img/allChannels_category/All/141.jpg' },
    { img: './assets/img/allChannels_category/All/142.jpg' },
    { img: './assets/img/allChannels_category/All/143.jpg' },
    { img: './assets/img/allChannels_category/All/144.jpg' },
    { img: './assets/img/allChannels_category/All/145.jpg' },
    { img: './assets/img/allChannels_category/All/146.jpg' },
    { img: './assets/img/allChannels_category/All/147.jpg' },
    { img: './assets/img/allChannels_category/All/148.jpg' },
    { img: './assets/img/allChannels_category/All/149.jpg' }
  ]

  tajikChannelsService = [
    { img: './assets/img/allChannels_category/tajik/1.jpg' },
    { img: './assets/img/allChannels_category/tajik/2.jpg' },
    { img: './assets/img/allChannels_category/tajik/3.jpg' },
    { img: './assets/img/allChannels_category/tajik/4.jpg' },
    { img: './assets/img/allChannels_category/tajik/5.jpg' },
    { img: './assets/img/allChannels_category/tajik/6.jpg' }
  ]

  movieChannelsService = [
    { img: './assets/img/allChannels_category/movie/1.jpg' },
    { img: './assets/img/allChannels_category/movie/2.jpg' },
    { img: './assets/img/allChannels_category/movie/3.jpg' },
    { img: './assets/img/allChannels_category/movie/4.jpg' },
    { img: './assets/img/allChannels_category/movie/5.jpg' },
    { img: './assets/img/allChannels_category/movie/6.jpg' },
    { img: './assets/img/allChannels_category/movie/7.jpg' },
    { img: './assets/img/allChannels_category/movie/8.jpg' },
    { img: './assets/img/allChannels_category/movie/9.png' },
    { img: './assets/img/allChannels_category/movie/10.jpg' },
    { img: './assets/img/allChannels_category/movie/11.jpg' },
    { img: './assets/img/allChannels_category/movie/12.jpg' },
    { img: './assets/img/allChannels_category/movie/13.jpg' },
    { img: './assets/img/allChannels_category/movie/14.jpg' },
    { img: './assets/img/allChannels_category/movie/15.jpg' },
    { img: './assets/img/allChannels_category/movie/16.jpg' },
    { img: './assets/img/allChannels_category/movie/17.jpg' },
    { img: './assets/img/allChannels_category/movie/18.jpg' },
    { img: './assets/img/allChannels_category/movie/19.jpg' },
    { img: './assets/img/allChannels_category/movie/20.jpg' },
    { img: './assets/img/allChannels_category/movie/21.jpg' },
    { img: './assets/img/allChannels_category/movie/22.jpg' },
    { img: './assets/img/allChannels_category/movie/23.jpg' },
    { img: './assets/img/allChannels_category/movie/24.jpg' },
    { img: './assets/img/allChannels_category/movie/25.jpg' },
    { img: './assets/img/allChannels_category/movie/26.jpg' },
    { img: './assets/img/allChannels_category/movie/27.jpg' },
    { img: './assets/img/allChannels_category/movie/28.jpg' },
    { img: './assets/img/allChannels_category/movie/29.jpg' },
    { img: './assets/img/allChannels_category/movie/30.jpg' },
    { img: './assets/img/allChannels_category/movie/31.jpg' },
    { img: './assets/img/allChannels_category/movie/32.jpg' },
    { img: './assets/img/allChannels_category/movie/33.jpg' },
    { img: './assets/img/allChannels_category/movie/34.jpg' },
    { img: './assets/img/allChannels_category/movie/35.jpg' },
    { img: './assets/img/allChannels_category/movie/36.jpg' },
    { img: './assets/img/allChannels_category/movie/37.jpg' },
    { img: './assets/img/allChannels_category/movie/38.jpg' },
    { img: './assets/img/allChannels_category/movie/39.jpg' },
    { img: './assets/img/allChannels_category/movie/40.jpg' } 
  ]

  childChannelsService = [
    { img: './assets/img/allChannels_category/child/1.jpg' },
    { img: './assets/img/allChannels_category/child/2.jpg' },
    { img: './assets/img/allChannels_category/child/3.png' },
    { img: './assets/img/allChannels_category/child/4.jpg' },
    { img: './assets/img/allChannels_category/child/5.jpg' },
    { img: './assets/img/allChannels_category/child/6.jpg' },
    { img: './assets/img/allChannels_category/child/7.jpg' },
    { img: './assets/img/allChannels_category/child/8.jpg' },
    { img: './assets/img/allChannels_category/child/9.jpg' },
    { img: './assets/img/allChannels_category/child/10.jpg' },
    { img: './assets/img/allChannels_category/child/11.jpg' },
    { img: './assets/img/allChannels_category/child/12.jpg' }
  ]

  sportChannelsService = [
    { img: './assets/img/allChannels_category/sport/1.png' },
    { img: './assets/img/allChannels_category/sport/2.jpg' },
    { img: './assets/img/allChannels_category/sport/3.jpg' },
    { img: './assets/img/allChannels_category/sport/4.jpg' },
    { img: './assets/img/allChannels_category/sport/5.jpg' },
    { img: './assets/img/allChannels_category/sport/6.jpg' },
    { img: './assets/img/allChannels_category/sport/7.jpg' },
    { img: './assets/img/allChannels_category/sport/8.jpg' },
    { img: './assets/img/allChannels_category/sport/9.jpg' },
    { img: './assets/img/allChannels_category/sport/10.jpg' },
    { img: './assets/img/allChannels_category/sport/11.jpg' },
    { img: './assets/img/allChannels_category/sport/12.jpg' },
    { img: './assets/img/allChannels_category/sport/13.jpg' },
    { img: './assets/img/allChannels_category/sport/14.jpg' },
    { img: './assets/img/allChannels_category/sport/15.jpg' },
    { img: './assets/img/allChannels_category/sport/16.jpg' },
    { img: './assets/img/allChannels_category/sport/17.jpg' },
    { img: './assets/img/allChannels_category/sport/18.jpg' }
  ]

  informativeChannelsService = [
    { img: './assets/img/allChannels_category/informative/1.jpg' },
    { img: './assets/img/allChannels_category/informative/2.jpg' },
    { img: './assets/img/allChannels_category/informative/3.jpg' },
    { img: './assets/img/allChannels_category/informative/4.jpg' },
    { img: './assets/img/allChannels_category/informative/5.jpg' },
    { img: './assets/img/allChannels_category/informative/6.jpg' },
    { img: './assets/img/allChannels_category/informative/7.jpg' },
    { img: './assets/img/allChannels_category/informative/8.jpg' },
    { img: './assets/img/allChannels_category/informative/9.jpg' },
    { img: './assets/img/allChannels_category/informative/10.jpg' },
    { img: './assets/img/allChannels_category/informative/11.jpg' },
    { img: './assets/img/allChannels_category/informative/12.jpg' },
    { img: './assets/img/allChannels_category/informative/13.jpg' },
    { img: './assets/img/allChannels_category/informative/14.jpg' },
    { img: './assets/img/allChannels_category/informative/15.jpg' },
    { img: './assets/img/allChannels_category/informative/16.jpg' },
    { img: './assets/img/allChannels_category/informative/17.jpg' },
    { img: './assets/img/allChannels_category/informative/18.jpg' },
    { img: './assets/img/allChannels_category/informative/19.jpg' },
  ]


    entertainmentChannelsService = [
      { img: './assets/img/allChannels_category/entertainment/1.jpg' },
      { img: './assets/img/allChannels_category/entertainment/2.jpg' },
      { img: './assets/img/allChannels_category/entertainment/3.jpg' },
      { img: './assets/img/allChannels_category/entertainment/4.jpg' },
      { img: './assets/img/allChannels_category/entertainment/5.jpg' },
      { img: './assets/img/allChannels_category/entertainment/6.jpg' },
      { img: './assets/img/allChannels_category/entertainment/7.jpg' }
    ]

    private url = "http://example.tj"

  constructor(private http: HttpClient) {}

  // Local Requests

  // Tarifs
  getLocalTarifs: any = [
    {id: 1, price: '280', gigSpeed: 70, speed: 5, trafficFull: [{ spendTraffic: 0,  remainTraffic: 70}] },
    {id: 2, price: '400', gigSpeed: 100, speed: 8, trafficFull: [{ spendTraffic: 20,  remainTraffic: 80}] },
    {id: 3, price: '600', gigSpeed: 150, speed: 10, trafficFull: [{ spendTraffic: 40,  remainTraffic: 110}] },
    {id: 4, price: '800', gigSpeed: 200, speed: 12, trafficFull: [{ spendTraffic: 60,  remainTraffic: 140}]},
    {id: 5, price: '1200', gigSpeed: 300, speed: 12, trafficFull: [{ spendTraffic: 80,  remainTraffic: 220}]},
    {id: 6, price: '2000', gigSpeed: 500, speed: 15, trafficFull: [{ spendTraffic: 100,  remainTraffic: 400}]}
  ]
  // End of Tarifs


  // Packages
  getLocalPackages: any = [
    {id: 1, name: '10', price: 40, date: new Date()},
    {id: 2, name: '30', price: 120, date: new Date()},
    {id: 3, name: '50', price: 200, date: new Date()},
    {id: 4, name: '100', price: 400, date: new Date()}
  ]
  // End of Packages

  // End of Local Requests



  // Global Requests

  // Auth Request
  authRequest(login: any, password: any) {
    let header: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    })
    return this.http.post( this.url + "/api/auth/login", {"login": login, "password": password}, {headers: header})
  }
  // End of Auth Request

  // End of Global Requests
}
