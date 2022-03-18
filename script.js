// 1. Do the below programs in anonymous function & IIFE
//   A. Print odd numbers in an array
//   B. Convert all the strings to title caps in a string array
//   C. Sum of all numbers in an array
//   D. Return all the prime numbers in an array
//   E  Return all the palindromes in an array
//   F. Return median of two sorted arrays of the same size
//   G. Remove duplicates from an array
//   H. Rotate an array by k times
------------------------------------------------------------------------------------------------

// SOLUTION:

//A. CODE:
// 1.ANONYMOUS FUNCTION

                       var PRIoddNO= function(arr)
                       {let odd=[];
                       arr.filter(num=>
                       {
                       if(num%2!==0)
                       odd.push(num);
                        })
 
                       console.log(` Odd numbers are ${odd}`);
                        }
                        PRIoddNO([1,2,3,11,12,13,45,8,10,19,7]);

// OUTPUT:
                       Odd numbers are 1,3,11,13,45,19,7


// 2.IIFE

                       (function(arr)
                       {let odd=[];
                       arr.filter(num=>
                       {
                       if(num%2!==0)
                       odd.push(num);
                       })
   
                       console.log(` Odd numbers are ${odd}`);
                       })([1,2,3,11,12,13,45,8,10,19,7]);

// OUTPUT:
                       Odd numbers are 1,3,11,13,45,19,7

---------------------------------------------------------------------

// B.CODE:

1.ANONYMOUS FUNCTION
                        var convert= function(arro) {
                        var Titcapsarray=[];
                        for (var i = 0; i < arro.length; i++) {
                         Titcapsarray +=arro[i][0].toUpperCase() + arro[i].slice(1);
                         }console.log(`THE TITTLE CAPS STRINGS ARE - ${Titcapsarray}`);
                         }
                         convert(["nandhu ","abijith ","javascript ","fullstack "]);

// OUTPUT:
                        THE TITTLE CAPS STRINGS ARE - Nandhu Abijith Javascript Fullstack  

// 2.IIFE

                         (function(arro) {
                         var Titcapsarray=[];
                         for (var i = 0; i < arro.length; i++) {
                         Titcapsarray += arro[i][0].toUpperCase() + arro[i].slice(1);
                         }console.log(`THE TITTLE CAPS STRINGS ARE - ${Titcapsarray}`);
                         })(["nandhu ","abijith ","javascript ","fullstack "]);

 // OUTPUT:
                        THE TITTLE CAPS STRINGS ARE - Nandhu Abijith Javascript Fullstack

---------------------------------------------------------------------------

// // C CODE

// 1.ANONYMOUS FUNCTION

                        var sum=function(arr)
                        { var tsum=0;
                        for(i=0;i<arr.length;i++)
                        { tsum += arr[i];}
                        console.log(`TOTAL SUM=${tsum}`);
                        }
                         sum([1,2,3,4,5]);

// OUTPUT
                         TOTAL SUM=15

// 2.IIFE

                        (function(arr)
                        { var tsum=0;
                        for(i=0;i<arr.length;i++)
                        { tsum += arr[i];}
                        console.log(`TOTAL SUM=${tsum}`);
                         })([1,2,3,4,10,5]);

 // OUTPUT
                          TOTAL SUM=25

------------------------------------------------------------------

// D CODE:

// 1.ANONYMOUS FUNCTION

                           var pnum=function(arr)
                           { let p=[];
	                   arr.forEach(num=>{
	                   if(num<=1)
	                   return false;
	                   for(let i=2;i<num;i++)
	                   {if(num%i===0)
	                   return false;
	                   }
                           return p.push(num);})
                           console.log(`PRIME NUMBERS ARE - ${p}`);
	                    }
                            pnum([2,5,8,9,7,12,11,16,23,31]);

 // OUTPUT
                            PRIME NUMBERS ARE - 2,5,7,11,23,31

// 2.IIFE

                           (function(arr)
                       	   { let p=[];
	                   arr.forEach(num=>{
	                   if(num<=1)
	                   return false;
	                   for(let i=2;i<num;i++)
	                    {if(num%i===0)
	                    return false;
	                    }
                            return p.push(num);})
                            console.log(`PRIME NUMBERS ARE - ${p}`);
                      	   })([2,5,8,9,7,12,11,16,23,31]);

