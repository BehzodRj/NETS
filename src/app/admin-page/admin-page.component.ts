import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestsService } from '../all.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent implements OnInit {
  tarifsData: any = []
 
 
  constructor(private router: Router, private route: ActivatedRoute, private request: RequestsService) { }

  ngOnInit() {
    this.route.params.subscribe( (param: any) => {
      localStorage.setItem('tarifs_id', param.id)
      this.tarifsData = this.request.getLocalTarifs.filter( (res: any) => res.id == param.id )[0]
    })
  }

  logOut() {
    localStorage.clear()
    this.router.navigate(['/'])
  }

}
