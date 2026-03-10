
import './App.css'

import Card from './card.jsx';

const App = () => {
  const data = [
    { id: 1, name:"C++ Kids Eco",date:"Jan 17,2026",location:"Profsoyuz", count:14, req:15 },
    { id: 2, name:"Python",date:"Feb 10,2026",location:"Profsoyuz" , count:14, req:15 },
    { id: 3, name:"Html&Css March 2026",date:"March 5,2026",location:"Sozidaniya" , count:13, req:15 },
    { id: 3, name:"Html&Css March 2026",date:"March 5,2026",location:"Sozidaniya" , count:14, req:15 },
    { id: 3, name:"Html&Css March 2026",date:"March 5,2026",location:"Sozidaniya" , count:14, req:15 },
    { id: 3, name:"Html&Css March 2026",date:"March 5,2026",location:"Sozidaniya" , count:1, req:15 },
    { id: 3, name:"Html&Css March 2026",date:"March 5,2026",location:"Sozidaniya" , count:10, req:15 },
    { id: 3, name:"Html&Css March 2026",date:"March 5,2026",location:"Sozidaniya" , count:1, req:15 },
    { id: 3, name:"Html&Css March 2026",date:"March 5,2026",location:"Sozidaniya" , count:13, req:15 },
    { id: 3, name:"Html&Css March 2026",date:"March 5,2026",location:"Sozidaniya" , count:14, req:15 },
    { id: 3, name:"Html&Css March 2026",date:"March 5,2026",location:"Sozidaniya" , count:14, req:15 },
    { id: 3, name:"Html&Css March 2026",date:"March 5,2026",location:"Sozidaniya" , count:14, req:15 },
  ];

  return (
    <div style={{display:"grid",gridTemplateColumns: "repeat(4, 1fr)"}}>
      {data.map((item) => (
        <Card 

          key={item}
          name={item.name}
          date={item.date}
          location={item.location}
          count={item.count}
          req={item.req}
        />
      ))}
    </div>
  );
};

export default App;