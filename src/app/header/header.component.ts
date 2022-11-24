import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RequestsService } from '../all.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  authForm!: FormGroup
  typePassword = 'password'
  modalSignIn = false
  route = ""


  constructor(private router: Router, private request: RequestsService ) { }

  ngOnInit() {
    this.route = this.router.url;

    this.authForm = new FormGroup({
      id: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    })

    if( localStorage.getItem('access_token') ) {
      this.router.navigate(['/admin'])
    }
  }

  routerVacancy() {
    localStorage.setItem('showId', '1')
  }

  changeTypePassword() {
    this.typePassword = 'text'
  }

  changeTypeText() {
    this.typePassword = 'password'
  }


  logIn() {
    const authFormData = {...this.authForm.value}
    this.request.authRequest(authFormData.id, authFormData.password).subscribe( (response: any) => {
      console.log(response);
      localStorage.setItem('access_token', response.access_token)
      localStorage.setItem('refresh_token', response.refresh_token)
      this.router.navigate(['/admin'])
    }, error => {
      alert(error.error.Error)
    })
    
  }
  
}