// OUTPUT 
                           PRIME NUMBERS ARE - 2,5,7,11,23,31

-------------------------------------------------------------------------------------

// E CODE:

// 1.ANONYMOUS FUNCTION

                         var ispalindrome=function(arr)
                          {var palintrome=[];
                          arr.filter(element=>
                          { var str=String(element);
                          let i=0;
                          let j=str.length-1;
                          while(i<j)
                          {if(str[i]==str[j])
                          {i++;
                           j--;}
                           else 
                           return false;
                           }
                           return palintrome.push(element);
                           })
                           console.log(`THE PALINDROMES ARE- ${palintrome}`);

                            }
                           ispalindrome(["nibin",12121,14141,18181,"nandhu","malayalam","zen"]);

 // OUTPUT
                           THE PALINDROMES ARE- nibin,12121,14141,18181,malayalam

// 2.IIFE
 
                           (function(arr)
                           {var palintrome=[];
                            arr.filter(element=>
                            { var str=String(element);
                            let i=0;
                            let j=str.length-1;
                            while(i<j)
                            {if(str[i]==str[j])
                            {i++;
                            j--;}
                            else 
                            return false;
                            }
                            return palintrome.push(element);
                             })
                            console.log(`THE PALINDROMES ARE- ${palintrome}`);
			    })(["nibin",12121,14141,18181,"nandhu","malayalam","zen"]);

 // OUTPUT
                             THE PALINDROMES ARE- nibin,12121,14141,18181,malayalam

-------------------------------------------------------------------------

// F CODE:

// 1.ANONYMOUS FUNCTION 

                          var Median=function(arr1,arr2)
                          {
                          var arr3=[...arr1,...arr2];
                          arr3.sort((a,b)=>a-b);
                          var l=arr3.length/2;
                          if(arr3.length%2==0)
                          {   
                          var median=((arr3[l-1]+arr3[l])/2);
                          console.log(`MEDIAN VALUE IS- ${median}`);
                          }
                          else 
                          {
                          console.log(`MEDIAN VALUE IS- ${arr3[l-0.5]}`);
                           }

                           }    
                           Median([1,2,5,3,6],[9,9,5,7,10]);

// OUTPUT
                           MEDIAN VALUE IS- 5.5

// 2.IIFE

                            (function(arr1,arr2)
			    { var arr3=[...arr1,...arr2];
                            arr3.sort((a,b)=>a-b);
                            var l=arr3.length/2;
                            if(arr3.length%2==0)
                            {   
                            var median=((arr3[l-1]+arr3[l])/2);
                            console.log(`MEDIAN VALUE IS- ${median}`);
                            }
                            else 
                            {
                            console.log(`MEDIAN VALUE IS- ${arr3[l-0.5]}`);
                            }

                             })([1,2,5,3,6],[9,9,5,7,10]);

// OUTPUT

                             MEDIAN VALUE IS- 5.5
-------------------------------------------------------------
// G CODE:

// 1.ANONYMOUS FUNCTION 

                             var res = function(arr){
                             var newArr = [];
                             for(var i=0; i < arr.length; i++){
                             if(newArr.indexOf(arr[i]) === -1) {
                             newArr.push(arr[i]);
                             } }
                             console.log(`THE ARRAY WITH UNIQUE ELEMENTS -${newArr}`);
                             }
                             res(["nandhu",1,2,4,5,1,2,4,5,"nandhu","abi","abi",2,4]);

  // OUTPUT
                             THE ARRAY WITH UNIQUE ELEMENTS -nandhu,1,2,4,5,abi

// 2.IIFE

                              (function(arr){
                              var newArr = [];
                              for(var i=0; i < arr.length; i++){
                              if(newArr.indexOf(arr[i]) === -1) {
                              newArr.push(arr[i]);
                              } }
                              console.log(`THE ARRAY WITH UNIQUE ELEMENTS -${newArr}`);
                              })(["nandhu",1,2,4,5,1,2,4,5,"nandhu","abi","abi",2,4]);

// OUTPUT

                              THE ARRAY WITH UNIQUE ELEMENTS -nandhu,1,2,4,5,abi

-----------------------------------------------------------------------
// H CODE

