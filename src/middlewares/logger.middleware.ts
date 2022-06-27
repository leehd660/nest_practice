import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
    //nestjs에서 제공해주는 logging 기능
    private logger = new Logger('HTTP');

    use(req: Request, res: Response, next: NextFunction) {
        // console.log(req.ip);
        // console.log(req.originalUrl);
        this.logger.log(req.ip, req.method, req.originalUrl);

        res.on('finish', () => {
            this.logger.log(res.statusCode);
        });

        next();
    }
}
