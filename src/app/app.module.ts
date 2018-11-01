import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import 'hammerjs';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatGridListModule} from '@angular/material/grid-list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';

import { AvatarModule } from 'ngx-avatar';
import { NewUserDialogComponent } from './new-user-dialog/new-user-dialog.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule, MatRadioModule, MatSliderModule} from '@angular/material';
import { TeamOverviewComponent } from './team-overview/team-overview.component';
import { TeamComponent } from './team/team.component';
import { AppRoutingModule } from './/app-routing.module';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { BitmojiComponent } from './bitmoji/bitmoji.component';
import { BitmojiEditorComponent } from './bitmoji-editor/bitmoji-editor.component';
import { ArraySliderComponent } from './array-slider/array-slider.component';

@NgModule({
  declarations: [
    AppComponent,
    NewUserDialogComponent,
    TeamOverviewComponent,
    TeamComponent,
    UserDetailComponent,
    BitmojiComponent,
    BitmojiEditorComponent,
    ArraySliderComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    FlexLayoutModule,
    MatGridListModule,
    MatToolbarModule,
    MatSliderModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatDialogModule,
    MatRadioModule,
    AvatarModule,
    AppRoutingModule
  ],
  entryComponents: [
    NewUserDialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
