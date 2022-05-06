import { ReactElement } from 'react';
import PropTypes from 'prop-types';
import { TabsProps } from '@mui/material/Tabs';
import { TabProps } from './Tab';
export declare const TabbedShowLayoutTabs: {
    ({ children, syncWithLocation, value, ...rest }: TabbedShowLayoutTabsProps): JSX.Element;
    propTypes: {
        children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
    };
};
export declare const getTabFullPath: (tab: any, index: any, baseUrl: any) => string;
export interface TabbedShowLayoutTabsProps extends TabsProps {
    children?: ReactElement<TabProps>;
    syncWithLocation?: boolean;
}
