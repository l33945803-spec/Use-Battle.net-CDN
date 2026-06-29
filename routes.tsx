import { createBrowserRouter } from 'react-router';
import Layout from './components/Layout';
import { About } from './pages/About';
import Purchase from './pages/Purchase';
import Rental from './pages/Rental';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      { index: true, Component: About },
      { path: 'purchase', Component: Purchase },
      { path: 'rental', Component: Rental },
    ],
  },
]);