import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PlaceModule } from './place/place.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { UserModule } from './user/user.module';
import GraphQLJSON from 'graphql-type-json';
import { NumberStringScalar } from './scalar/national_id.scalar';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { DataSource } from 'typeorm';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'fred',
      database: 'test',
      entities: [User],
      synchronize: true,
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      autoSchemaFile: 'schema.gql',
      driver: ApolloDriver,
      subscriptions: {
        'graphql-ws': true,
      },
    }),
    UserModule,
    PlaceModule,
  ],
  controllers: [AppController],
  providers: [AppService, NumberStringScalar],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
