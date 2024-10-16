import { Outlet } from 'react-router-dom';
import AppHeader from './AppHeader';
import Sidebar from './Sidebar';

function AppLayoutReal() {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="flex flex-1 flex-col">
        <AppHeader />
        <main className="flex-1 overflow-y-auto bg-gray-200">
          <div className="mx-auto max-w-full p-4">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}

export default AppLayoutReal;
