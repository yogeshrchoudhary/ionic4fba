import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private alertCtrl: AlertController
    ) {}

  async onTestClicked() {
    let alertBox = await this.alertCtrl.create({
      header: "FBA",
      message: 'Clicked!!',
      buttons: ['OK']
    });
    alertBox.present(); 
  }
}
