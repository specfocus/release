declare global {
    interface Navigator {
        msSaveOrOpenBlob: (blocb: BlobPart, filename: string) => void;
    }
}
declare const _default: (csv: BlobPart, filename: string) => void;
export default _default;
