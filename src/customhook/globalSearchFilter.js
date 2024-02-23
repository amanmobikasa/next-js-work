export const GlobalSearchFilter = (searchString, searchData) => { // first args is searching the string and second is the array of data.
  return searchData.filter((item) => 
    Object.values(item).some((value) =>
      value.toString().toLowerCase().includes(searchString.toLowerCase())
    )
  );
};

