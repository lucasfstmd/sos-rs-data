import { Module } from '@nestjs/common';
import { SosService } from './sos.service';
import { SosController } from './sos.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Sos, SosSchema } from './entities/sos.entity';

@Module({
  imports: [MongooseModule.forFeature([{ name: Sos.name, schema: SosSchema }])],
  controllers: [SosController],
  providers: [SosService],
})
export class SosModule {}
