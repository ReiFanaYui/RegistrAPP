import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.page.html',
  styleUrls: ['./noticias.page.scss'],
})
export class NoticiasPage implements OnInit {

  posts: any[] = [];
  constructor(private navCtrl: NavController,private apiService: ApiService) { }

  ngOnInit() {
    this.loadPosts();
  }

  goBack() {
    this.navCtrl.back();
  }

  loadPosts() {
    this.apiService.getPosts().subscribe(
      data => {
        this.posts = data;
      },
      error => {
        console.error('Error al obtener posts:', error);
      }
    );
  }

}
