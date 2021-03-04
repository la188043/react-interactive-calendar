import { randomString } from '../shared/utils/strings.util';

const events = [
  {
    id: randomString(),
    title: "Travail",
    start: new Date(2021, 2, 4, 8, 0),
    end: new Date(2021, 2, 4, 17, 0)
  }
];

export default events;
