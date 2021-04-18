import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule, EVENT_MANAGER_PLUGINS } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BgColorDirective } from './bg-color.directive';
import { ZonelessEventPluginService } from './click-plugin.service';
import { DisplayComponent } from './display/display.component';
import { ServerInputComponent } from './server-input/server-input.component';


@NgModule({
  declarations: [
    AppComponent,
    ServerInputComponent,
    DisplayComponent,
    BgColorDirective
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    {
      provide: EVENT_MANAGER_PLUGINS,
      useClass: ZonelessEventPluginService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
