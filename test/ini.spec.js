function sum(a,b) {
   return a+=b;
}


describe("Sum",()=> {
   test("Should returno the sum result", ()=>{
       let first = 1;
       let second = 2;
       expect(sum(first, second)).toBe(first + second);



   })

})
