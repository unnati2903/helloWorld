import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { HelloWorldPropertyBindingComponent } from './hello-world-property-binding/hello-world-property-binding.component';
import { HelloWorldInterpolationComponent } from './hello-world-interpolation/hello-world-interpolation.component';
import { HelloWorldEventBindingComponent } from './hello-world-event-binding/hello-world-event-binding.component';
import { HelloWorldNgIfComponent } from './hello-world-ng-if/hello-world-ng-if.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    
    HelloWorldPropertyBindingComponent,
    HelloWorldInterpolationComponent,
    HelloWorldEventBindingComponent,
    HelloWorldNgIfComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
