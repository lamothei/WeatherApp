import React from 'react';

function TopButtons({setQuery}) {
  const cities = [
    {
      id: 1,
      title: 'Echo Bay',
    },
    {
      id: 2,
      title: 'Thessalon',
    },
    {
      id: 3,
      title: 'Elliot Lake',
    },
    {
      id: 4,
      title: 'Sudbury',
    },
    {
      id: 5,
      title: 'Toronto',
    },
  ];

  return (
    <div className="flex items-center justify-around my-6">
      {cities.map((city) => (
        <button key={city.id} className="text-white text-lg font-medium" onClick={() => setQuery({q: city.title})}>
          {city.title}
        </button>
      ))}
    </div>
  );
}

export default TopButtons;
