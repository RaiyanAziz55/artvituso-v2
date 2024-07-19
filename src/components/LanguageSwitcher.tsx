// src/components/LanguageSwitcher.tsx

import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  return (
    <div className="language-switcher flex gap-2">
      <button onClick={() => changeLanguage('en')}>EN</button>
      <button onClick={() => changeLanguage('fr')}>FR</button>
    </div>
  );
};

export default LanguageSwitcher;
