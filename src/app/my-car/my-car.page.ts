import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MyCarsServiceService } from '../my-cars-service.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-my-car',
  templateUrl: './my-car.page.html',
  styleUrls: ['./my-car.page.scss'],
})
export class MyCarPage implements OnInit {

  constructor(
    private route : ActivatedRoute,private router: Router,
    private mycarsservice : MyCarsServiceService, private alertcontroller : AlertController
  ) { }
 cars = [];

 singlecar;
  ngOnInit() {
    this.cars = this.mycarsservice.returnCarsList();
    // this.students = this.studentsListService.getAllStudents();

    this.route.paramMap.subscribe(paramMap => {
      const val = paramMap.get('carnum');

      this.singlecar = this.cars.find(obj => {
        return obj.num.includes(val);
      });
    });
  }

  async deleteStudent() {
    console.log('deleteStudent', this.singlecar);

    const alert = await this.alertcontroller.create({
      header: 'Alert',
      // subHeader: 'Subtitle',
      message: `Are you sure you want to remove ${this.singlecar.name}?`,
      // buttons: ['OK']
      buttons: [
        {
          text: 'Cancel'
        },
        {
          text: 'Okay',
          handler: () => {
            console.log('Confirm Okay');
            this.mycarsservice.deleteCar(this.singlecar.num);
            this.router.navigateByUrl('/my-cars-list');
          }
        }
      ]
    });

    alert.present();

    // this.everythingstudentService.deleteStudent(this.singleStudent.id);
    // const url = `studentslist`;

    // this.router.navigateByUrl(url);

    // this.studentsListService.deleteAStudent(this.singleStudent.id);
  }

}
