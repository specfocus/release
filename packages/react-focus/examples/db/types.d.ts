import { Record, Identifier } from '../../app';
export interface Db {
    categories: Category[];
    companies: Company[];
    contactNotes: ContactNote[];
    contacts: Contact[];
    customers: Customer[];
    dealNotes: Record[];
    deals: Deal[];
    products: Product[];
    commands: Record[];
    invoices: Invoice[];
    reviews: Review[];
    sales: Sale[];
    tags: Record[];
    tasks: Record[];
}
export interface Sale extends Record {
    first_name: string;
    last_name: string;
    email: string;
}
export interface Company extends Record {
    name: string;
    logo: string;
    sector: string;
    size: 1 | 10 | 50 | 250 | 500;
    linkedIn: string;
    website: string;
    phone_number: string;
    address: string;
    zipcode: string;
    city: string;
    stateAbbr: string;
    nb_contacts: number;
    nb_deals: number;
    sales_id: Identifier;
    created_at: string;
}
export interface Contact extends Record {
    first_name: string;
    last_name: string;
    title: string;
    company_id: Identifier;
    email: string;
    avatar?: string;
    first_seen: string;
    last_seen: string;
    has_newsletter: Boolean;
    tags: Identifier[];
    gender: string;
    sales_id: Identifier;
    nb_notes: number;
}
export interface ContactNote extends Record {
    contact_id: Identifier;
    type: string;
    text: string;
    date: string;
    sales_id: Identifier;
    status: string;
}
export interface Deal extends Record {
    name: string;
    company_id: Identifier;
    contact_ids: Identifier[];
    type: string;
    stage: string;
    description: string;
    amount: number;
    created_at: string;
    updated_at: string;
    sales_id: Identifier;
    index: number;
    nb_notes: number;
}
export interface Category extends Record {
    name: string;
}
export interface Product extends Record {
    category_id: Identifier;
    description: string;
    height: number;
    image: string;
    price: number;
    reference: string;
    stock: number;
    thumbnail: string;
    width: number;
}
export interface Customer extends Record {
    first_name: string;
    last_name: string;
    address: string;
    stateAbbr: string;
    city: string;
    zipcode: string;
    avatar: string;
    birthday: string;
    first_seen: string | Date;
    last_seen: string | Date;
    has_ordered: boolean;
    latest_purchase: string;
    has_newsletter: boolean;
    groups: string[];
    nb_commands: number;
    total_spent: number;
}
export declare type OrderStatus = 'ordered' | 'delivered' | 'cancelled';
export interface Order extends Record {
    status: OrderStatus;
    basket: BasketItem[];
    date: Date;
    total: number;
}
export interface BasketItem {
    product_id: Identifier;
    quantity: number;
}
export interface Invoice extends Record {
}
export declare type ReviewStatus = 'accepted' | 'pending' | 'rejected';
export interface Review extends Record {
    date: Date;
    status: ReviewStatus;
    customer_id: Identifier;
    product_id: Identifier;
}
