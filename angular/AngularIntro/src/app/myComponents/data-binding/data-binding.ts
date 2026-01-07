import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';//two way data binding (ngModel) için gerekli

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule], //template içinde ngModel kullanabilmek için FormsModule'ü import ettik (ngModel (twoWayDataBinding) FormsModule içinde tanımlıdır)
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css',
})
export class DataBinding {
  //basit bir string
  pageTitle: string = 'Data Binding - Angular';

  //interpolation içinde expression kullanımı
  numberA: number = 5;
  numberB: number = 7;

  // Property Binding([])
  angularLogoUrl: string = 'https://angular.io/assets/images/logos/angular/angular.png';

  //Bizim butonumuzun pasifliğini sağlayacak boolean property
  isSaveDisabled: boolean = true;

  //Event Binding (())
  //Butona basınca artmasını istediğimiz sayaç
  clickCount: number = 0;

  //Bu metot click eventine bağlanacak
  onIncrementClick() {
    //Butona her basıldığında clickCount'u 1 artır
    this.clickCount++;
  }

  //Input texte tarafında bind işlemi yapılacak 
  //Başlangıç değeri property binding ile inputa bağlanacak
  initialInputValue: string = "Merhaba Angular";

  //son input değerini tutacak property
  //Kullaıcının inputa girdiği son değeri tutacak property
  lastInputValue: string = "";

  //input eventi çağıralacak metot
  onTextInputChange(event: Event) {
    //Angular html tarafında bu metot çağrıldığında bize event nesnesi gönderecek
    //html tarafı angularda $event keyword'ü yapar
    //biz bu event nesnesi üzerinden target'ı alıp onu HTMLInputElement tipine cast ettiğimiz zaman elimize istediğimiz tag geçecek
    const inputValue = event.target as HTMLInputElement;
    this.lastInputValue = inputValue.value;
  }

  //Two Way Data Binding ([(ngModel)])
  //çift yönlü veri bağlama için kullanılacak property
  twoWayName: string = "İsmim Angular";

  resetTwoWayName() {
    this.twoWayName = "";
  }


}
