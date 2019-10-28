import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyCarsServiceService } from '../my-cars-service.service';

@Component({
  selector: 'app-my-cars-list',
  templateUrl: './my-cars-list.page.html',
  styleUrls: ['./my-cars-list.page.scss'],
})
export class MyCarsListPage implements OnInit {

  cars = [];
  constructor(
    private router : Router,private mycarsservice : MyCarsServiceService
  ) { }

  ngOnInit() {
  }
  changeUrl(user) {
    const num = user.num.substring(0, 4);
    const url = `my-cars-list/${num}`;

    this.router.navigateByUrl(url);

    // or

    // this.router.navigate([url]);
  }

  ionViewDidEnter() {
    console.log('view Enter');
    this.cars = this.mycarsservice.returnCarsList();
  }

}
