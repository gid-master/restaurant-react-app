import React from 'react';
import './styles.scss';


const ErrorUnexpected: React.FC = () =>(
  <div className="error">
    <h2>UNEXPECTED ERROR</h2>
    <p>
      Something unexpected happened, please try again soon.
    </p>
  </div>
)

export default ErrorUnexpected;


