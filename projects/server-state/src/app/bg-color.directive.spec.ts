import { BgColorDirective } from './bg-color.directive';

describe('BgColorDirective', () => {
  it('should create an instance', () => {
    const directive = new BgColorDirective('red');
    expect(directive).toBeTruthy();
  });
});
