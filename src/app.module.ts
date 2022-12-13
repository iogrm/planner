import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PlaceModule } from './place/place.module';
import { UserModule } from './user/user.module';
import { TypeOrmConfigService } from './shared/typeorm/typeorm.service';
import { QuestionModule } from './question/question.module';
import { NumberStringScalar } from './scalar/national_id.scalar';
import { TraitScalar } from './scalar/trait.scalar';
import { AnswerModule } from './answer/answer.module';
import { allScalars } from './scalar';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({ useClass: TypeOrmConfigService }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      autoSchemaFile: 'schema.gql',
      driver: ApolloDriver,
      installSubscriptionHandlers: true,
    }),
    UserModule,
    PlaceModule,
    QuestionModule,
    AnswerModule,
  ],
  controllers: [AppController],
  providers: [AppService, ...allScalars],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
