// App.tsx
import './App.css';
import Navbar from './Navbar';
import Contacts from './Contacts';
import Footer from './Footer';
import Sidebar from './Sidebar';
import { useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();
  const showContacts = location.pathname === '/';

  return (
    <>
      <Navbar />
      <Sidebar />
      {showContacts && <Contacts />}
      <Footer />
    </>
  );
}

export default App;