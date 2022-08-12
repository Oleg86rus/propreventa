import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  getCheckupsLoadingStatus,
  loadCheckupsList,
} from '../../../store/checkups';
import { loadDoctorsList } from '../../../store/doctors';
import {
  loadIVTherapyesList
} from '../../../store/IVTherapyes';
import { loadGeneticResearchList } from '../../../store/geneticResearch';
import { loadUsersList } from '../../../store/users';
import { loadUltrasoundsList } from '../../../store/ultrasounds';
import Loader from '../loader';

const AppLoader = ({children}) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getCheckupsLoadingStatus());
  useEffect(() => {
    dispatch(loadCheckupsList());
    dispatch(loadDoctorsList());
    dispatch(loadIVTherapyesList());
    dispatch(loadGeneticResearchList());
    dispatch(loadUsersList());
    dispatch(loadUltrasoundsList());
  }, []);
  if (isLoading) return <Loader/>;
  return children;
};
AppLoader.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};
export default AppLoader;