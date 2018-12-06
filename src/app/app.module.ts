import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { MainContentComponent } from './main-content/main-content.component';
import { MainFooterComponent } from './main-footer/main-footer.component';
import { FormsModule } from '@angular/forms';
import { GameComponent } from './game/game.component';
import { AppRoutes } from './app.routes';
import { ToastModule } from './toast/toast.module';




@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent,
    MainContentComponent,
    MainFooterComponent,
    GameComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutes,
    ToastModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
