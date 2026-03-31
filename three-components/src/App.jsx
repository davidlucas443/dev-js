import BreadcrumbCSS from './components/BreadcrumbCSS';
import BreadcrumbModule from './components/BreadcrumbModule';
import BreadcrumbStyled from './components/BreadcrumbStyled';

function App() {
  return (
    <div>
      <h1> Breadcrumbs em React</h1>

      <h2>CSS Tradicional</h2>
      <BreadcrumbCSS />

      <h2>CSS Module</h2>
      <BreadcrumbModule />

      <h2>Styled Components</h2>
      <BreadcrumbStyled />
    </div>
  );
}

export default App;