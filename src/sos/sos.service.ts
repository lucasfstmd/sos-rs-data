import { Injectable } from '@nestjs/common';
import { CreateSoDto } from './dto/create-so.dto';
import { UpdateSoDto } from './dto/update-so.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Sos } from './entities/sos.entity';
import { Model } from 'mongoose';

@Injectable()
export class SosService {
  constructor(@InjectModel(Sos.name) private sosModel: Model<Sos>) {}

  async create(createSoDto: CreateSoDto): Promise<Sos> {
    const createdSos = new this.sosModel(createSoDto);
    return createdSos.save();
  }

  async findAll(): Promise<Sos[]> {
    return this.sosModel.find().exec();
  }

  async findOne(id: string): Promise<Sos> {
    return this.sosModel.findById(id).exec();
  }

  async update(id: string, updateSoDto: UpdateSoDto) {
    return this.sosModel.findByIdAndUpdate(id, updateSoDto).exec();
  }

  async remove(id: string) {
    return this.sosModel.findByIdAndDelete(id).exec();
  }
}
