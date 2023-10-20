import { provideAnimations } from '@angular/platform-browser/animations';
import { TuiRootModule } from '@taiga-ui/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { ApplicationConfig, importProvidersFrom } from '@angular/core';

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimations(),
    provideRouter(routes),
    importProvidersFrom(TuiRootModule),
  ],
};
