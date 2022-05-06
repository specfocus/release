declare const _default: (db: any, { serializeDate }: {
    serializeDate: any;
}) => {
    id: number;
    reference: string;
    date: string | Date;
    customer_id: any;
    basket: {
        product_id: number;
        quantity: number;
    }[];
    total_ex_taxes: number;
    delivery_fees: number;
    tax_rate: number;
    taxes: number;
    total: number;
    status: unknown;
    returned: boolean;
}[];
export default _default;
