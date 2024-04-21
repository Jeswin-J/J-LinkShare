import './App.css';
import ShareLink from './components/shareLink/ShareLink';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Header />
      <ShareLink/>
      <Footer />
    </div>
  );
}

export default App;
