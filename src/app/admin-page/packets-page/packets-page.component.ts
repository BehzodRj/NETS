import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestsService } from 'src/app/all.service';

@Component({
  selector: 'app-packets-page',
  templateUrl: './packets-page.component.html',
  styleUrls: ['./packets-page.component.scss']
})
export class PacketsPageComponent implements OnInit {
  packagesData: any = []
  deletePackageButton = true

  constructor(private route: ActivatedRoute, private router: Router, private request: RequestsService) { }

  ngOnInit() {
    this.route.params.subscribe( (param: any) => {
      localStorage.setItem('packages_id', param.id)
      this.packagesData = this.request.getLocalPackages.filter( (res: any) => res.id == param.id )[0]
    })
    
    let local: any = localStorage.getItem('packages_id')
    if( local >= 1) {
      this.deletePackageButton = true
    } else if(local < 1) {
      this.deletePackageButton = false
      alert('s')
    }
  }

  deletePackage() {
    this.packagesData = []
    localStorage.setItem('packages_id', '0')
    this.deletePackageButton = false
  }

  logOut() {
    localStorage.clear()
    this.router.navigate(['/'])
  }

}
