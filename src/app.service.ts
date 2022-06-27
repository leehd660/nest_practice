import { Injectable } from '@nestjs/common';

//비즈니스 로직이 있는 곳

//provider로 취급이 되는 것은 @Injectable()의존성 주입이 가능하다는 데코레이터가 붙어있음
@Injectable()
export class AppService {
    getHello(): string {
        console.log('Hello World');
        return 'Hello World!';
    }
}
