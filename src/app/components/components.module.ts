import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetalleComponent } from './detalle/detalle.component';
import { IonicModule } from '@ionic/angular';
import { PipesModule } from "../pipes/pipes.module";
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SlideshowBackdropComponent } from './slideshow-backdrop/slideshow-backdrop.component';
import { SlideshowParesComponent } from './slideshow-pares/slideshow-pares.component';
import { SlideshowPosterComponent } from './slideshow-poster/slideshow-poster.component';



@NgModule({
    declarations: [
        DetalleComponent,
        SlideshowBackdropComponent,
        SlideshowParesComponent,
        SlideshowPosterComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    exports: [
        DetalleComponent,
        SlideshowBackdropComponent,
        SlideshowParesComponent,
        SlideshowPosterComponent
    ],
    imports: [
        CommonModule,
        IonicModule,
        PipesModule
    ]
})
export class ComponentsModule { }
