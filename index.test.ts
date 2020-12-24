import * as greeter from './greeter';

// Only module import in the entire project
import { describe } from 'mocha';
import { expect } from 'chai';
import { greetWithTime } from './index';
import { stub } from 'sinon';

describe('stubbing a function that used a destructed import', () => {
    it('should not stub', () => {
        const greetingWithTime = greetWithTime('shai');
        expect(greetingWithTime).to.satisfy((greeting: string) => greeting.startsWith('Hello '));
    });
    
    it('should stub well', () => {
        stub(greeter, 'createGreeting').callsFake((name: string) => {
            return `I have stubbed you ${name}`
        });
        
      
        const greetingWithTime = greetWithTime('shai');
        expect(greetingWithTime).to.satisfy((greeting: string) => greeting.startsWith('I have stubbed you'));
    });    
});

