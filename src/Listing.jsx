import React from "react";

function Listing({ listing, onDelete}) {
    const {id,description,image,location }= listing
    const handleDelete = () => {
    onDelete(id);
};
return (<div className="listing">
<img src={image} alt={description} />
<h3>{description}</h3>
<p>Location: {location}</p>
<button onClick={handleDelete}>Delete</button>
</div>
);
};

export default Listing;

