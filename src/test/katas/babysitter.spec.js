import Babysitter from '../../Babysitter';
let babysitter;

beforeEach(() => {
  babysitter = Babysitter();
});

describe('Babysitter Kata', () => {
  it('gets paid a rate of 12 from start to bedtime', () => {
    const startTime = 5,
      departureTime = 6,
      bedtime = 8;

    const payment = babysitter.start(startTime, departureTime, bedtime);

    expect(payment).to.equal(36);
  });

  it('gets paid a rate of 8 per hour from bedtime to midnight', () => {
    const startTime = 5,
      departureTime = 3,
      bedtime = 8;

    const payment = babysitter.start(startTime, departureTime, bedtime);

    expect(payment).to.equal(116);
  });

  it('gets paid a rate of 16 from midnight to end of job', () => {
    const startTime = 1,
      departureTime = 1,
      bedtime = 1;

    const payment = babysitter.start(startTime, departureTime, bedtime);

    expect(payment).to.equal(104);
  });

  it('gets paid for full hours', () => {
    const startTime = 5,
      departureTime = 4,
      bedtime = 8;

    const payment = babysitter.start(startTime, departureTime, bedtime);

    expect(payment).to.equal(132);
  });
});
