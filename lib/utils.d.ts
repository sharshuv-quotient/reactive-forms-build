import { Observable } from 'rxjs';
export declare function coerceArray<T>(value: T | T[]): T[];
export declare function isFunction(x: any): x is Function;
export declare function isNil(v: any): boolean;
export declare function isPromise(value: any): value is Promise<unknown>;
export declare function wrapIntoObservable<T>(value: T | Promise<T> | Observable<T>): Observable<T>;
