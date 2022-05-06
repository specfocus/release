import React from 'react';
interface ContentEditableProps {
    children: string;
    onChange?: (value: string) => void;
    blurOn?: ('Escape' | 'Enter')[];
}
declare const ContentEditable: React.FC<ContentEditableProps>;
export default ContentEditable;
