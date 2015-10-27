/**
 * Created by justijndepover on 20/10/15.
 */


var customMatchers = {
    toBeBetween : function(){
        return {
            compare: function (actual, min, max) {
                return {
                    pass: actual > min && actual < max
                };
            }
        }
    }
};

beforeEach(function(){
    jasmine.addMatchers(customMatchers);
});


//test suite

describe("Calculator Tests", function(){

    describe("Calculator Object Test", function(){

        var calc = null;
        beforeEach(function(){
            calc = new Calculator(addModule);
        });

        it("Calculator objects should exist", function(){

            // AAA, SEE (jasmine)
            //SETUP EXECUTE EXPECTATIONS
            //var calc = new Calculator(addModule);
            //EXE --> niet nodig
            //EXPECTED
            expect(calc).toBeDefined();

       });

        it("Calculator should have implemented the addModule", function(){

            expect(calc.addModule).toBeDefined();

        });

    });

    describe("Add module test", function(){

        it("Add module should exist", function(){

            expect(addModule).toBeDefined();

        });

        it("Add module should contain an exe method", function(){

            expect(addModule.exe).toBeDefined();

        });

        it("should be able to add 3 + 4", function(){

            //SETUP
            var result;

            //EXE
            result = addModule.exe(3, 4);

            //EXP
            expect(result).toBe(7);

        });

    });

    describe("Devide Module Test", function(){

        it("should be able to divide 8, 3", function(){

           var result;
            result = divideModule.exe(8, 3);
            expect(result).toBeGreaterThan(2);
            expect(result).toBeLessThan(4);
            expect(result).toBeBetween(2, 4);

        });

    });

});
