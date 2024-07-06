import React, { useEffect, useState } from "react";
import { apiUrl, filterData } from './data';
import Navbar from "./components/Navbar.js";
import Filter from "./components/Filter";
import Cards from "./components/Cards.js"
import { toast } from "react-toastify";
import Spinner from "./components/Spinner.js";

const App = () => {

  const [courses, setCourses] = useState(null);   // courses madhe api varun fetch kelela data ahe sagla

  //jab tak data render hota hai, loading effect dikhane ke liye
  const [loading, setLoading] = useState(true);

  const [category, setCategory] = useState(filterData[0].title);

  async function fetchData() {
    setLoading(true);
    try {
      let response = await fetch(apiUrl);  //The await keyword pauses the execution of the fetchData function until the fetch call completes and returns a response.
      let output = await response.json();  /// convering obtained data into json format
      setCourses(output.data);       /// updating state variable, why state variable becz we at first we want to get the data on first render and after clicking on different categories we want to update state var
    }
    catch (err) {
      toast.error("Error Occured");
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchData();   //calling function
  }, [])

  return (
    <div className="min-h-screen flex flex-col bg-bgDark2">
      <div>
        <Navbar />
      </div>

      <div >
        <div >
          <Filter filterData={filterData} category={category} setCategory={setCategory}/>
        </div>

        <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
          {
            loading ? (<Spinner />) : (<Cards courses={courses} category={category}/>)
          }
        </div>
      </div>
    </div>
  );
};

export default App;


/*
  Logic of how filters are changing when we click on specific cateogry, it displays on that courses/cards 
  when we click on "All" we get all courses, when we click on "developement" we get only development wale courses like that
  so how it is done:
  apan kay kela, filter.js madhun category kadhun ghetli, how?  onClick() use karun: when we click on specific button in filter like all, development, etc, we fetch the title too
  that title is then passed to Cards.js via app.js

  route: Filter.js -> App.js -> Cards.js

  when we get cateogory name in cards.js, there we will just add if-else, to check which cateogries is chosen at a time, if "All is chosen" we will iterate through all arrays present in courses, by firstly converting it into single array
  else {
    courses[cateogry] :  kela ki yetaych karan, courses he ek motha array of arrays(categories) ahe, 
  }

  just visit the apiUrl and u will get it what is courses big array

  1)User clicks a filter button in Filter.js.
  2)filterHandler in Filter.js calls setCategory.
  3)setCategory updates the category state in App.js.
  4)App.js re-renders and passes the updated category to Cards.js.
  5)Cards.js uses the updated category to filter and display the relevant courses.
*/