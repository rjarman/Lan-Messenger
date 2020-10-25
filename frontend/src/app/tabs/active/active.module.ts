import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActivePageRoutingModule } from './active-routing.module';

import { ActivePage } from './active.page';
import { ChatService } from '../../chat/chat.service';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, ActivePageRoutingModule],
  declarations: [ActivePage],
  providers: [ChatService],
})
export class ActivePageModule {}
