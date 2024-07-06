
// Now we have 5 different categories, all courses, business, etc.. so when we click on specific category that category wale courses dikhne chahiye,
// so we are creating 5 buttons, but not creating them manuallly, we are creating them using map

/// 1st: fetch data from data.js(done in app.js) and sent it here to access that data
/// 2nd: map all the filterdata with buttons, we dont have to think about the no. of buttons as it will automatically map all catogories to the buttons(obviously by creating one and then maping)


import React from "react";

const Filter = (props) => {
    let filterData = props.filterData;
    let category = props.category;
    let setCategory = props.setCategory;

    function filterHandler(title){
        setCategory(title); 
    }

    return (
        <div className="w-11/12 flex flex-wrap max-w-max space-x-4 gap-y-4 mx-auto py-4 justify-center">
            {filterData.map((data) => {    // har ek data(data.js me se)ke liye button banaya and har ek button ko map kiya with its title 
                return (
                    <button className={`text-lg px-3 py-1 rounded-lg font-medium text-white bg-black hover:bg-opacity-50 border-2 transition-all duration-300 
                        ${category === data.title 
                            ? "bg-opacity-60 border-white" 
                            : "bg-opacity-40 border-transparent"}
                        `} 

                    key={data.id} onClick={ ()=>filterHandler(data.title) }> {data.title}
                    </button>
                )
            })}
        </div>
    );
}

export default Filter;