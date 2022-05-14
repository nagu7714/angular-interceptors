import { Component, OnInit } from '@angular/core';
import { HttpserviceService } from './httpservice.service';
import {FormControl} from  '@angular/forms';
import {repos} from './repo'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angular-interceptors';
  userName:string= 'nagu7714';
  repos!: repos[];
  loading: boolean = false;
  errorMessage!: string;

  
  constructor(private httpservice:HttpserviceService){}
  ngOnInit(): void {
    //this.getRepos();
    this.getUsers()
  }

  

  getUsers(){
    this.httpservice.getUsers().subscribe(
      (response)=>{console.log(response);
      })
  }

  public getRepos() {
    this.loading = true;
    this.errorMessage = "";
    this.httpservice.getRepos(this.userName)
      .subscribe(
        (response) => {                           //next() callback
          console.log('response received')
          this.repos = response; 
        },
        (error) => {                              //error() callback
          console.error('Request failed with error')
          this.errorMessage = error;
          this.loading = false;
        },
        () => {                                   //complete() callback
          console.error('Request completed')      //This is actually not needed 
          this.loading = false; 
        })
  }
  
}


