import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({allListings, handleDelete}) {
  return (
    <main>
      <ul className="cards">
        {
        Array.isArray(allListings) ? allListings.map(listing => <ListingCard key={listing.id} listing={listing} onDelete={handleDelete}/>) : null
        
        /* use the ListingCard component to display listings */}
      </ul>
    </main>
  );
}

export default ListingsContainer;
