//import { ApiProperty } from '@nestjs/swagger';
//import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { PickType } from '@nestjs/swagger';
import { Cat } from '../cats.schema';

export class CatRequestDto extends PickType(Cat, [
    'email',
    'name',
    'password',
] as const) {
    // @ApiProperty({
    //     example: 'leehd60@gmail.com',
    //     description: 'email',
    //     required: true,
    // })
    // @IsEmail()
    // @IsNotEmpty()
    // email: string;
    // @ApiProperty({
    //     example: 'heedo',
    //     description: 'name',
    //     required: true,
    // })
    // @IsString()
    // @IsNotEmpty()
    // name: string;
    // @ApiProperty({
    //     example: '0123',
    //     description: 'password',
    //     required: true,
    // })
    // @IsString()
    // @IsNotEmpty()
    // password: string;
}
