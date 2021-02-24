import React from 'react';
import './styles.scss';


const ErrorUnauthorized: React.FC = () =>(
  <div className="error">
    <h2>RESTRICT PAGE</h2>
    <p>
      You don't have access to visit the requested page, please go back to home
      page.
    </p>
  </div>
)

export default ErrorUnauthorized;


