import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({listings, onDeleteClick}) {

  const displayListings = listings.map((listing) => {
    return <ListingCard key={listing.id} listing={listing} onDeleteClick={onDeleteClick} />
  })

  return (
    <main>
      <ul className="cards">
        {displayListings}
      </ul>
    </main>
  );
}

export default ListingsContainer;
