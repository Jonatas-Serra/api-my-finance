import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { TransactionsModule } from './transactions/transactions.module'
import 'dotenv/config'

@Module({
  imports: [
    MongooseModule.forRoot(
      `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@myfinance.izkzvzb.mongodb.net/?retryWrites=true&w=majority`,
    ),
    TransactionsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
