export class CreateSoDto {
  urgencia: string;
  unidade: string;
  necessidades: string[];
  sobressalentes: string[];
  pessoas: Record<string, any>;
  contatos: string[];
  localizacao: Record<string, any>;
}
