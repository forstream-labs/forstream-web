import {Routes} from '@angular/router';

import {LandingPageComponent} from '@components/landing-page/landing-page.component';
import {TermsComponent} from '@components/terms/terms.component';
import {PrivacyComponent} from '@components/privacy/privacy.component';
import {NotFoundComponent} from '@components/not-found/not-found.component';

export class AppRoutes {

  public static listRoutes(): Routes {
    return [
      {path: '', component: LandingPageComponent},
      {path: 'terms', component: TermsComponent},
      {path: 'privacy', component: PrivacyComponent},
      {path: '**', component: NotFoundComponent},
    ];
  }
}
