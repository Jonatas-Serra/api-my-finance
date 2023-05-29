import { Injectable } from '@nestjs/common'
import { CreateTransactionDto } from './dto/create-transaction.dto'
import { UpdateTransactionDto } from './dto/update-transaction.dto'
import {
  Transaction,
  TransactionDocument,
} from './entities/transaction.entity'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'

@Injectable()
export class TransactionsService {
  constructor(
    @InjectModel(Transaction.name)
    private transactionModel: Model<TransactionDocument>,
  ) {}

  create(createTransactionDto: CreateTransactionDto) {
    // add createdAt and updatedAt
    const createdTransaction = new this.transactionModel(
      createTransactionDto,
    )
    return createdTransaction.save()
  }

  findAll() {
    return this.transactionModel.find().exec()
  }

  findOne(id: string) {
    return this.transactionModel.findById(id)
  }

  update(id: string, updateTransactionDto: UpdateTransactionDto) {
    return this.transactionModel.findByIdAndUpdate(
      id,
      updateTransactionDto,
    )
  }

  remove(id: string) {
    return this.transactionModel.findByIdAndDelete(id)
  }
}
