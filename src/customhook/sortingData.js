function sortByNewest(data) {
    return data.slice().sort((a, b) => new Date(b.date) - new Date(a.date));
  }

  function sortByOldest(data) {
    return data.slice().sort((a, b) => new Date(a.date) - new Date(b.date));
  }  


  export {sortByNewest, sortByOldest}
  
//   // Example usage:
//   const unsortedData = [
//     { date: '2023-10-26T08:52:47.630465Z' },
//     { date: '2023-10-25T10:30:00.123456Z' },
//     // ... more data
//   ];
  
//   const sortedByNewest = sortByNewest(unsortedData);
//   console.log(sortedByNewest);
  