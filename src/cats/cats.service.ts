import {
    //HttpException,
    Injectable,
    UnauthorizedException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { Cat } from './cats.schema';
import { CatRequestDto } from './dto/cats.request.dto';
import { CatsRepository } from './cats.repository';

@Injectable()
export class CatsService {
    constructor(private readonly catsRepository: CatsRepository) {}

    async signUp(body: CatRequestDto) {
        // 필요한 데이터를 body에서 가져옴
        const { email, name, password } = body;
        // 이메일은 중복이 되면 안되기 때문에 중복 확인 -> catModel안에 query 메소드 : exists 가 있음 -> boolean
        const isCatExist = await this.catsRepository.existsByEmail(email);

        if (isCatExist) {
            //403 error를 발생시키는 자동화된 클래스 : UnauthorizedException
            throw new UnauthorizedException('duplicated email');
            // 이런식도 가능 : throw new HttpException('error message', 403);
        }

        //비밀번호 암호화 : bcrypt는 암호를 hash화 해주는 것
        const hashedPassword = await bcrypt.hash(password, 10);

        const cat = await this.catsRepository.create({
            name,
            email,
            password: hashedPassword,
        });

        return cat.readOnlyData;
    }
}
