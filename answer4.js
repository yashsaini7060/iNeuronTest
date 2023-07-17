//Callback hell refers to a situation in asynchronous programming where multiple nested callbacks makes the code difficult to read, understand, and maintain. It occurs when there are many asynchronous operations that depend on the completion of each other, resulting in nested code structures which is hard to read.

//To overcome callback hell and improve code readability and maintainability, several techniques can be employed:
//Write comments
//Split functions into smaller functions
//Using Async.js
//Using Promises
//Using Async-Await

getData(function(a){
  getMoreData1(a, function(b){
      getMoreData2(b, function(c){ 
          getMoreData3(c, function(d){ 
              getMoreData4(d, function(e){ 
                  console.log('callback hell');
              });
          });
      });
  });
});
