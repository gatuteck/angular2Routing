import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router'; 
import {HomeService} from './home.service';
@Component({
   selector: 'my-home',
   templateUrl: 'app/home/home.component.html',
   styleUrls: ['app/home/home.component.css'] 
})

export class HomeComponent implements OnInit {
   ngOnInit() {
       
   } 
}