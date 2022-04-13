/** completion */
export interface DoneWhat {
    kind: 'done';
    done: number;
}
export interface FailWhat {
    kind: 'fail';
    cause: string;
}
export interface InfoWhat {
    kind: 'info';
}
export interface MailWhat {
    kind: 'mail';
    sender: string;
    recipient: string;
    subject: string;
    body: string;
}
export interface SkipWhat {
    kind: 'skip';
}
export interface TextWhat {
    kind: 'text';
    message: string;
}
export declare type AlertWhat = DoneWhat | FailWhat | SkipWhat | InfoWhat;
