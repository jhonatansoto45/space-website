import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpaceRoutingModule } from './space-routing.module';

import { CircleExploreComponent } from './components/circle-explore/circle-explore.component';
import { CrewComponent } from './pages/crew/crew.component';
import { DestinationComponent } from './pages/destination/destination.component';
import { HomeComponent } from './pages/home/home.component';
import { PlanetsComponent } from './components/planets/planets.component';
import { PlanetPipe } from './pipes/planet.pipe';
import { TechnologyComponent } from './pages/technology/technology.component';
import { TabsComponent } from './components/tabs/tabs.component';

@NgModule({
  declarations: [
    HomeComponent,
    CircleExploreComponent,
    CrewComponent,
    DestinationComponent,
    PlanetsComponent,
    PlanetPipe,
    TechnologyComponent,
    TabsComponent,
  ],
  imports: [CommonModule, SpaceRoutingModule],
})
export class SpaceModule {}
