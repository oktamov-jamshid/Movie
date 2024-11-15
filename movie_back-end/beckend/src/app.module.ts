import { Module } from '@nestjs/common';

import { MoviesModule } from './movies/movies.module';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: '127.0.0.1',
      port: 5432,
      database: 'postgres',
      username: 'postgres',
      password: '123456',
      synchronize: true,
      autoLoadModels: true,
    }),
    MoviesModule,
  ],
})
export class AppModule {}
