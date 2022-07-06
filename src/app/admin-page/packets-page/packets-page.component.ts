import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RequestsService } from 'src/app/all.service';

@Component({
  selector: 'app-packets-page',
  templateUrl: './packets-page.component.html',
  styleUrls: ['./packets-page.component.scss']
})
export class PacketsPageComponent implements OnInit {
  packagesData: any = []

  constructor(private route: ActivatedRoute, private request: RequestsService) { }

  ngOnInit() {
    this.route.params.subscribe( (param: any) => {
      localStorage.setItem('packages_id', param.id)
      this.packagesData = this.request.getLocalPackages.filter( (res: any) => res.id == param.id )[0]
    })
  }

}
