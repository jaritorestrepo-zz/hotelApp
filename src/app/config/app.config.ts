import { Injectable } from '@angular/core';
import { LANGUAGE_CONFIG } from '@config/language.config';
import { environment } from '@environments/environment';

@Injectable()
export class AppConfig {
  readonly URL: string = environment.apiUrl;
  readonly LANG = LANGUAGE_CONFIG;
  readonly DESTOK: number = 768;
}
