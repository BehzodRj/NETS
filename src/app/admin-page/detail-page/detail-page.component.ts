import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequestsService } from 'src/app/all.service';
import { Chart } from  'chart.js'
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.scss']
})
export class DetailPageComponent implements OnInit {
  detailForm!: FormGroup
  chart: any;
  data: any = []
  dataLabels: any = []
  sendMB: any

  constructor(private router: Router, private request: RequestsService) {}

  ngOnInit() {
    this.detailForm = new FormGroup({
      start_date: new FormControl('', Validators.required),
      last_date: new FormControl('', Validators.required)
    })

    let date = new Date()
    console.log(date.toDateString());
    
    this.request.getRequest(`/api/cust_cab/get_my_traffic?created_at>=${date.toDateString()}&created_at<=${date.toDateString()}`).subscribe( (response: any) => {
      let num = 0
      response.forEach( (element: any) => {
        num += element.in_bytes
        this.data.push(element.in_bytes / 1000 / 1000)
        this.dataLabels.push(element.in_bytes / 1000 / 1000)
      });
      this.sendMB = num / 1000 / 1000
      this.chart = new Chart('MyChart', {
        type: 'line',
        data: {
          labels: this.dataLabels,
          datasets: [
            {
              label: "Трафик",
              data: this.data,
              backgroundColor: 'red'
            } 
          ]
        },
        options: {
          maintainAspectRatio: false,
          spanGaps: false,
          elements: {
            line: {
              tension: 0.1,
              fill: false,
              borderColor: 'red'
            }
          },
          plugins: {
            filler: {
              propagate: false,
            }
          },
        }
      });
    }, error => {
      this.request.error(error)
    })
  }

  filterByDate() {
    this.data = []
    this.dataLabels = []
    const detailFormData = {...this.detailForm.value}
    this.request.getRequest(`/api/cust_cab/get_my_traffic?created_at>=${detailFormData.start_date}&created_at<=${detailFormData.last_date}`).subscribe( (response: any) => {
      let num = 0
      response.forEach( (element: any) => {
        num += element.in_bytes
        this.data.push(element.in_bytes / 1000 / 1000)
        this.dataLabels.push(element.in_bytes / 1000 / 1000)
      });
      this.sendMB = num / 1000 / 1000
      this.chart = new Chart('MyChart', {
        type: 'line',
        data: {
          labels: this.dataLabels,
          datasets: [
            {
              label: "Трафик",
              data: this.data,
              backgroundColor: 'red'
            } 
          ]
        },
        options: {
          maintainAspectRatio: false,
          spanGaps: false,
          elements: {
            line: {
              tension: 0.1,
              fill: false,
              borderColor: 'red'
            }
          },
          plugins: {
            filler: {
              propagate: false,
            }
          },
        }
      });
    }, error => {
      this.request.error(error)
    })
  }
  
  logOut() {
    localStorage.clear()
    this.router.navigate(['/'])
  }

}
