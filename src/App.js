import react, { useState } from 'react';
import './index.css';
import Header from './Header';
import Footer from './Footer';
import Createnote from './Createnote';
import Note from './Note';


const App =() =>{

  const [addItem,setAddItem] = useState([]);
  
  const storeNote=(note)=>{
    console.log('i am clicked');
    setAddItem((prevData)=>{
      return (
        [...prevData,note]
        ); 
      
  });
  
  }

  const onDelete =(id) =>{
    setAddItem((prev)=>{
        return(
          addItem.filter((val,index)=>{
            return(
              index != id
            )
          })
        )
    })
  }


  return(
    <>
    <Header />
    <Createnote addNote={storeNote} />
   
    {
      addItem.map((current ,index)=>{
        return(
          <Note 
            key={index}
            id={index}
            title={current.title}
            content={current.content}
            DeleteItem={onDelete}
          />
        )
      })
    }
    <Footer />
    </>
  );


}
export default App;