import './styles/App.css';
import { NavStack } from './components/nav/NavStack';
import { AddPage } from './components/pages/add/AddPage';
import { SummaryPage } from './components/pages/summary/SummaryPage';
import { HistoryPage } from './components/pages/history/HistoryPage';
import { useState } from 'react';
import { SettingPage } from './components/pages/setting/SettingPage';

function App() {
  const [currentPage, setCurrentPage] = useState(1);

  const isPageEnabled = (index: number) => {
    return index === currentPage ? "page-enabled" : "";
  }

  return (
    <div className="app">
      <div className="app-pages">
        <div className={`page-wrapper ${isPageEnabled(0)}`}>
          <AddPage />
        </div>
        <div className={`page-wrapper ${isPageEnabled(1)}`}>
          <SummaryPage />
        </div>
        <div className={`page-wrapper ${isPageEnabled(2)}`}>
          <HistoryPage />
        </div>
        <div className={`page-wrapper ${isPageEnabled(3)}`}>
          <SettingPage />
        </div>
      </div>
      <NavStack 
        onClickAddPage={() => setCurrentPage(0)}
        onClickSummaryPage={() => setCurrentPage(1)}
        onClickHistoryPage={() => setCurrentPage(2)}
        onClickSettingPage={() => setCurrentPage(3)}/>
    </div>
  );
}

export default App;
