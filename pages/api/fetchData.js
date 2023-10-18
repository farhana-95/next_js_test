import { useState, useEffect } from 'react';

const FetchData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/sampleData');
      const result = await response.json();
      setData(result);
    };

    fetchData();
  }, []);

  return (
    <div>
      <ul>
        {data.map(item => (
          <li key={item.id}> ID {item.id} - {item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default FetchData;