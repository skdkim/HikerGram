import React from 'react';

const App = (props) => (
    <main>
      {props.children}
      <footer className="footer">This is the footer.</footer>
    </main>
);

export default App;
