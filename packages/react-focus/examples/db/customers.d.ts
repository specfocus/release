declare const _default: (db: any, { serializeDate }: {
    serializeDate: any;
}) => {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    address: string;
    zipcode: string;
    city: string;
    stateAbbr: string;
    avatar: string;
    birthday: string | Date;
    first_seen: string | Date;
    last_seen: string | Date;
    has_ordered: boolean;
    latest_purchase: any;
    has_newsletter: boolean;
    groups: any[];
    nb_commands: number;
    total_spent: number;
}[];
export default _default;
