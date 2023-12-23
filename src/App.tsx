import NavMenuContextProvider from './contexts/NavMenuContext';
import Home from './layout/Home';
import NavMenu from './layout/NavMenu';
import PageHeader from './layout/PageHeader';

function App() {
  return (
    <div className=" relative overflow-hidden font-body min-h-screen bg-bgk dark:bg-black dark:text-white transition-colors flex flex-col ">
      <NavMenuContextProvider>
        <PageHeader />
        <div className=" flex-1 overflow-hidden">
          <NavMenu />
          <Home />
        </div>
      </NavMenuContextProvider>
    </div>
  );
}

export default App;
