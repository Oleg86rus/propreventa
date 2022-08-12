import React, { useEffect, useState } from 'react';
import TextField from '../../common/form/textField';
import RadioField from '../../common/form/radioField';
import { validator } from '../../../utils/validator';
import BackHistoryButton from '../../common/backButton';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  getCurrentUserData,
  getCurrentUserId,
  updateUser
} from '../../../store/users';
import Loader from '../loader';

const EditUserForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const currentUser = useSelector(getCurrentUserData());
  const currentUserId = useSelector(getCurrentUserId());
  
  const [errors, setErrors] = useState({});
  const [data, setData] = useState(currentUser);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    if (data && isLoading) {
      setLoading(false);
    }
  }, [data]);
  
  const handleChange = (target) => {
    setData((prevState) => {
      return ({ ...prevState, [target.name]: target.value });
    });
  };
  
  const buttonValidate = () => {
    if (isValid) return 'mt-4 w-full items-center px-4 py-2 border border-amber-500 rounded-lg shadow-sm text-sm font-medium text-black hover:bg-amber-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-600 transition-all duration-500';
    return 'mt-4 w-full items-center px-4 py-2 border border-amber-500 rounded-lg shadow-sm text-sm font-medium text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-600 transition-all duration-500 opacity-50';
  };
  
  const validatorConfig = {
    email: {
      isRequired: {
        message: 'Электронная почта обязательна для заполнения'
      },
      isEmail: {
        message: 'Email введен некорректно'
      }
    },
    name: {
      isRequired: {
        message: 'Имя обязательно для заполнения'
      }
    },
    licence: {
      isRequired: {
        message: 'Необходимо подтвердить внесение изменений'
      }
    }
  };
  const validate = () => {
    const errors = validator(data,
      validatorConfig);
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };
  
  useEffect(() => {
    validate();
  },
  [data]);
  const isValid = Object.keys(errors).length === 0;
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    const isValid = validate();
    if (!isValid) return;
    dispatch(updateUser(data));
    await history.push(`/users/${currentUserId}`);
  };
  return (
    <div className="relative mx-auto container mt-5 mb-10 min-h-[500px] min-h-full flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8">
      <BackHistoryButton/>
      <h2  className="mt-6 mb-3 text-center text-3xl font-extrabold text-gray-900">Редактировать данные пользователя</h2>
      <div className="max-w-md w-full space-y-8 bg-white rounded-[15px] p-5 border border-amber-600">
        {data
          ?
          (<form onSubmit={handleSubmit}>
            <TextField
              label="Имя"
              name="name"
              value={data.name}
              onChange={handleChange}
              error={errors.name}
            />
            <TextField
              label="Электронная почта"
              name="email"
              value={data.email}
              onChange={handleChange}
              error={errors.email}
            />
            <RadioField
              value={data.sex}
              onChange={handleChange}
              options={[
                { name: 'Male', value: 'male' },
                { name: 'Female', value: 'female' },
                { name: 'Other', value: 'other' }
              ]}
              name="sex"
              label="Выберите ваш пол"
            />
            <button
              className={buttonValidate()}
              type="submit"
              disabled={!isValid}
            >
                  Подтвердить
            </button>
          </form>)
          : (<Loader/>)
        }
      </div>
    </div>
  );
 
};
export default EditUserForm;