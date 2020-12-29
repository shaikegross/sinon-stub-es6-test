import * as greeter from './greeter';

import { SinonStub, stub } from 'sinon';

// Only module import in the entire project
import { describe } from 'mocha';
import { expect } from 'chai';
import { greetWithTime } from './index';

describe('stubbing a function that used a destructed import', () => {
    let greetingWithTimeStub: SinonStub;

    beforeEach(() => {
        greetingWithTimeStub?.restore();
    })

    it('should not stub', () => {
        const greetingWithTime = greetWithTime('shai');
        expect(greetingWithTime).to.satisfy((greeting: string) => greeting.startsWith('Hello '));
    });

    it('should stub well', () => {
        greetingWithTimeStub = stub(greeter, 'createGreeting');

        greetingWithTimeStub.callsFake((name: string) => {
            return `I have stubbed you ${name}`
        });

        const greetingWithTime = greetWithTime('shai');

        expect(greetingWithTime).to.satisfy((greeting: string) => greeting.startsWith('I have stubbed you'));
    });

    it('should stub well after calling it once unstubbed', () => {
        const greetingWithTime = greetWithTime('shai');

        greetingWithTimeStub = stub(greeter, 'createGreeting');

        greetingWithTimeStub.callsFake((name: string) => {
            return `I have stubbed you ${name}`
        });

        const greetingWithTimeStubbed = greetWithTime('shai');

        expect(greetingWithTime).to.satisfy((greeting: string) => greeting.startsWith('Hello '));
        expect(greetingWithTimeStubbed).to.satisfy((greeting: string) => greeting.startsWith('I have stubbed you'));
    });    
});

