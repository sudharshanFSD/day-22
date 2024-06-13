import React from 'react';
import Cards from './components/Cards';


const App = () => {
  
    const arrObj = [
      {
        id: "FREE",
        price:"$0/month",
        user:"Single User",
        proIcon:"fa fa-times",
        projectType:"text-muted", 
        supIcon:"fa fa-times",
        support:"text-muted",
        domIcon:"fa fa-times",
        domain: "text-muted",
        repIcon:"fa fa-times",
        reporttype:"text-muted"
      },
      {
        id: "PLUS",
        price:"$9/month",
        user:"5 Users",
        projectType:"", 
        proIcon:"fa fa-check",
        support:"",
        supIcon:"fa fa-check", 
        domain: "", 
        domIcon:"fa fa-check",
        repIcon:"fa fa-times",
        reporttype:"text-muted"
      },
      {
        id: "PRO",
        price:"$49/month",
        user:"Unlimited Users",
        projectType:"", 
        proIcon:"fa fa-check",
        support:"",
        supIcon:"fa fa-check", 
        domain: "", 
        domIcon:"fa fa-check",
        reporttype:"",
        repIcon:"fa fa-check"
     }
    ]
  return (
    <div className='component'>
    
      <Cards arrObj={arrObj} />
      
    </div>
  );
};

export default App;