//1.With the help of Middleware:
//Implement an error-handling middleware that can catch errors and handles them. This middleware should be placed at the end of the middlewares chain, after all the routes.
//Example:
app.use((err, req, res, next) => {
  // Handle the error
  res.status(err.status || 500);
  res.json({
    error: {
      message: err.message || 'Internal Server Error'
    }
  });
});
//This middleware throws an error object whenever it faces an error.

//2. With the help of try-catch block:
function processData(data) {
  try {
      if (Object.keys(data).length === 0) {
          throw new Error("Data object is empty");
      }
      // process data here
      console.log("Data processed successfully");
  } catch (error) {
      console.log(error.message);
  }
}

processData({ name: "Alice" }); // Data processed successfully
processData({}); // Data object is empty

//The try-catch block is used to catch errors that occur in synchronous code. If an error occurs in the try block, the catch block is executed. The catch block takes an error object as a parameter and we can use it to get the error message.

//3. Using promises: We can use promises to handle asynchronous errors. When a promise is rejected, you can catch the error using the catch method.
function processData(data) {
  return new Promise((resolve, reject) => {
      if (Object.keys(data).length === 0) {
          reject(new Error("Data object is empty"));
      } else {
          resolve("Data processed successfully");
      }
  });
}

processData({ name: "Alice" })
  .then(result => console.log(result))
  .catch(error => console.log(error.message)); // Data processed successfully

processData({})
  .then(result => console.log(result))
  .catch(error => console.log(error.message)); // Data object is empty


//4. Using async-await: We can use the async and await keywords to handle asynchronous errors in a way that’s similar to synchronous error handling with try-catch blocks1.

async function processData(data) {
  try {
      if (Object.keys(data).length === 0) {
          throw new Error("Data object is empty");
      }
      return "Data processed successfully";
  } catch (error) {
      console.log(error.message);
  }
}

async function main() {
  const result1 = await processData({ name: "Alice" });
  console.log(result1); 

  const result2 = await processData({});
  console.log(result2); 
}

main();
