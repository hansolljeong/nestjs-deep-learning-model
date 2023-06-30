import { Injectable } from '@nestjs/common';
import { join } from 'path';
import * as faceapi from 'face-api.js';

@Injectable()
export class GenderFilterService {
  // constructor() {
  //   // face-api.js 모델 로드
  //   const imagePath = join(__dirname, 'public/images');
  //   faceapi.nets.ssdMobilenetv1.loadFromDisk(imagePath);
  //   faceapi.nets.faceLandmark68Net.loadFromDisk(imagePath);
  //   faceapi.nets.faceRecognitionNet.loadFromDisk(imagePath);
  //   faceapi.nets.faceExpressionNet.loadFromDisk(imagePath);
  // }
  // async detectGenderFromImage(imageAsBytes: Buffer): Promise<string> {
  //   // 바이트 배열로부터 이미지 로드
  //   // 얼굴 감지
  //   // 성별 구분
  //   return;
  // }
}
