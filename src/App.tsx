import React from 'react';
import { BrowserRouter, HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/common/Layout';
import { Home } from './pages/Home';
import { GalleryPage } from './pages/GalleryPage';
import { PoetryPage } from './pages/PoetryPage';
import { LilySanctuaryPage } from './pages/LilySanctuaryPage';
import { MindsetPage } from './pages/MindsetPage';
import { PerspectivePage } from './pages/PerspectivePage';
import { RemindersPage } from './pages/RemindersPage';
import { PersonalSpacePage } from './pages/PersonalSpacePage';

// HashRouter ensures seamless direct route support on any static host or local preview
export const App: React.FC = () => {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/poetry" element={<PoetryPage />} />
          <Route path="/lily-sanctuary" element={<LilySanctuaryPage />} />
          <Route path="/mindset" element={<MindsetPage />} />
          <Route path="/perspective" element={<PerspectivePage />} />
          <Route path="/reminders" element={<RemindersPage />} />
          <Route path="/personal-space" element={<PersonalSpacePage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
};

export default App;
