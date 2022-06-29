import {
    Body,
    Controller,
    //Delete,
    Get,
    //Patch,
    Post,
    UseFilters,
    //Put,
    UseInterceptors,
} from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { HttpExceptionFilter } from 'src/exceptions/http-exception.filter';
import { SuccessInterceptor } from 'src/interceptors/success.interceptor';
import { CatsService } from './cats.service';
import { ReadOnlyCatDto } from './dto/cat.dto';
import { CatRequestDto } from './dto/cats.request.dto';

@Controller('cats')
@UseFilters(HttpExceptionFilter)
@UseInterceptors(SuccessInterceptor)
export class CatsController {
    //service 의존성 주입 , catscontroller라는 소비자가 catsService라는 제품을 주입받은 것
    constructor(private readonly catsService: CatsService) {}

    // //path : '/cats/:id'
    // @Get(':id')
    // getOneCat() {
    //     return 'one cat';
    // }

    @ApiOperation({ summary: '현재 고양이 가져오기' })
    @Get()
    getCurrentCat() {
        return 'one cat';
    }

    @ApiResponse({
        status: 500,
        description: 'Server Error..',
    })
    @ApiResponse({
        status: 200,
        description: 'Success!',
        type: ReadOnlyCatDto,
    })
    @ApiOperation({ summary: '회원가입' })
    @Post()
    async signUp(@Body() body: CatRequestDto) {
        return await this.catsService.signUp(body);
    }

    @ApiOperation({ summary: '로그임' })
    @Post('login')
    logIn() {
        return 'log in';
    }

    @ApiOperation({ summary: '로그아웃' })
    @Post('logout')
    logOut() {
        return 'log out';
    }

    @ApiOperation({ summary: '고양이 이미지 업로드' })
    @Post('upload/cats')
    uploadCatImg() {
        return 'uploadImg';
    }
}
