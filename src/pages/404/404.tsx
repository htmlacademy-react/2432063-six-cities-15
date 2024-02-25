import { Link } from 'react-router-dom';
import { Fragment } from 'react';

function Error(): JSX.Element {
  return (
    <Fragment>
      <h1>
  404.
        <br />
        <small>Page not found</small>
      </h1>
      <Link to="/">Go to main</Link>
    </Fragment>
  );
}

export default Error;
