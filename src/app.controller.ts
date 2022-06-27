import { Body, Controller, Get, Param, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express';

@Controller('cats')
export class AppController {
    //의존성 주입 : appService를 사용하기 위해서
    //nest의 경우, appService를 파일 그대로 사용하지 않고 클래스 내에서 생성자로 초기화시켜서 사용함..
    constructor(private readonly appService: AppService) {}

    //express의 router.get('/',...) -> nest에서 @Get('/') getHello()...
    @Get('hello') //@(데코레이터) : 함수나 클래스에 기능을 첨가해주는거->재사용성을 극대화 시켜주는 것 -> getHello()에 기능을 첨가하는 것
    getHello(): string {
        return this.appService.getHello();
        // return 'Hello World';
    }

    @Get('hello/:id/:name') //@(데코레이터) : 함수나 클래스에 기능을 첨가해주는거->재사용성을 극대화 시켜주는 것 -> getHello()에 기능을 첨가하는 것
    getPrac(
        @Req() req: Request,
        @Body() Body,
        @Param() param: { id: number; name: string },
    ): string {
        console.log(param);
        console.log(param.name);
        return 'Hello World';
    }
}
