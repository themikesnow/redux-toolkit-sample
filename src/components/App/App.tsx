import classnames from 'classnames';
import Navbar from '../Common/Navbar/Navbar';
import Container from '../Common//Container/Container';
import { useTheme } from '../../hooks/theme-hook';
import  Persons from '../../features/person/Persons';


function App() {
  const [theme, setTheme] = useTheme();
  
  return (
    <div className={classnames(theme, 'bg-gray-100 w-full min-h-screen m-0 font-sans subpixel-antialiased')}>
      <Navbar onToggleMode={(isEnabled: boolean) => { setTheme(theme === 'light' ? 'dark' : 'light'); }}/>
      <Persons />
    </div>
  );
}

export default App;
