import mongoose, { HydratedDocument } from 'mongoose';
import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';

export type SosDocument = HydratedDocument<Sos>;

@Schema()
export class Sos {
  @Prop({ type: mongoose.Schema.Types.ObjectId })
  id: number;

  @Prop()
  urgencia: string;

  @Prop()
  unidade: string;

  @Prop([String])
  necessidades: string[];

  @Prop([String])
  sobressalentes: string[];

  @Prop(
    raw({
      quantidade: { type: Number },
      grupos: { type: [String] },
    }),
  )
  pessoas: Record<string, any>;

  @Prop([String])
  contatos: string[];

  @Prop(
    raw({
      lat: { type: Number },
      lng: { type: Number },
    }),
  )
  localizacao: Record<string, any>;
}

export const SosSchema = SchemaFactory.createForClass(Sos);
