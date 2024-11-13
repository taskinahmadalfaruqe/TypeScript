{
  //Scoping
  const getToDo=async()=>{
    const response= await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const data= await response.json();
    console.log(data);
  }
  getToDo();

  type Something = { something: string };

  const getAsyncData = (): Promise<string> => {
    return new Promise<string>((resolve, reject) => {
      const data: string = "Taskin";
      if (data) {
        resolve(data);
      } else {
        reject("No Data Found");
      }
    });
  };

  const fetchData = async (): Promise<string> => {
    const data = await getAsyncData();
    console.log(data);
    return data;
  };
  fetchData();
  //Scoping
}

