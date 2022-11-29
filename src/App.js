import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './Routes/Routes/Route';

function App() {
  return (
    <div className="bg-zinc-900">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
