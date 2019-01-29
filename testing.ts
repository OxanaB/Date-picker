const tests = [];
export class Should<T> {
    constructor(
        private actual: T
    ) {
    }
    be(expected: T): void {
        if (this.actual === expected) return;
        console.error('Actual', this.actual, 'Expected', expected);
    }
}

export function should<T>(actual: T) : Should<T> {
    return new Should<T>(actual);
}

interface Test {
    description: string;
    test: () => void
}
export function testing() {
    return new Tester([]);
}
export class Tester {
    constructor(
        private tests: Test[]
    ) {
    }
    test(
        description: string,
        test: () => void
    ): Tester {
        this.tests.push({ description, test })
        return this;
    }
    run() {
        this.tests.forEach(({description, test}) => {
            console.log(description);
            test();
        });
    }
}

