import React from 'react';  

interface ErrorProps {  
  statusCode: number;  
}  

const Error: React.FC<ErrorProps> = ({ statusCode }) => {  
  return (  
    <div className="error-container">  
      <h1>{statusCode ? `An error occurred: ${statusCode}` : 'Something went wrong'}</h1>  
      <p>  
        {statusCode === 404  
          ? 'The page you are looking for could not be found.'  
          : 'Please try again later.'}  
      </p>  
    </div>  
  );  
};  

export default Error;