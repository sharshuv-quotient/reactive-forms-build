import { FormControl } from '../formControl';
import { FormGroup } from '../formGroup';
import { FormArray } from '../formArray';
export interface NestedForm {
    a: number;
    b?: {
        a: string;
        c: number[];
    };
    c?: {
        a: number;
    }[];
    d?: boolean;
}
export interface NestedFormControls {
    a: FormControl<number>;
    b: FormGroup<{
        a: FormControl<string>;
        c: FormArray<FormControl<number>>;
    }>;
    c: FormArray<FormGroup<{
        a: number;
    }>>;
}
export interface User {
    id: number;
    name?: string;
}
export interface Errors {
    required: boolean;
    pattern: {
        requiredPattern: string;
        actualValue: string;
    };
}
export declare const user: User;
export declare const nestedFormValue: NestedForm;
export declare const errors: Errors;
export declare const required: (control: any) => {
    required: boolean;
};
export declare const pattern: (control: any) => {
    pattern: {
        requiredPattern: string;
        actualValue: string;
    };
};
export declare const requiredAsync: (control: any) => import("rxjs").Observable<{
    required: boolean;
}>;
export declare const patternAsync: (control: any) => import("rxjs").Observable<{
    pattern: {
        requiredPattern: string;
        actualValue: string;
    };
}>;
