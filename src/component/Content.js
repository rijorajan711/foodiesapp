import React from 'react'; 
const Content = (props) => {
  return (
  <div className="cursor-pointer">
       <p className="text-xs">{props.name}</p>
       <p  className="font-bold">{props.content}</p>
  </div>
  )
};

export default Content;
