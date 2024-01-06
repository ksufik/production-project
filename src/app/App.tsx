import './styles/index.scss';
import { Link } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from './providers/ThemeProvider/router';
import { Navbar } from 'widgets/Navbar';
export default function App() {
  const { theme } = useTheme();

  return (
    <div className={classNames('app', [theme])}>
      <Navbar />
      <AppRouter />
    </div>
  );
}
