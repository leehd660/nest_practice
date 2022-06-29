import { ApiProperty, PickType } from '@nestjs/swagger';
import { Cat } from '../cats.schema';

//상속을 받을 때, password는 받아서는 안되기 때문에, PickType을 이용해서 받을 것만 받을 수 있다.
export class ReadOnlyCatDto extends PickType(Cat, ['email', 'name'] as const) {
    //id는 상속받을 수 없기 때문에
    @ApiProperty({
        example: 'leehd60@gmail.com',
        description: 'email',
        required: true,
    })
    id: string;

    // @ApiProperty({
    //     example: 'leehd60@gmail.com',
    //     description: 'email',
    //     required: true,
    // })
    // email: string;

    // @ApiProperty({
    //     example: 'heedo',
    //     description: 'name',
    //     required: true,
    // })
    // name: string;
}
