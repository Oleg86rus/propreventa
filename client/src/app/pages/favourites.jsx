import React from 'react';
import { useSelector } from 'react-redux';
import { getCurrentUserId, getUserById } from '../store/users';
import { getDoctors } from '../store/doctors';
import { getCheckups } from '../store/checkups';
import { getGeneticResearch } from '../store/geneticResearch';
import { getUltrasounds } from '../store/ultrasounds';
import { getIVTherapyes } from '../store/IVTherapyes';
import Card from '../components/ui/card/card';
import { style } from '../utils/constants';
import NavBar from '../components/ui/navBar/navBar';
import Loader from '../components/ui/loader';

const Favourites = () => {
  const {h2} = style;
  const currentUserId = useSelector(getCurrentUserId());
  const { favourites } = useSelector(getUserById(currentUserId));
  const doctors = useSelector(getDoctors());
  const checkups = useSelector(getCheckups());
  const geneticResearch = useSelector(getGeneticResearch());
  const ultrasound = useSelector(getUltrasounds());
  const IVTherapy = useSelector(getIVTherapyes());

  const favouritesCards = {
    doctors: [],
    checkups: [],
    geneticResearch: [],
    ultrasound: [],
    IVTherapy: []
  };
  
  favourites.forEach( f => {
    if (doctors.findIndex(el => el._id === f) > 0 && favouritesCards.doctors.findIndex(el => el._id === f) < 0) favouritesCards.doctors.push(doctors.find(el => el._id === f));
    if (checkups.findIndex(el => el._id === f) > 0  && favouritesCards.checkups.findIndex(el => el._id === f) < 0) favouritesCards.checkups.push(checkups.find(el => el._id === f));
    if (geneticResearch.findIndex(el => el._id === f) > 0  && favouritesCards.geneticResearch.findIndex(el => el._id === f) < 0) favouritesCards.geneticResearch.push(geneticResearch.find(el => el._id === f));
    if (ultrasound.findIndex(el => el._id === f) > 0  && favouritesCards.ultrasound.findIndex(el => el._id === f) < 0) favouritesCards.ultrasound.push(ultrasound.find(el => el._id === f));
    if (IVTherapy.findIndex(el => el._id === f) > 0  && favouritesCards.IVTherapy.findIndex(el => el._id === f) < 0) favouritesCards.IVTherapy.push(IVTherapy.find(el => el._id === f));
  });
  
  const noFavourites = () => 'Нет избранных';
  const titleFavourite = (type) => {
    if (type === 'doctors') return 'Доктора:';
    if (type === 'checkups') return 'Чек-апы:';
    if (type === 'geneticResearch') return 'Генетические исследования:';
    if (type === 'ultrasound') return 'УЗИ:';
    if (type === 'IVTherapy') return 'IV-терапия:';
  };
  
  if (favourites.length === 0) return <div className='h-[500px] mt-15 p-10'>
    <p className='text-center mt-15'>Нет избранных</p></div>;
  
  return (
    <>
      <NavBar/>
      {favourites && currentUserId ? <div className='mx-auto container flex flex-col items-center mt-5 mb-5'>
        {Object.entries(favouritesCards).map((el, i) => <div key={i}>
          <h2 className={`${h2} mt-5 mb-5`}>{titleFavourite(el[0])}</h2>
          { el[1].length > 0
            ?
            <div className="grid justify-center sm:grid-cols-2 md:grid-cols-2 gap-12 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
              {el[1].map((f, i) => (<div key={i}>
                <Card product={f}/></div>
              ))}
            </div>
          
            : <h2>{noFavourites(el[0])}</h2>}
        </div>)
        }
      </div>
        : <Loader/> }
    </>
  );
};

export default Favourites;