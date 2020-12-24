# sinon-stub-es6-test
testing stubbing with imported destructuring

# Description

there are two files and one test.

- index.ts
- greeter.ts
- index.test.ts

index is importting the `createGreeting` method from *greeter* module by using destructuring.

in the test a stub is created for createGreeting, and the function `greetWithDate` from the *index* module is called inside the test.

as you can see by running `npm test`, the stubbing works succesfully even though index.ts module is using destructuring for importing the method that is being stubbed

So it looks like sinon, chai and mocha successfully work with stubbing functions that were imported/defined with destcuturing

# Scripts

- test - runs the tests in the test file

# Test it yourself 

- Open terminal
- run `git clone https://github.com/shaikegross/sinon-stub-es6-test && cd sinon-stub-es6-test && npm i && npm test`
