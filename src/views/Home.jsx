import { useEffect, useState } from 'react';
const availableCats = [
  { name: 'Whiskers', age: '2', image: '/sphynx.jpg' },
  { name: 'Mittens', age: '2', image: '/Bengal.jpg' },
  { name: 'Shadow', age: '1', image: '/Abyssian.jpg' },
  { name: 'Pumpkin', age: '3', image: '/siamese.jpg' },
  { name: 'Luna', age: '4', image: '/Persian.jpg' },
  { name: 'Simba', age: '2', image: '/Peterbald.jpg' },
  { name: 'Rookie', age: '2', image: '/Abyssinian1.jpg' },
  { name: 'Leo', age: '1.5', image: '/Persian1.jpg' },
  { name: 'Sugar', age: '8 months', image: '/Bengal1.jpg' },
  { name: 'Ellie', age: '1', breed: 'Birman', image: '/Birman.jpg' },
  { name: 'Hunter', age: '2', breed: 'Siamese', image: '/Siamese1.jpg' },
  { name: 'Penny', age: '1', breed: 'Sphynx', image: '/sphynx1.jpg' },
];

export default function Home() {
  const [featuredCats, setFeaturedCats] = useState([]);

  useEffect(() => {
    // selecting random cats from available cats
    const shuffledCats = [...availableCats].sort(() => 0.5 - Math.random());
    const selectedCats = shuffledCats.slice(0, 4); //  first 4 cats
    setFeaturedCats(selectedCats);
  }, []);

  return (
    <>
      <section className="text-center mt-4">
        <h1>Welcome to Purrfect Adoption</h1>
        <p className="text-center mt-4">
          Your <strong>'Purrfect'</strong> companion is just a click away!
        </p>
        <p className="text-center mt-4">
          Adopt a cat and make a difference in their life. Add love and joy to your home today!
        </p>
      </section>

      <section className="mt-5">
        <h2>Featured Cats</h2>


        {featuredCats.length > 0 ? (
          <div className="mt-4 row g-4" id="cats-container">
            {featuredCats.map((cat) => (
              <div key={cat.name} className="col-md-4">
                <div className="cat-card shadow-sm p-3">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="img-fluid mb-2"
                    style={{
                      borderRadius: '8px',
                      height: '200px',
                      objectFit: 'cover',
                    }}
                  />
                  <div className="cat-info">
                    <h3 className="h5 mb-1">{cat.name}</h3>
                    <p className="mb-0">Age: {cat.age}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-muted mt-3">No featured cats available at this moment.</p>
        )}
      </section>
    </>
  );
}
