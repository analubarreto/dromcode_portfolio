import Button from '@/components/Button';
import { MainDiv } from '@/pages/styles/UnderConstruction.styles';
import { useTranslation } from 'react-i18next';

/**
 * Renders the under construction page.
 * @returns The JSX element representing the under construction page.
 */
const UnderConstruction = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <MainDiv>
      <img loading='lazy' src='/images/under_construction-no-bg.webp' alt={ t('Under Construction') } />
      <h1>{ t('Under Construction') }</h1>
      <p>{ t('Under Construction Sub') }</p>
      <Button ariaLabel={t('Under Constrction Button')} isLink href="/">{ t('Go back') }</Button>
    </MainDiv>
  );
};

export default UnderConstruction;