// 1.ANONYMOUS FUNCTION 

                               var rotate=function(arr) {
                               var k = 4;
                               var out = arr.slice(k, arr.length);
                               var count = out.length;
                               for (var i = 0; i < k ; i++) {
                               out[count] = arr[i];
                               count += 1;
                               }
                               console.log(`THE ${k} TIMES ROTADED ARRAY IS - ${out}`);}
                               rotate( [1, 2, 3, 6, 8, 6, 1, 9, 10, 12, 13,15]); 

// OUTPUT

                                THE 4 TIMES ROTADED ARRAY IS - 8,6,1,9,10,12,13,15,1,2,3,6

// 2.IIFE

                                (function(arr) {
                                 var k = 4;
                                 var out = arr.slice(k, arr.length);
                                 var count = out.length;
                                 for (var i = 0; i < k ; i++) {
                                 out[count] = arr[i];
                                 count += 1;
                                 }
                                 console.log(`THE ${k} TIMES ROTADED ARRAY IS - ${out}`);})( [1, 2, 3, 6, 8, 6, 1, 9, 10, 12, 13,15]); 

 // OUTPUT
                                 THE 4 TIMES ROTADED ARRAY IS - 8,6,1,9,10,12,13,15,1,2,3,6


------------------------------------------------------------------------------------------------------------------------    
// 3. Do the below programs in arrow functions
//    a.Print odd numbers in an array
//    b.Convert all the strings to title caps in a string array
//    c.Sum of all numbers in an array
//    d.Return all the prime numbers in an array
//    e.Return all the palindromes in an array
------------------------------------------------------------------------------------------------------------------------
// solution:

// A code

                              var PRIoddNO= (arr)=>
                              {let odd=[];
                              arr.filter(num=>
                              {
                              if(num%2!==0)
                              odd.push(num);
                              })

                              console.log(` Odd numbers are ${odd}`);
                              }
                             PRIoddNO([1,2,3,11,12,13,45,8,10,19,7]);

// OUTPUT
                              Odd numbers are 1,3,11,13,45,19,7

---------------------------------------------------
// B CODE

                              var convert= (arro) =>
                              { var Titcapsarray=[];
                              for (var i = 0; i < arro.length; i++) {
                              Titcapsarray +=arro[i][0].toUpperCase() + arro[i].slice(1);
                              }console.log(`THE TITTLE CAPS STRINGS ARE - ${Titcapsarray}`);
                              }
                              convert(["nandhu ","abijith ","javascript ","fullstack "]);

// OUTPUT:
                              THE TITTLE CAPS STRINGS ARE - Nandhu Abijith Javascript Fullstack  

 ---------------------------------------------------

// C CODE

                               var sum=(arr)=>
                               { var tsum=0;
                               for(i=0;i<arr.length;i++)
                               { tsum += arr[i];}
                               console.log(`TOTAL SUM=${tsum}`);
                               }
                               sum([1,2,3,4,5]);

 // OUTPUT
                               TOTAL SUM=15

 ------------------------------------------------------

// D CODE

                              var pnum=(arr)=>
                       	      { let p=[];
	                      arr.forEach(num=>{
	                      if(num<=1)
	                      return false;
	                      for(let i=2;i<num;i++)
	                      {if(num%i===0)
	                       return false;
	                      }
                              return p.push(num);})
                              console.log(`PRIME NUMBERS ARE - ${p}`);
	                      }
	                      pnum([2,5,8,9,7,12,11,16,23,31]);

//  // OUTPUT
                              PRIME NUMBERS ARE - 2,5,7,11,23,31

---------------------------------------------------------

// E CODE

                             var ispalindrome=(arr)=>
                             {var palintrome=[];
                             arr.filter(element=>
                             { var str=String(element);
                             let i=0;
                             let j=str.length-1;
                             while(i<j)
                             {if(str[i]==str[j])
                             {i++;
                              j--;}
                             else 
                             return false;
                             }
                             return palintrome.push(element);
                             })
                             console.log(`THE PALINDROMES ARE- ${palintrome}`);

                              }
                              ispalindrome(["nibin",12121,14141,18181,"nandhu","malayalam","zen"]);

 // OUTPUT
                             THE PALINDROMES ARE- nibin,12121,14141,18181,malayalam

