import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Registration from './Authorization/Registration';
import Landing_Page from './Landing/Landing_Page';
import Login_page from './Authorization/Login_page';
import Schedule_Appointment from './Appointment/Appointment';

function App() {
  const [currentUserType, setCurrentUserType] = React.useState('')
  React.useEffect(() => {
    const storedUser = localStorage.getItem('user');
    // console.log(id)
    let currentUse = null;
    // user.Type_user==="Admin"
    if (storedUser) {
    currentUse = JSON.parse(storedUser);
    console.log("$$$$$$$$$",currentUse)
    setCurrentUserType(currentUse.Type_user);
    } else {
        console.log("user not there")
    }

  },[])
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/registration" element={<Registration />} />
          <Route path= "/login" element={<Login_page/>}/>
          <Route path= "/landing-page" element={<Landing_Page/>}/>
          <Route path= "/schedule" element={<Schedule_Appointment/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;