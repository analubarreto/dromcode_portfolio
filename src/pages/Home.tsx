//@ts-ignore
import React from 'react';
import styled from 'styled-components';
// import { useTranslation } from 'react-i18next';
// import { useTheme } from '@/hooks/useTheme';
import Welcome from '@/components/Sections/Welcome';
import Experience from '@/components/Sections/Experience';
import Projects from '@/components/Sections/Projects';

const Main = styled.main<{ theme: any }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
`;

const Home = (): JSX.Element => {
  // const { t } = useTranslation();
  // const { theme } = useTheme();

  return (
    <Main>
      <Welcome />
      {/* <Experience />
      <Projects /> */}
    </Main>
  )
}

export default Home