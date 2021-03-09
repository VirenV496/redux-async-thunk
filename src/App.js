import React from 'react'
import './App.css';


import { Provider} from 'react-redux'
import store from './redux/store'
/* import AComp from './components/AComp'; */
import UserList from './components/UserList'


function App() {

return(

 <Provider  store={store}>
{/* 
        <AComp/> */}


      <UserList />



  </Provider>


  );
}

export default App;
