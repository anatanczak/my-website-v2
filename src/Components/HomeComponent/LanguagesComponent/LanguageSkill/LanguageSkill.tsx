import React, { FunctionComponent, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import useIntersectionObserver from '../../../../CustomHooks/useIntersectionObserver';

import Language from '../LanguageInterface';

import './styles.scss';

type LanguageSkillProps = {
  language: Language;
};

const LanguageSkill: FunctionComponent<LanguageSkillProps> = ({ language }) => {
  const { t }: { t: any } = useTranslation();
  const languageDivRef = useRef<HTMLDivElement | null>(null);

  const [languageLevelDivIsVisible, entry] = useIntersectionObserver({
    elementRef: languageDivRef
  });

  const levelSize = { '--size': `${language.level}%` } as React.CSSProperties;

  return (
    <div className="LanguageSkillContainer">
      <p className="LanguageSkillContainer-Label">{t(language.label)}</p>
      <div className="LanguageSkillContainer-LevelContainer">
        <div
          className={
            languageLevelDivIsVisible
              ? 'LanguageSkillContainer-LevelContainer-Level LanguageSkillContainer-LevelContainer-LevelMoves'
              : 'LanguageSkillContainer-LevelContainer-Level LanguageSkillContainer-LevelContainer-LevelIsInvisible'
          }
          style={levelSize}
          ref={languageDivRef}
        ></div>
      </div>
    </div>
  );
};

export default LanguageSkill;
