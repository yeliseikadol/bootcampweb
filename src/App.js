import './sass/style.sass';
import SectionTitle from './components/SectionTitle';
import SectionLead from './components/SectionLead';
import SectionFeatures from './components/SectionFeatures';
import SectionProcess from './components/SectionProcess';
import SectionCurriculum from './components/SectionCurriculum';
import SectionResult from './components/SectionResult';
import SectionTutors from './components/SectionTutors';
import SectionEnroll from './components/SectionEnroll';
import Header from './components/Header';
import SectionFaq from './components/SectionFaq';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <SectionTitle/>
      <SectionLead/>
      <SectionFeatures/>
      <SectionProcess/>
      <SectionCurriculum/>
      <SectionResult/>
      <SectionTutors/>
      <SectionEnroll/>
      <SectionFaq/>
      <Footer/>
    </div>
  );
}

export default App;
