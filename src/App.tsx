import './styles/App.css';
import { NavStack } from './components/nav/NavStack';
import { AddPage } from './components/pages/add/AddPage';
import { SummaryPage } from './components/pages/summary/SummaryPage';
import { HistoryPage } from './components/pages/history/HistoryPage';

function App() {

  return (
    <div className="app">
      <div className="app-pages">
        <div className="page-wrapper">
          <AddPage />
        </div>
        <div className="page-wrapper page-enabled">
          <SummaryPage />
        </div>
        <div className="page-wrapper">
          <HistoryPage />
        </div>
      </div>
      <NavStack />
    </div>
  );
}

export default App;
