import React, { useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {

  const [listings, setListings] = useState([])
  const [search, setSearch] = useState("")


  useEffect(() => {
    fetch(" http://localhost:6001/listings")
    .then( res => res.json())
    .then( data => setListings(data))
  }, []);

  function handleDelete(listing) {
    const newListings = listings.filter(l => l !== listing )
    setListings(newListings)
  }

  const listingsToDisplay = listings.filter(l => l.description.toLowerCase().includes(search.toLowerCase()))



  

  return (
    <div className="app">
      <Header onSearch={setSearch}/>
      <ListingsContainer allListings={listingsToDisplay} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
