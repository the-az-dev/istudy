import { Injectable } from '@nestjs/common';
import { CreateHometaskReviewDto } from './dto/create-hometask-review.dto';
import { UpdateHometaskReviewDto } from './dto/update-hometask-review.dto';

@Injectable()
export class HometaskReviewService {
  create(createHometaskReviewDto: CreateHometaskReviewDto) {
    return 'This action adds a new hometaskReview';
  }

  findAll() {
    return `This action returns all hometaskReview`;
  }

  findOne(id: number) {
    return `This action returns a #${id} hometaskReview`;
  }

  update(id: number, updateHometaskReviewDto: UpdateHometaskReviewDto) {
    return `This action updates a #${id} hometaskReview`;
  }

  remove(id: number) {
    return `This action removes a #${id} hometaskReview`;
  }
}
