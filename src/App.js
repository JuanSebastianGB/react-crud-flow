import { Fragment } from 'react';
import CrudApi from './components/CrudApi';
import CrudApp from './components/CrudApp';

function App() {
  return (
    <Fragment>
      <CrudApi />
      <hr />
      <CrudApp />
    </Fragment>
  );
}

export default App;
