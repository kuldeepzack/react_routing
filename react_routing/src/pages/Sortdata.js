import React ,{ useState}from 'react';
import "./Login.css"
let products = [
    {
        "product_name": "Witchers",
        "type": "book",
        "manufactured": new Date(),
        "price": 800
    },
    {
        "product_name": "OnePlus 9",
        "type": "Mobile Phone",

        "price": 49000
    },
    {
        "product_name": "Black ",
        "type": "Shoes",

        "price": 2500
    },
    {
        "product_name": "Skybags",
        "type": "Bags",

        "price": 2200
    },

]

function Sortdata() {
    const [productdata, setProductData] = useState(products);
    const [submitdata, setSubmitdata] = useState("");
    const [status, setStatus] = useState(false);
    const [filteredList, setFilteredList] = useState(products);

    const handlesubmitdata = () => {
        let sort = productdata.sort((a, b) => { return a.price - b.price })
        console.log(sort)
        setSubmitdata(sort)
    };


 

    const filterBySearch = (event) => {
        if (event.target.value !== "") {
          let updatedList = productdata?.filter((item) => {
            return item.product_name.includes(event.target.value);
          });
          if (updatedList)
            setProductData(updatedList);
            setStatus(true)
        }
        else {
          setProductData(filteredList)
          setStatus(false)
        }
      };

    return (
        <div className='pages'>
            {productdata.map(
                (element) => {
                    return (
                        <div>
                            <ul>
                                <li>{element.product_name}</li>
                                <li>{element.type}</li>
                                <li>{element.price}</li>
                            </ul>
                        </div >
                    )})
            }
            <button onClick={(e) => { handlesubmitdata() }}   >Submit</button>
            <div className="search-text">{ !status ? "SearchItem": "FilteredItem"}</div>
            <input id="search-box" onChange={filterBySearch} />
        </div>
    )
}

export default Sortdata;



   // const filterBySearch = (event) => {
    //     if (event.target.value === "") {
    //         setProductData(filteredList);
    //     } else {
    //         let updatedList = productdata.filter((item) => {
    //             return item.product_name === event.target.value;
    //         });
    //         setProductData(updatedList);
    //     };
    // }