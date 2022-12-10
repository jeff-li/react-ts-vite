import React from 'react';
import SideNav from '../../../components/SideNav';

interface TempPageProps {
  content: string
}

const TempPage: React.FC<TempPageProps> = ({ content }) => {
  return (
    <>
      <SideNav />
      <div>{content}</div>
    </>
  );
};

export default TempPage;
