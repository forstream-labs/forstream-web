// Angular
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';

// Third party libraries
import {LoadingBarHttpClientModule} from '@ngx-loading-bar/http-client';
import {LoadingBarRouterModule} from '@ngx-loading-bar/router';
import {NgxPageScrollModule} from 'ngx-page-scroll';
import {NgxPageScrollCoreModule} from 'ngx-page-scroll-core';

// Routes
import {AppRoutes} from '@app/app.routes';

// Components
import {AppComponent} from '@app/app.component';
import {HeaderComponent} from '@components/header/header.component';
import {LandingPageComponent} from '@components/landing-page/landing-page.component';
import {TermsComponent} from '@components/terms/terms.component';
import {PrivacyComponent} from '@components/privacy/privacy.component';
import {NotFoundComponent} from '@components/not-found/not-found.component';

// Shared Components

// Modals

// Directives

// Pipes

// Services

// Utilities

// Configurations

// Module
@NgModule({
  imports: [
    // Angular
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(AppRoutes.listRoutes()),
    // Third party
    LoadingBarHttpClientModule,
    LoadingBarRouterModule,
    NgxPageScrollModule,
    NgxPageScrollCoreModule.forRoot({
      duration: 500,
    }),
  ],
  declarations: [
    // Components
    AppComponent,
    HeaderComponent,
    LandingPageComponent,
    TermsComponent,
    PrivacyComponent,
    NotFoundComponent,
    // Shared Components
    // Modals
    // Directives
    // Pipes
  ],
  bootstrap: [AppComponent],
})
export class AppModule {

}
