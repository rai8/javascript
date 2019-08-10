/* function beforeTryCatch() {
  let obj = undefined;
  console.log(obj.b);
  console.log(
    `If the previous line of code throws an error you'll never see this statement`
  );
}
beforeTryCatch(); */
function afterTryCatch() {
  try {
    let obj = undefined;
    console.log(obj.b);
    console.log(
      `If the previous line of code throws an error you'll never see this statement`
    );
  } catch (error) {
    console.log("I caught an exception: " + error.message);
  } finally {
    console.log("This will still work no matter what");
  }
  console.log("My application is still running");
}
afterTryCatch();
