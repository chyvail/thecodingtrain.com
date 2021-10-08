import React, { useState } from 'react';
import cn from 'classnames';

import Button from './Button';
import * as css from './Tabs.module.css';

import ShareIcon from '../images/share.svg';

export const Tabs = ({ className, variant, labels, children, shareLink }) => {
  const [active, setActive] = useState(0);

  const onClick = (value) => {
    setActive(value);
  };

  return (
    <div className={cn(css.root, className, { [css[variant]]: variant })}>
      <div className={css.tabs}>
        <ul>
          {labels.map((label, key) => (
            <li key={key}>
              <Button
                className={cn(css.tab, {
                  [css.active]: key === active
                })}
                onClick={() => onClick(key)}
                onKeyDown={() => onClick(key)}>
                {label}
              </Button>
            </li>
          ))}
        </ul>
        <Button className={css.share}>
          <ShareIcon />
          <span>Share</span>
        </Button>
      </div>
      {children.map((child, key) => (
        <div
          className={cn(css.component, {
            [css.activeComponent]: key === active
          })}
          key={key}>
          {child}
        </div>
      ))}
    </div>
  );
};

export default Tabs;
