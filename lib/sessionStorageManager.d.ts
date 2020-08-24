import { PersistManager } from './persistManager';
export declare class SessionStorageManager<T> implements PersistManager<T> {
    setValue(key: string, data: T): T;
    getValue(key: string): T;
}
