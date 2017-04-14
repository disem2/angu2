import { NgModule } from '@angular/core';
import { DurationPipe } from './duration-pipe';
import { OrderPipe } from './order-pipe';

@NgModule({
  declarations: [ DurationPipe, OrderPipe ],
  exports: [ DurationPipe, OrderPipe ]
})

export class PipesModule {}
