import NavMenuContextProvider from './contexts/NavMenuContext';
import About from './layout/About';
import Home from './layout/Home';
import NavMenu from './layout/NavMenu';
import PageHeader from './layout/PageHeader';

function App() {
  return (
    <div className="relative overflow-hidden font-body min-h-screen bg-bgk dark:bg-black dark:text-white transition-colors">
      <NavMenuContextProvider>
        <PageHeader />
        <NavMenu />
        <Home />
        <About />
      </NavMenuContextProvider>
    </div>
  );
}

export default App;
