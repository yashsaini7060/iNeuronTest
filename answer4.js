//Callback hell refers to a situation in asynchronous programming where multiple nested callbacks makes the code difficult to read, understand, and maintain. It occurs when there are many asynchronous operations that depend on the completion of each other, resulting in nested code structures which is hard to read.

//To overcome callback hell and improve code readability and maintainability, several techniques can be employed:
//1.Promises
//2.Async/await
//3.Library support
//4.Using named function


getData(function(a){
  getMoreData(a, function(b){
      getMoreData(b, function(c){ 
          getMoreData(c, function(d){ 
              getMoreData(d, function(e){ 
                  console.log('callback hell');
              });
          });
      });
  });
});
