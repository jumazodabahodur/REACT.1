import React from 'react';

const Table = () => {
  const collections = [
    {
      id: 1,
      image: '/img/icon (29).png',
      name: 'Alex Ca.',
      author: 'Alex',
      volume: '8,456',
      change: '+ 27.78%',
      floorPrice: '3,5',
      owners: '2.2K',
      items: '500',
    },
    {
      id: 2,
      image: 'img/icon (30).png', 
      name: 'Alex Ca.',
      author: 'Alex',
      volume: '4,780',
      change: '+ 27.78%',
      floorPrice: '7,9',
      owners: '3.4K',
      items: '900',
    },

    {
      id: 3,
      image: 'img/icon (29).png',
      name: 'Alex Ca.',
      author: 'Alex',
      volume: '8,456',
      change: '+ 27.78%',
      floorPrice: '3,5',
      owners: '2.2K',
      items: '500',
    },
    {
      id: 4,
      image: '/img/icon (30).png',
      name: 'Alex Ca.',
      author: 'Alex',
      volume: '4,780',
      change: '+ 27.78%',
      floorPrice: '7,9',
      owners: '3.4K',
      items: '900',
    },
  ];

  return (
    <div className="w-full bg-white p-6 rounded-[24px] shadow-sm font-sans">
      <table className="w-full border-collapse">
        <thead className="border-b border-gray-100">
          <tr>
            <th className="text-left py-5 text-sm font-medium text-gray-500 w-[40%]">
              Collection
            </th>
            <th className="text-left py-5 text-sm font-medium text-gray-500">
              Volume
            </th>
            <th className="text-left py-5 text-sm font-medium text-gray-500">
              24h %
            </th>
            <th className="text-left py-5 text-sm font-medium text-gray-500">
              Floor Price
            </th>
            <th className="text-left py-5 text-sm font-medium text-gray-500">
              Owners
            </th>
            <th className="text-left py-5 text-sm font-medium text-gray-500">
              Items
            </th>
          </tr>
        </thead>

     
        <tbody>
          {collections.map((item) => (
            <tr key={item.id} className="border-b border-gray-50 last:border-none">
          
              <td className="py-5 flex items-center gap-4">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-14 h-14 rounded-full object-cover border border-gray-100" 
                />
                <div>
                  <h3 className="font-bold text-[18px] text-gray-950">
                    {item.name}
                  </h3>
                  <p className="text-sm text-gray-500">
                    By {item.author}
                  </p>
                </div>
              </td>

        
              <td className="py-5 text-[15px] font-semibold text-gray-900">
                <div className="flex items-center gap-1.5">
                  <span className="text-lg">💎</span> 
                  {item.volume}
                </div>
              </td>

           
              <td className="py-5 text-[15px] font-semibold text-green-500">
                {item.change}
              </td>

           
              <td className="py-5 text-[15px] font-semibold text-gray-900">
                <div className="flex items-center gap-1.5">
                  <span className="text-lg">💎</span>
                  {item.floorPrice}
                </div>
              </td>

            
              <td className="py-5 text-[15px] font-semibold text-gray-900">
                {item.owners}
              </td>

              <td className="py-5 text-[15px] font-semibold text-gray-900">
                {item.items}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;