import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { TodayPicturesGalleryComponent } from './pages/today-pictures-gallery/today-pictures-gallery.component';
import { UserPicturesGalleryComponent } from './pages/user-pictures-gallery/user-pictures-gallery.component';
import { ErrorComponent } from './pages/error/error.component';
import { ThumbnailViewComponent } from './components/thumbnail-view/thumbnail-view.component';
import { ThumbnailItemComponent } from './components/thumbnail-item/thumbnail-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    HomeComponent,
    TodayPicturesGalleryComponent,
    HeaderComponent,
    FooterComponent,
    UserPicturesGalleryComponent,
    ErrorComponent,
    ThumbnailViewComponent,
    ThumbnailItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
