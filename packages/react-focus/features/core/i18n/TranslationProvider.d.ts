import { ReactNode } from 'react';
import { I18nProvider } from '../types';
export interface TranslationProviderProps {
    locale?: string;
    i18nProvider: I18nProvider;
    children: ReactNode;
}
/**
 * Creates a translation context, available to its children
 *
 * @example
 *     const MyApp = () => (
 *         <Provider store={store}>
 *             <TranslationProvider i18nProvider={i18nProvider}>
 *                 <!-- Child components go here -->
 *             </TranslationProvider>
 *         </Provider>
 *     );
 */
declare const TranslationProvider: (props: TranslationProviderProps) => JSX.Element;
export default TranslationProvider;
