import React from 'react';
const getWorkOuts = async()=>{ 
  const res = await fetch('https://api.abcz.workers.dev/api/fitlog')
  const data = await res.json();
  return data;
}
const Workouts = async() => { 
  const books = await getWorkOuts();
  console.log(books,'books');
  return (
    <div>
       WorkOuts Pages 
    </div>
  );
};

export default Workouts;