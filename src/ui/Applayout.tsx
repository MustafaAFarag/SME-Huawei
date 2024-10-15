import { Outlet } from 'react-router-dom';
import AppHeader from './AppHeader';
import Sidebar from './Sidebar';

function AppLayout() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-1 flex-col overflow-hidden">
        <AppHeader />
        <main className="flex-1 overflow-y-auto overflow-x-hidden bg-gray-200 p-4">
          <div className="mx-auto max-w-full rounded-lg bg-white p-4 shadow-md">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}

export default AppLayout;
