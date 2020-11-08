import * as React from 'react';
import { LanguageStateProvider } from './LanguageState/LanguageStateContext';
import { UIStateProvider } from './UIState/UIStateContext';

export function withCustomStateProviders(Component: any) {
  return function WrapperComponent(props: any) {
    return (
      <UIStateProvider>
        <LanguageStateProvider>
          <Component {...props} />
        </LanguageStateProvider>
      </UIStateProvider>
    );
  };
}
