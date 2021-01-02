import React, {useState} from 'react'

import Global from './GlobalStyles';
import Modals from './components/Modal';

function App() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Global />
      
      <button onClick={() => setOpen(true)}>Open Modal</button>

      <Modals 
       open={open} setOpen={setOpen}
       backgroundColor={'#fff'}
       width = {55}
       height = {68}>
         <div>
           <button className="button_close" onClick={() => setOpen(false)}>X</button>

         </div>
        
      </Modals>

    </>
  );
}

export default App;
