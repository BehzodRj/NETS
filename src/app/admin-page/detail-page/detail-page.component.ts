import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequestsService } from 'src/app/all.service';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.scss']
})
export class DetailPageComponent implements OnInit {


  constructor(private router: Router, private request: RequestsService) { }

  ngOnInit(): void {

  }
  logOut() {
    localStorage.clear()
    this.router.navigate(['/'])
  }

}
