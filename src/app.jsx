import { useState, useEffect} from "react";
import Listing from './Listing';

function App() {
    const [Listings,setListings] = useState([])
}
useEffect(() =>{
    fetchListings();
}, []);

const fetchListings = async ()=>{
    try {
        const response =await fetch('http://localhost:6001/listings')
        const data =await response.json();
        setListings(data);
    }
    catch (error){
        console.error('Error fetching listings:',error);   
}


const handleDeleteListing = async (id) =>{
    try {
        await fetch(`http://localhost:6001/listings/${id}`, {
        method: 'DELETE',
      });
      setListings(listings.filter(listing => listing.id !== id));
    } catch (error) {
      console.error('Error deleting listing:', error);
    }
  };

  return (
    <div className="App">
      <h1>gregslist</h1>
      <div className="listings">
        {listings.map(listing => (
          <Listing key={listing.id} listing={listing} onDelete={handleDeleteListing} />
        ))}
      </div>
    </div>
  );
        };

    
export default App;