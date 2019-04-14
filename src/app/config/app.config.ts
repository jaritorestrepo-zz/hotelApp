import { Injectable } from '@angular/core';
import { LANGUAGE_CONFIG } from '@config/language.config';
import { MENU_CONFIG } from '@config/menu.config';
import { environment } from '@environments/environment';
import { Menu } from '@shared/interfaces/menu';

@Injectable()
export class AppConfig {
  readonly URL: string = environment.apiUrl;
  readonly LANG = LANGUAGE_CONFIG;
  readonly MENU: Array<Menu> = MENU_CONFIG;
  readonly DESTOK: number = 768;
}
