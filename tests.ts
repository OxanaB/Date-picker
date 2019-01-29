import { testing, should } from "./testing";
import { sum } from "./utils";

testing()
    .test('sum of [1, 2] is 3', () => {
        should(sum([1, 2])).be(3);
        
    })
    .run();
