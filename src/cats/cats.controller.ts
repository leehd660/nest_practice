import {
    Controller,
    Delete,
    Get,
    Patch,
    Post,
    Put,
    UseInterceptors,
} from '@nestjs/common';
import { SuccessInterceptor } from 'src/interceptors/success.interceptor';
import { CatsService } from './cats.service';

@Controller('cats')
@UseInterceptors(SuccessInterceptor)
export class CatsController {
    //service 의존성 주입 , catscontroller라는 소비자가 catsService라는 제품을 주입받은 것
    constructor(private readonly catsService: CatsService) {}

    // path : '/cats'
    @Get()
    getAllCat() {
        return `all cats`;
    }

    //path : '/cats/:id'
    @Get(':id')
    getOneCat() {
        return 'one cat';
    }

    @Post()
    createCat() {
        return 'create cat';
    }

    @Put(':id')
    updateCat() {
        return 'update cat';
    }

    @Patch(':id')
    updatePartialCat() {
        return 'update partial cat';
    }

    @Delete(':id')
    deleteCat() {
        return 'delete cat';
    }
}
