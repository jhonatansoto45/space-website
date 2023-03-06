import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpaceRoutingModule } from './space-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { DestinationComponent } from './pages/destination/destination.component';
import { CrewComponent } from './pages/crew/crew.component';
import { TechnologyComponent } from './pages/technology/technology.component';
import { CircleExploreComponent } from './components/circle-explore/circle-explore.component';
import { PlanetsComponent } from './components/planets/planets.component';
import { PlanetPipe } from './pipes/planet.pipe';


@NgModule({
  declarations: [
    HomeComponent,
    DestinationComponent,
    CrewComponent,
    TechnologyComponent,
    CircleExploreComponent,
    PlanetsComponent,
    PlanetPipe
  ],
  imports: [
    CommonModule,
    SpaceRoutingModule
  ]
})
export class SpaceModule { }
