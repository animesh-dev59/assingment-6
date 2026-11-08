import Banner from '@/components/homepage/Banner';
import React from 'react';
import Workouts from './workouts/page';

const AllPages = () => {
  return (
    <div>
      <Banner/>
      <Workouts/>
    </div>
  );
};

export default AllPages;