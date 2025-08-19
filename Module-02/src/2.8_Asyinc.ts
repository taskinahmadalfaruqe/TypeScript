{
  // Block Scoping
  const createPromise = () => {
    return new Promise((resolve, reject) => {
      const data: string = "Hello Developer";
      if (data) {
        resolve(data);

      } else {
        reject("No Data");
      }
    });
  }

  const ShowData = async () => {
    const result = await createPromise();
    console.log(result)
  }
  ShowData();
  // Block Scoping
}
