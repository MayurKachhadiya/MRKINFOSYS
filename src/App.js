import React,{useState} from 'react';
import Header from './Header';
import Create from './Create';
import Note from './Note';
import Footer from './Footer';

function App() {
  const [addItem, setAddItem] = useState([]);
  const addbtn=(input)=>{
    setAddItem((prevval)=>{
      return [...prevval,input];
    }); 
  }
  const onDelete = (id)=>{
    setAddItem((old)=>
     old.filter((currdata,indx)=>{
        return indx !== id;
      })
    );
  };

  return (
    <>
   <Header/>
   <Create passnote={addbtn} />

   {addItem.map((val,index) => {
    return( 
      <Note
      key={index}
      id={index}
      title={val.title}
      content={val.content}
      deleteItem={onDelete}
    />
    );
   })}
 
   <Footer/>
   </>
  );
}

export default App;
