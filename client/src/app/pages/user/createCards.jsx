import React, { useEffect, useState } from 'react';
import TextField from '../../components/common/form/textField';
import { validator } from '../../utils/validator';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { createCheckup } from '../../store/checkups';
import NavBar from '../../components/ui/navBar/navBar';
import { style } from '../../utils/constants';

const CreateCards = () => {
  const {h1} = style;
  const dispatch = useDispatch();
  const history = useHistory();
  const [data, setData] = useState({
    name: '',
    price: '',
    description: '',
    composition: [],
  });
  const [errors, setErrors] = useState({});
  
  const validatorConfig = {
    name: {
      isRequired: {
        message: 'Название обязательно для заполнения'
      },
      min: {
        message: 'Имя должно состоять минимум из 3 символов',
        value: 3
      }
    },
    price: {
      isRequired: {
        message: 'Цена обязательна для заполнения'
      }
    },
    description: {
      isRequired: {
        message: 'Описание обязателено для заполнения'
      }
    }
  };
  const handleChange = (target) => {
    setData((prevState) => ({ ...prevState, [target.name]: target.value }));
  };
  
  const validate = () => {
    const errors = validator(data,
      validatorConfig);
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };
  
  useEffect(() => {
    validate();
  }, [data]);
  
  const isValid = Object.keys(errors).length === 0;
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validate();
    if (!isValid) return;
    dispatch(createCheckup(data));
    history.push('/');
  };
  const buttonValidate = () => {
    if (isValid) return 'mt-4 w-full items-center px-4 py-2 border border-amber-500 rounded-lg shadow-sm text-sm font-medium text-black hover:bg-amber-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-600 transition-all duration-500';
    return 'mt-4 w-full items-center px-4 py-2 border border-amber-500 rounded-lg shadow-sm text-sm font-medium text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-600 transition-all duration-500 opacity-50';
  };
  return (
    <div className='min-h-[850px]'>
      <NavBar/>
      <div className='mt-[100px]'>
        <h1 className={h1}>Создать чек-ап</h1>
        <div className='mx-auto min-w-[300px] min-h-[400px] items-center p-6 max-w-sm bg-white rounded-lg border border-amber-200 shadow-md drop-shadow-xl '>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Название"
              name="name"
              value={data.name}
              onChange={handleChange}
              error={errors.name}
            />
            <TextField
              label="Цена"
              name="price"
              value={data.price}
              onChange={handleChange}
              error={errors.price}
            />
            <TextField
              label="Описание"
              name="description"
              value={data.description}
              onChange={handleChange}
              error={errors.description}
            />
            <button
              className={buttonValidate()}
              type="submit"
              disabled={!isValid}
            >
          Создать
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateCards;