function execution_Time() {
  console.time("Total_Time_Taken");
  for (i = 0; i < 10000; i++) {
    console.log("Hi, this is the taken to for execution i.e.,:");
  }
  console.timeEnd("Total_Time_Taken");
}
