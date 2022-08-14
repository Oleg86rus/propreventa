import React from 'react';
import { Breadcrumbs } from '@material-tailwind/react';
import { NavLink, useHistory, withRouter } from 'react-router-dom';

const Breadcrumb = () => {
  const { location } = useHistory();
  const pathnames = location.pathname.split('/').filter((el) => el);
  const renderRoute = [
    { name: '/checkups', label: ' Чек-апы ' },
    { name: '/analyzes', label: ' Анализы ' },
    { name: '/geneticResearch', label: ' Генетические-исследования ' },
    { name: '/IVTherapy', label: ' IV-терапия ' },
    { name: '/doctors', label: ' Врачи ' },
    { name: '/ultrasounds', label: ' УЗИ ' },
    { name: '/favourites', label: ' избранное ' },
    { name: '/user', label: ' пользователь ' },
    { name: '/user/edit', label: ' редактировать ' },
  ];
  
  return (
    <Breadcrumbs separator=" / ">
      <NavLink to="/" className="opacity-60">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"/>
        </svg>
      </NavLink>
      {pathnames.map((pathname, index) => {
        const routeTo = `/${pathnames.slice(0,
          index + 1).join('/')}`;
        const isLast = index === pathnames.length - 1;
        const result = renderRoute.filter(r => r.name === routeTo);
          
        return result.map((element, index) => {
          return (
            <div key={index}>
              { isLast
                ? <span className="text-secondary ms-1"> {element.label} </span>
                : <NavLink to={routeTo} className="navLinkStyle ms-1"> {element.label} </NavLink> }
            </div>
          );
        });
      })}
    </Breadcrumbs>
  );
};

export default withRouter(Breadcrumb);