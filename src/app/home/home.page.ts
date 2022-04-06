import { Component } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
myStatus:string = "";
  constructor(private storage:Storage) {}
  
  async ionViewWillEnter() {
    await this.storage.create();
    this.myStatus = await this.storage.get('status');
  }
}
