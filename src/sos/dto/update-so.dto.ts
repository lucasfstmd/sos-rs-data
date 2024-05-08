import { PartialType } from '@nestjs/mapped-types';
import { CreateSoDto } from './create-so.dto';

export class UpdateSoDto extends PartialType(CreateSoDto) {
  urgencia: string;
  unidade: string;
  necessidades: string[];
  sobressalentes: string[];
  pessoas: Record<string, any>;
  contatos: string[];
  localizacao: Record<string, any>;
}
