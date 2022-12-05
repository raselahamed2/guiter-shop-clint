import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './Routes/Routes/Route';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="bg-accent">
      <RouterProvider router={router} />
      <Toaster></Toaster>
    </div>
  );
}

export default App;
