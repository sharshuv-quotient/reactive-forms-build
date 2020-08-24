import { PersistManager } from './persistManager';
export declare class LocalStorageManager<T> implements PersistManager<T> {
    setValue(key: string, data: T): T;
    getValue(key: string): T;
}
