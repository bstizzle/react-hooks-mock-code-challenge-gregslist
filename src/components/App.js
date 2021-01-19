import React, {useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([])
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    fetch('http://localhost:6001/listings')
      .then(resp => resp.json())
      .then(data => setListings(data))
  }, [])

  function handleDeleteClick(listingId) {
    const newListings = listings.filter((listing) => listing.id !== listingId);
    setListings(newListings);
  }

  const searchedListings = listings.filter((listing) =>
    listing.description.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  return (
    <div className="app">
      <Header onSearch={setSearchTerm} />
      <ListingsContainer listings={searchedListings} onDeleteClick={handleDeleteClick} />
    </div>
  );
}

export default App;
