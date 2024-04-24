import { Moon, Sun } from '@phosphor-icons/react';
import Navigation from '@/components/Header/Navigation';
import LanguageToggle from '@/components/Header/LanguageToggle';
import { t } from 'i18next';
import { HeaderMain, Title } from '@/components/Header/styles/index.styles';
import { useRef, useEffect, useState } from 'react';
import { useMainRef } from '@/contexts/HomeSectionsContext';
import useClickOutside from '@/hooks/useClickOutside';

type HeaderProps = {
  closeMenu: () => void;
  themeToggle: () => void;
  showMenu: boolean;
  themeName: string;
}

/**
 * Header component is closed when user clicks outside HeaderMain.
 *
 * @param themeToggle - Function to toggle the theme.
 * @param showMenu - Boolean indicating whether the menu is shown or not.
 * @param themeName - Current theme name.
 * @param closeMenu - Function to close the menu.
 * @returns The rendered Header component.
 */
const Header = ({ themeToggle, showMenu, themeName, closeMenu }: HeaderProps): JSX.Element => {  
  const headerRef = useRef<HTMLDivElement>(null);
  useClickOutside(headerRef, closeMenu);

  const [isOnTop, setIsOnTop] = useState(true);
  const mainRef = useMainRef();

  useEffect(() => {
    if (mainRef === null || mainRef.current === null) return;

    const handleScroll = () => {
      const currentScrollPosition = mainRef?.current?.scrollTop;
      if (currentScrollPosition) setIsOnTop(currentScrollPosition < 234);
    };

    mainRef.current.addEventListener('scroll', handleScroll);

    return () => {
      mainRef?.current?.removeEventListener('scroll', handleScroll);
    }
  }, [])

  return (
    <HeaderMain $showMenu={showMenu} ref={headerRef} $isOnTop={isOnTop}>
      <Title $isOnTop={isOnTop}>
        <button className='color-mode-toggle' onClick={themeToggle}>
          { themeName === 'light' ? <Moon size={30} /> : <Sun size={30} /> }
          <span>{ themeName === 'light' ? t('Dark Mode') : t('Light Mode') }</span>
        </button>
        <Navigation isOnTop={isOnTop} closeMenu={closeMenu} />
        <LanguageToggle isOnTop={isOnTop} />
      </Title>
    </HeaderMain>
  );
};

export default Header;