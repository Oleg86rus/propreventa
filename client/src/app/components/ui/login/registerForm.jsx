import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { validator } from '../../../utils/validator';
import { sighUp } from '../../../store/users';
import TextField from '../../common/form/textField';
import RadioField from '../../common/form/radioField';
import CheckboxField from '../../common/form/checkboxField';
import { useHistory } from 'react-router-dom';


const RegisterForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [data, setData] = useState({
    email: '',
    password: '',
    sex: 'male',
    name: '',
    licence: false
  });
  const [errors, setErrors] = useState({});
 
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
      },
      min: {
        message: 'Имя должно состоять минимум из 3 символов',
        value: 3
      }
    },
    password: {
      isRequired: {
        message: 'Пароль обязателен для заполнения'
      },
      isCapital: {
        message: 'Пароль должен содержать хотя бы одну заглавную букву'
      },
      isContainDigit: {
        message: 'Пароль должен содержать хотя бы одно число'
      },
      min: {
        message: 'Пароль должен состоять минимум из 8 символов',
        value: 8
      }
    },
    licence: {
      isRequired: {
        message: 'Вы не можете использовать наш сервис без подтверждения лицензионного соглашения'
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
    dispatch(sighUp(data));
  };
  const buttonValidate = () => {
    if (isValid) return 'mt-4 w-full items-center px-4 py-2 border border-amber-500 rounded-lg shadow-sm text-sm font-medium text-black hover:bg-amber-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-600 transition-all duration-500';
    return 'mt-4 w-full items-center px-4 py-2 border border-amber-500 rounded-lg shadow-sm text-sm font-medium text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-600 transition-all duration-500 opacity-50';
  };
  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Электронная почта"
        name="email"
        value={data.email}
        onChange={handleChange}
        error={errors.email}
      />
      <TextField
        label="Имя"
        name="name"
        value={data.name}
        onChange={handleChange}
        error={errors.name}
      />
      <TextField
        label="Пароль"
        type="password"
        name="password"
        value={data.password}
        onChange={handleChange}
        error={errors.password}
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
      <CheckboxField value={data.licence} onChange={handleChange} name="licence"
        error={errors.licence}>
        Подтвердить <a>лицензионное соглашение</a>
      </CheckboxField>
      <button
        className={buttonValidate()}
        type="submit"
        disabled={!isValid}
      >
        Зарегистрироваться
      </button>
    </form>
  );
};
export default RegisterForm;