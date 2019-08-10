function perfomCalculation(obj) {
  if (obj.hasOwnProperty("b")) {
    throw new Error("Object is missing property");
  }
  return b;
}
function performHighLevelOperation() {
  let obj = {};
  let value = 0;
  try {
    value = perfomCalculation(obj);
  } catch (error) {
    console.log(error.message);
  }
  if ((value = 0)) {
    //contigency, retry logic
  }
}
performHighLevelOperation();
