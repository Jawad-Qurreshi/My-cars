import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyCarsServiceService {
  cars = [
    { num: '3198', name: 'SAAD FAROOQ' },
    { num: '3199', name: 'ABDULLAH KHAN' },
    { num: '3200', name: 'AHSAN EJAZ' },
    { num: '3201', name: 'SAFWAN MAHMOOD' },
    { num: '3204', name: 'MUHAMMAD FRAZ AHMAD' },
    { num: '3217', name: 'MUHAMMAD SHAHZAIB' },
    { num: '3222', name: 'USAMA ZAHnum' },
    { num: '3223', name: 'MUHAMMAD IKRAM GONDAL' },
    { num: '3225', name: 'MUHAMMAD LUQMAN ALI' },
    { num: '3227', name: 'MUHAMMAD OWAIS  (CR)' },
    { num: '3238', name: 'JAWAD MEHMOOD QURESHI' },
    { num: '3240', name: 'USAMA KHURSHnum' },
    { num: '3251', name: 'MUHAMMAD numREES' },
    { num: '3279', name: 'MUHAMMAD HAMZA KHALnum MIRZA' },
    { num: '3280', name: 'MUHAMMAD FARMAN RAZA' },
    { num: '3281', name: 'MUHAMMAD RIFFAT ABBAS' },
  ]
  constructor() { }
  returnCarsList() {
    return this.cars;
  }

  deleteCar(num) {
    this.cars = this.cars.filter(e => {
      return e.num !== num;
    });
  }
}
