import { Component, OnInit } from '@angular/core';
import { Genre, PeliculaDetalle } from '../interfaces/interfaces';
import { DataLocalService } from '../services/data-local.service';
import { MoviesService } from '../services/movies.service';
import { ModalController } from '@ionic/angular';
import { DetalleComponent } from '../components/detalle/detalle.component';

@Component({
  selector: 'app-tab3',
  templateUrl: './tab3.page.html',
  styleUrls: ['./tab3.page.scss'],
})
export class Tab3Page implements OnInit {
  peliculas: PeliculaDetalle[] = [];
  generos: Genre[] = [];

  favoritoGenero: any[] = [];
  constructor(private dataLocal: DataLocalService,
    private modalCtrl: ModalController,
    private moviesService: MoviesService) { }

  ngOnInit() {
  }
  async ionViewWillEnter() {
    this.peliculas = await this.dataLocal.cargarFavoritos()
    console.log(this.peliculas);
    ;
    this.moviesService.cargarGeneros()
    .subscribe( resp => {
      console.log( resp );
      this.generos = resp['results'];
    });
    ;
    this.pelisPorGenero( this.generos, this.peliculas );
  }


  pelisPorGenero( generos: Genre[], peliculas: PeliculaDetalle[]  ) {


    this.favoritoGenero = [];

    generos.forEach( genero => {

      this.favoritoGenero.push({
        genero: genero.name,
        pelis: peliculas
        // .filter( peli => {

        //   if (peli.genres){
        //     return peli.genres.find( genre => genre.id === genero.id );
        //   }
        //   else return null;

        // })
      });

    });

    console.log(this.favoritoGenero);


  }


  async detalle( id: number ) {

    const modal = await this.modalCtrl.create({
      component: DetalleComponent,
      componentProps: {
        id
      }
    });

    modal.present();

  }
}
