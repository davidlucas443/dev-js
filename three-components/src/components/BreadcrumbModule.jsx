import { useState } from 'react';
import styles from './breadcrumb.module.css';

function BreadcrumbModule() {
  const [path, setPath] = useState(['Home', 'Serviços', 'Contato']);

  const handleClick = (index) => {
    setPath(path.slice(0, index + 1));
  };

  return (
    <div className={styles.container}>
      {path.map((item, index) => (
        <span
          key={index}
          className={styles.item}
          onClick={() => handleClick(index)}
        >
          {item}
        </span>
      ))}
    </div>
  );
}

export default BreadcrumbModule;