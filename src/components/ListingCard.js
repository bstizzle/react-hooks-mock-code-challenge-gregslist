import React, {useState} from "react";

function ListingCard({listing, onDeleteClick}) {
  const [favorite, setFavorite] = useState(false)

  function clickFavorite(){
    favorite ? setFavorite(false) : setFavorite(true);
  }

  function handleDeleteClick(){
    fetch(`http://localhost:6001/listings/${listing.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then(resp => resp.json())
    onDeleteClick(listing.id)
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={listing.image} alt={listing.description} />
      </div>
      <div className="details">
        {favorite ? (
          <button onClick={clickFavorite} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={clickFavorite} className="emoji-button favorite">☆</button>
        )}
        <strong>{listing.description}</strong>
        <span> · {listing.location}</span>
        <button name={listing.id} onClick={handleDeleteClick} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
