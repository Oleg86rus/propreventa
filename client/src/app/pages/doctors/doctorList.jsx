import React from 'react';
import Navbar from '../../components/ui/navBar/navBar';
import CardList from '../../components/ui/card/cardList';
import { useSelector } from 'react-redux';
import { getDoctors } from '../../store/doctors';
import { useParams } from 'react-router-dom';
import Doctor from './doctor';

const DoctorList = () => {
  const doctors = useSelector(getDoctors());
  const { doctorId } = useParams();
  
  return (
    <>
      <Navbar/>
      { doctorId ? <Doctor/> : <CardList products={doctors}/>
      }
    </>
  );
};

export default DoctorList;