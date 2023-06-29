import { Body, Controller, Post, Res, UseGuards } from '@nestjs/common';
import { GenderFilterService } from './gender-filter.service';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/auth/decorator/get-user.decorator';
import { UserEntity } from 'src/auth/user.entity';
import * as msgpack from 'msgpack-lite';

function genderFilter(imageData: Buffer): number {
  // 이미지 분석 로직 및 성별 확률 값을 계산하는 로직 필요

  const genderProbability = Math.random();

  return genderProbability;
}

@Controller('gender-filter')
export class GenderFilterController {
  constructor(private readonly genderFilterService: GenderFilterService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post('/gender-filter')
  getGenderFilter(
    @GetUser() user: UserEntity,
    @Body() requestData: { img: Buffer },
    @Res() response: Response,
  ) {
    // 성별 구분 값 return 하도록 수정 필요
    const genderProbability = genderFilter(requestData.img);

    const responseData = {
      output: genderProbability,
    };

    const encodedResponseData = msgpack.encode(responseData);

    return;
  }
}
