import React from 'react';

import SignIn from './Components/Login/SignIn';

function App() {
  const [action, setAction] = React.useState('')
  return (
    <div>
      <SignIn loginAction={action} setLoginAction={setAction}/>
    </div>
  );
}

export default App;
