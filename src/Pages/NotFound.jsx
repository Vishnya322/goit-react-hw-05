import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div>
      <b>Ooops! Not found!</b>
      <Link to="/"> Back to Home page!</Link>
    </div>
  );
};
export default NotFound;
