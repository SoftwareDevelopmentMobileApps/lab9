import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-status',
  templateUrl: './status.page.html',
  styleUrls: ['./status.page.scss'],
})
export class StatusPage implements OnInit {
  myStatus:string = "";
  constructor(private storage:Storage, private navCtrl:NavController) { }

  ngOnInit() {
  }

  async ionViewWillEnter() {
    await this.storage.create();
    this.myStatus = await this.storage.get('status');
  }

  async saveStatus() {
    await this.storage.set('status', this.myStatus)
    .then(
      ()=>{
        this.navCtrl.navigateBack('/home')
      })
    .catch();
  }

}
