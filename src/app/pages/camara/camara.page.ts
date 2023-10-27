import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-camara',
  templateUrl: './camara.page.html',
  styleUrls: ['./camara.page.scss'],
})
export class CamaraPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  goBack() {
    this.navCtrl.back();
  }

  ngOnInit() {
  }

}
