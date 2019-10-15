import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { UsingEntityCommandSharedModule } from 'app/shared/shared.module';
import { UsingEntityCommandCoreModule } from 'app/core/core.module';
import { UsingEntityCommandAppRoutingModule } from './app-routing.module';
import { UsingEntityCommandHomeModule } from './home/home.module';
import { UsingEntityCommandEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { JhiMainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    UsingEntityCommandSharedModule,
    UsingEntityCommandCoreModule,
    UsingEntityCommandHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    UsingEntityCommandEntityModule,
    UsingEntityCommandAppRoutingModule
  ],
  declarations: [JhiMainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [JhiMainComponent]
})
export class UsingEntityCommandAppModule {}
