import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SosModule } from './sos/sos.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    SosModule,
    MongooseModule.forRoot('mongodb://localhost:27017/sos-rs'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
