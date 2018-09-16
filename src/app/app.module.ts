import {NgtUniversalModule} from '@ng-toolkit/universal';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import {TooltipModule} from 'ngx-bootstrap/tooltip';
import {ModalModule} from 'ngx-bootstrap/modal';
import {AppComponent} from './app.component';
import {Ng2DeviceDetectorModule} from 'ng2-device-detector';
import {BlogComponent} from './blog/blog.component';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {NotfoundComponent} from './notfound/notfound.component';
import {LoadingBarRouterModule} from '@ngx-loading-bar/router';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {BlogSingleComponent} from './blog-single/blog-single.component';
import {Interceptor} from './interceptor';
import { DeviceDetectorModule } from 'ngx-device-detector';
const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'blog', component: BlogComponent, pathMatch: 'full'},
  {path: 'blog/:sef', component: BlogSingleComponent, pathMatch: 'full'},
  {path: '404', component: NotfoundComponent, pathMatch: 'full'},
  {path: '**', redirectTo: '404'}
];

@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    HomeComponent,
    NotfoundComponent,
    BlogSingleComponent
  ],
  imports: [
    CommonModule,
    NgtUniversalModule,
    RouterModule.forRoot(routes, {useHash: false}),
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    Ng2DeviceDetectorModule.forRoot(),
    LoadingBarRouterModule,
    HttpClientModule,
    DeviceDetectorModule.forRoot()
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: Interceptor,
      multi: true
    }
  ],
})
export class AppModule {
}
