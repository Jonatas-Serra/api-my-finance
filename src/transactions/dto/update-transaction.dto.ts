import { PartialType } from '@nestjs/mapped-types'
import { CreateTransactionDto } from './create-transaction.dto'

export class UpdateTransactionDto extends PartialType(
  CreateTransactionDto,
) {
  title: string
  amount: number
  type: string
  category: string
}
