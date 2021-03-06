import Base from './base';
import randos2D from '../utilities/randos-2d';
import zeros2D from '../utilities/zeros-2d';

export default class Random extends Base {
  constructor(settings) {
    super(settings);
    this.validate();
    this.weights = randos2D(this.width, this.height);
    this.deltas = zeros2D(this.width, this.height);
  }
  predict() {}
  compare() {}
}