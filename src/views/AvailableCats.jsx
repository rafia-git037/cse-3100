import { useEffect, useState } from 'react';

const availableCats = [
  { name: 'Whiskers', age: '2', breed: 'Sphynx', image: '/sphynx.jpg' },
  { name: 'Mittens', age: '2', breed: 'Bengal', image: '/Bengal.jpg' },
  { name: 'Shadow', age: '1', breed: 'Abyssinian', image: '/Abyssian.jpg' },
  { name: 'Pumpkin', age: '3', breed: 'Siamese', image: '/siamese.jpg' },
  { name: 'Luna', age: '4', breed: 'Persian', image: '/Persian.jpg' },
  { name: 'Simba', age: '2', breed: 'Peterbald', image: '/Peterbald.jpg' },
  { name: 'Rookie', age: '2', breed: 'Abyssinian', image: '/Abyssinian1.jpg' },
  { name: 'Leo', age: '1.5', breed: 'Persian', image: '/Persian1.jpg' },
  { name: 'Sugar', age: '8 months', breed: 'Bengal', image: '/Bengal1.jpg' },
  { name: 'Ellie', age: '1', breed: 'Birman', image: '/Birman.jpg' },
  { name: 'Hunter', age: '2', breed: 'Siamese', image: '/Siamese1.jpg' },
  { name: 'Penny', age: '1', breed: 'Sphynx', image: '/sphynx1.jpg' },
];

const breeds = ['All', 'Sphynx', 'Bengal', 'Abyssinian', 'Siamese', 'Persian', 'Peterbald','Birman'];

export default function AvailableCats() {
  const [cats, setCats] = useState(availableCats);
  const [search, setSearch] = useState('');
  const [selectedBreed, setSelectedBreed] = useState('All');

  useEffect(() => {
    let filteredCats = availableCats;
  
    // Filter by breed
    if (selectedBreed !== 'All') {
      filteredCats = filteredCats.filter(cat => cat.breed === selectedBreed);
    }
  
    // Filter by search query (case-insensitive search for cat name)
    if (search) {
      filteredCats = filteredCats.filter(cat =>
        cat.name.toLowerCase().includes(search.toLowerCase())
      );
    }
  
    setCats(filteredCats);
  }, [search, selectedBreed]);
  
  return (
    <section className="text-center mt-4">
      <h2>Available Cats</h2>
      <p>Meet our adorable cats looking for their forever home!</p>

      <div className="filters mt-4">
        <div className="mb-3">
          <label htmlFor="breedFilter" className="form-label">Filter by Breed:</label>
          <select
            id="breedFilter"
            className="form-select"
            value={selectedBreed}
            onChange={(e) => setSelectedBreed(e.target.value)}
          >
            {breeds.map((breed, index) => (
              <option key={index} value={breed}>
                {breed}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="search" className="form-label">Search by Cat Name:</label>
          <input
            type="text"
            id="search"
            className="form-control"
            placeholder="Search by name"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      <div className="mt-2 row g-4 cats-container" id="cats-container">
        {cats.map((cat, i) => (
          <div key={i} className="col-md-4">
            <div className="cat-card">
              <img
                src={cat.image}  // Using the image paths from the public folder
                alt={cat.name}
                className="img-fluid mb-2"
                style={{ borderRadius: '8px', height: '200px', objectFit: 'cover' }}
              />
              <div className="cat-info">
                <h3 className="h5 mb-1">{cat.name}</h3>
                <p className="mb-0">Age: {cat.age}</p>
                <p className="mb-0">Breed: {cat.breed}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
