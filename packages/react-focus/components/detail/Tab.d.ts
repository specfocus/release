import { ReactElement, ReactNode } from 'react';
import PropTypes from 'prop-types';
import { TabProps as MuiTabProps } from '@mui/material';
import { Record } from '../../features/core';
/**
 * Tab element for the SimpleShowLayout.
 *
 * The `<Tab>` component accepts the following props:
 *
 * - label: The string displayed for each tab
 * - icon: The icon to show before the label (optional). Must be a component.
 * - path: The string used for custom urls
 *
 * @example
 *     // in src/posts.js
 *     import * as React from "react";
 *     import FavoriteIcon from '@mui/icons-material/Favorite';
 *     import PersonPinIcon from '@mui/icons-material/PersonPin';
 *     import { Show, TabbedShowLayout, Tab, TextField } from '../../app';
 *
 *     export const PostShow = (props) => (
 *         <Show {...props}>
 *             <TabbedShowLayout>
 *                 <Tab label="Content" icon={<FavoriteIcon />}>
 *                     <TextField source="title" />
 *                     <TextField source="subtitle" />
 *                </Tab>
 *                 <Tab label="Metadata" icon={<PersonIcon />} path="metadata">
 *                     <TextField source="category" />
 *                </Tab>
 *             </TabbedShowLayout>
 *         </Show>
 *     );
 *
 *     // in src/App.js
 *     import * as React from "react";
 *     import { Admin, Resource } from '../../app';
 *
 *     import { PostShow } from './posts';
 *
 *     const App = () => (
 *         <Admin dataProvider={...}>
 *             <Resource name="posts" show={PostShow} />
 *         </Admin>
 *     );
 *     export default App;
 */
export declare const Tab: {
    ({ basePath, children, contentClassName, context, className, icon, label, record, resource, syncWithLocation, value, ...rest }: TabProps): JSX.Element;
    propTypes: {
        className: PropTypes.Requireable<string>;
        contentClassName: PropTypes.Requireable<string>;
        children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        context: PropTypes.Requireable<string>;
        icon: PropTypes.Requireable<PropTypes.ReactElementLike>;
        label: PropTypes.Validator<string>;
        path: PropTypes.Requireable<string>;
        value: PropTypes.Requireable<string | number>;
    };
};
export interface TabProps extends Omit<MuiTabProps, 'children'> {
    basePath?: string;
    children: ReactNode;
    contentClassName?: string;
    context?: 'header' | 'content';
    className?: string;
    icon?: ReactElement;
    label: string;
    path?: string;
    record?: Record;
    resource?: string;
    syncWithLocation?: boolean;
    value?: string | number;
}
