import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { SidebarComponent } from './shared/components/sidebar.component';
import { SidebarItemsComponent } from './shared/components/sidebar-items.component';
import { HeaderComponent } from './shared/components/header.component';
import { FollowBarComponent } from './shared/components/follow-bar.component';
import { AvatarComponent } from './shared/components/avatar.component';
import { LoginModalComponent } from './shared/auth/login-modal/login-modal.component';
import { RegisterModalComponent } from './shared/auth/register-modal/register-modal.component';
import { ModalComponent } from './shared/components/modal.component';
import { ButtonComponent } from './shared/components/button.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { LoaderComponent } from './shared/components/loader.component';
import { EditUserComponent } from './edit-user/edit-user.component';


@NgModule({
  declarations: [
    LayoutComponent,
    SidebarComponent,
    SidebarItemsComponent,
    HeaderComponent,
    FollowBarComponent,
    AvatarComponent,
    LoginModalComponent,
    RegisterModalComponent,
    ModalComponent,
    ButtonComponent,
    UserProfileComponent,
    LoaderComponent,
    EditUserComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    ReactiveFormsModule
  ]
})
export class MainModule { }
