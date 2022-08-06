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

const AppLoader = ({children}) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getCheckupsLoadingStatus());
  useEffect(() => {
    dispatch(loadCheckupsList());
    dispatch(loadDoctorsList());
    dispatch(loadIVTherapyesList());
    dispatch(loadGeneticResearchList());
  }, []);
  if (isLoading) return 'Loading...';
  return children;
};
AppLoader.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};
export default AppLoader;