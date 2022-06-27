import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { LoggerMiddleware } from './middlewares/logger.middleware';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import mongoose from 'mongoose';

@Module({
    //module안에서 각각의 의존성을 주입해줘야한다.
    imports: [
        CatsModule,
        ConfigModule.forRoot(),
        MongooseModule.forRoot(process.env.MONGODB_URI),
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule implements NestModule {
    private readonly isDev: boolean = process.env.MODE === 'dev' ? true : false;
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(LoggerMiddleware).forRoutes('cats');
        mongoose.set('debug', this.isDev);
    }
}
