import ToTop from './components/ToTop';
import NavMenuContextProvider from './contexts/NavMenuContext';
import About from './layout/About';
import Home from './layout/Home';
import NavMenu from './layout/NavMenu';
import PageHeader from './layout/PageHeader';
import Projects from './layout/Projects';

function App() {
  return (
    <div className="relative overflow-hidden font-body min-h-screen bg-bgk dark:bg-black dark:text-white transition-colors pb-6 md:pb-9  lg:pb-12">
      <NavMenuContextProvider>
        <PageHeader />
        <NavMenu />
        <Home />
        <About />
        <Projects />
        <ToTop />
      </NavMenuContextProvider>
    </div>
  );
}

export default App;
