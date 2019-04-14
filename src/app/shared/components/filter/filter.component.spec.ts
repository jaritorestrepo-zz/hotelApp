// import { async, ComponentFixture, TestBed } from '@angular/core/testing';
// import { By } from '@angular/platform-browser';
// import { RouterTestingModule } from '@angular/router/testing';
// import { AppComponent } from '@app/app.component';
// import { FakeBcAdalAngularService } from '@app/core/fakes/fake.bc-adal-angular.service';
// import { TestModule } from '@app/test.module';
// import { AppConfig } from '@config/app.config';
// import { FakeMenu } from '@core/fakes/fake.menu.service';
// import { MenuComponent } from '@core/menu/menu.component';
// import { BreadcrumbComponent } from '@shared/components/breadcrumb/breadcrumb.component';
// import { LoadingViewComponent } from '@shared/components/loading-view/loading-view.component';
// import { BcAdalAngularService } from 'bc-adal-angular';
// import { NgIdleModule } from 'ng2-idle-core';
// import { BehaviorSubject, of } from 'rxjs';

// describe('MenuComponent', () => {
//   let appConfig: AppConfig;
//   let component: MenuComponent;
//   let fixture: ComponentFixture<MenuComponent>;
//   const loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
//     false
//   );
//   const menu = FakeMenu;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [
//         AppComponent,
//         BreadcrumbComponent,
//         LoadingViewComponent,
//         MenuComponent
//       ],
//       imports: [
//         TestModule,
//         NgIdleModule.forRoot(),
//         RouterTestingModule.withRoutes([])
//       ],
//       providers: [
//         { provide: BcAdalAngularService, useClass: FakeBcAdalAngularService }
//       ]
//     });

//     appConfig = TestBed.get(AppConfig);
//     TestBed.compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(MenuComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   afterEach(() => {
//     localStorage.removeItem('currentUser');
//   });

//   it('should create component', () => {
//     expect(component).toBeTruthy();
//   });

//   describe('not logged in', () => {
//     it('should not show menu', () => {
//       loggedIn.next(false);
//       component.isLoggedIn$ = loggedIn.asObservable();
//       let response;
//       component.isLoggedIn$.subscribe(result => {
//         response = result;
//       });
//       fixture.detectChanges();
//       const menuElement = fixture.debugElement.query(By.css('.menu'));
//       expect(response).toBeFalsy();
//       expect(menuElement).toBeNull();
//     });
//   });

//   describe('logged in', () => {
//     let response;
//     beforeEach(() => {
//       loggedIn.next(true);
//       component.isLoggedIn$ = loggedIn.asObservable();
//       component.isLoggedIn$.subscribe(result => {
//         response = result;
//       });
//       fixture.detectChanges();
//     });

//     it('should show menu', () => {
//       const menuElement = fixture.debugElement.query(By.css('.menu'));
//       expect(response).toBeTruthy();
//       expect(menuElement).not.toBeNull();
//     });

//     it('should show menu with title', () => {
//       const title = fixture.debugElement.query(By.css('mat-toolbar-row'))
//         .nativeElement;
//       expect(title.textContent).toBe(appConfig.LANG.app);
//     });

//     it('should create menu', () => {
//       component.ngOnInit();
//       fixture.detectChanges();
//       loggedIn.next(true);
//       component.isLoggedIn$ = loggedIn.asObservable();
//       component.menu = menu;
//       fixture.detectChanges();
//       const sidenav = fixture.debugElement.query(By.css('.sidenav'))
//         .nativeElement;
//       const icon = fixture.debugElement.query(By.css('.sidenav .mat-list-icon'))
//         .nativeElement;
//       expect(sidenav).not.toBeNull();
//       expect(icon).not.toBeNull();
//       expect(icon.getAttribute('class')).toContain('fa-' + menu[0].icon);
//     });

//     it('should log out by pressing the power off button', () => {
//       spyOn(component.authenticationService, 'logout');
//       const bLogout = fixture.debugElement.query(By.css('.b-logout'))
//         .nativeElement;
//       bLogout.click();
//       fixture.detectChanges();
//       expect(component.authenticationService.logout).toHaveBeenCalled();
//     });
//   });
// });
