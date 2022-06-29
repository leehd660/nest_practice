import { Prop, Schema, SchemaFactory, SchemaOptions } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { Document } from 'mongoose';

const options: SchemaOptions = {
    //DB에서 하나가 만들어질 때, 시간 찍어주는 것 (createdAt, updatedAt)
    timestamps: true,
};

@Schema(options)
export class Cat extends Document {
    @ApiProperty({
        example: 'leehd60@gmail.com',
        description: 'email',
        required: true,
    })
    @Prop({
        //반드시 필요하고, 유니크 해야한다는 설정 -> default가 false임
        required: true,
        unique: true,
    })
    @IsEmail()
    @IsString()
    @IsNotEmpty()
    email: string;

    @ApiProperty({
        example: 'heedo',
        description: 'name',
        required: true,
    })
    @Prop({
        required: true,
    })
    @IsString()
    name: string;

    @ApiProperty({
        example: '0123',
        description: 'password',
        required: true,
    })
    @Prop({
        required: true,
    })
    @IsString()
    password: string;

    @Prop()
    @IsString()
    imgUrl: string;

    readonly readOnlyData: { id: string; email: string; name: string };
}

export const CatSchema = SchemaFactory.createForClass(Cat);

//CatSchema에서 virtual이라는 메소드를 사용하여, 'readOnlyData'라는 필드네임 사용
CatSchema.virtual('readOnlyData').get(function (this: Cat) {
    return {
        id: this.id,
        email: this.email,
        name: this.name,
    };
});
