import './App.css';

// Uncomment untuk memuat daftar kontak
import contacts from './data/contacts.json';
import Header from './components/Header.js';
import Contact from './components/Contact';



const App = () => {
    // Masukkan Header dan Contact ke dalam div App
    return ( <><div className = "App" ><Header /></div>
    <div className='container'>
        <Contact dataKontak= {contacts[0]}/>
        <Contact dataKontak= {contacts[1]}/>
        <Contact dataKontak= {contacts[2]}/>
        <Contact dataKontak={contacts[3]}/>
        <Contact dataKontak={contacts[4]}/>
        <Contact dataKontak= {contacts[5]}/>
    </div></>
    );
}

export default App;
