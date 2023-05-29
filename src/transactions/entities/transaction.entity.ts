import { Document } from 'mongoose'
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

export type TransactionDocument = Transaction & Document

@Schema({ autoIndex: true })
export class Transaction {
  @Prop({ required: true })
  title: string

  @Prop({ required: true })
  amount: number

  @Prop({ required: true })
  type: string

  @Prop({ required: true })
  category: string

  @Prop()
  createdAt: Date

  @Prop()
  updatedAt: Date
}

export const TransactionSchema =
  SchemaFactory.createForClass(Transaction)

// createdAt and updatedAt are automatically added
TransactionSchema.pre<TransactionDocument>('save', function (next) {
  const now = new Date()
  this.updatedAt = now
  if (!this.createdAt) {
    this.createdAt = now
  }
  next()
})
