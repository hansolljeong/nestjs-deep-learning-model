import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { GenderFilterService } from './gender-filter.service';
import { AuthGuard } from '@nestjs/passport';
import * as msgpack from 'msgpack-lite';
import * as fs from 'fs';

async function genderFilter(imageData: Buffer): Promise<number> {
  // 이미지 분석 로직 및 성별 확률 값을 계산하는 로직 필요
  const genderProbability = Math.random();

  return genderProbability;
}

async function readImageAsBytes(): Promise<Buffer> {
  const imagePath = 'public/images/face1.png';
  return fs.readFileSync(imagePath);
}

@Controller('gender-filter')
export class GenderFilterController {
  constructor(private readonly genderFilterService: GenderFilterService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post('')
  async getGenderFilter() {
    // 성별 구분 값 return 하도록 수정 필요
    const genderProbability = await genderFilter(await readImageAsBytes());

    const responseData = {
      output: genderProbability,
    };

    const encodedResponseData = msgpack.encode(responseData);

    return encodedResponseData;
  }
}
