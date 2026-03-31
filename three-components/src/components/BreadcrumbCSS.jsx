import { useState } from 'react';
import './breadcrumb.css';

function BreadcrumbCSS() {
  const [path, setPath] = useState(['Home', 'Produtos', 'Detalhes']);

  const handleClick = (index) => {
    setPath(path.slice(0, index + 1));
  };

  return (
    <div className="breadcrumb">
      {path.map((item, index) => (
        <span key={index} onClick={() => handleClick(index)}>
          {item}
        </span>
      ))}
    </div>
  );
}

export default BreadcrumbCSS;