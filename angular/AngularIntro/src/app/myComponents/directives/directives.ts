import { Component } from '@angular/core';
import { NgIf, NgFor, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';

@Component({
  selector: 'app-directives',
  imports: [NgIf, NgFor, NgSwitch, NgSwitchCase, NgSwitchDefault],
  templateUrl: './directives.html',
  styleUrl: './directives.css',
})
export class Directives {
  //1) *ngIf örneği için kullanılcak state
  isLoggedIn: boolean = false;
  username: string = "berkant";

  //butona basınca login/logout değişecek
  toggleLogin() {
    this.isLoggedIn = !this.isLoggedIn;
  }

  //2) *ngFor örneği için kullanılcak state
  students: string[] = ['Ali', 'Veli', 'Ayşe', 'Fatma'];

  //object array
  courses = [
    { id: 1, name: 'Angular', level: 'Beginner' },
    { id: 2, name: '.Net', level: 'Intermediate' },
    { id: 3, name: 'Architecture', level: 'Advanced' },
  ];

  //Listeleri toogle şekilde göstermek/gizlemek için kullanılcak değişkenler
  showStudents: boolean = true;
  toogleStudent() : void {
    this.showStudents = !this.showStudents;
  }

  //3) *ngSwitch örneği için kullanılcak state
  selectedRole: string = "student"; //student, teacher, admin

  //role değiştirme metodu
  setRole(role: string) : void {
    this.selectedRole = role;
  }

}
