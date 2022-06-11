import BaseDto from './baseDto';

export default class RegionPredict extends BaseDto {
  constructor(data) {
    super(data);

    this.position = data.position;
    this.city = data.city;
    this.currentClientIndex = data.currentClientIndex;
    this.predictClientIndex = data.predictClientIndex;
    this.predictArpu = data.predictArpu;
  }
}
