import { AbstractControl as NgAbstractControl, AbstractControlOptions as NgAbstractControlOptions, ValidationErrors as NgValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';
import { FormArray } from './formArray';
import { FormControl } from './formControl';
import { FormGroup } from './formGroup';
import { PersistManager } from './persistManager';
export declare type ValidationErrors<T = NgValidationErrors> = T;
export declare type ValidatorFn<T = any, E = any> = (control: AbstractControl<T>) => ValidationErrors<E> | null;
export declare type AsyncValidatorFn<T = any, E = any> = (control: AbstractControl<T>) => Promise<ValidationErrors<E> | null> | Observable<ValidationErrors<E> | null>;
export interface AbstractControlOptions<T = any, E = any> extends NgAbstractControlOptions {
    validators?: ValidatorFn<T, E> | ValidatorFn<T, E>[] | null;
    asyncValidators?: AsyncValidatorFn<T, E> | AsyncValidatorFn<T, E>[] | null;
}
export declare type ValidatorOrOpts = ValidatorFn | ValidatorFn[] | AbstractControlOptions | null;
export declare type AsyncValidator = AsyncValidatorFn | AsyncValidatorFn[] | null;
export declare type Validator = ValidatorFn | ValidatorFn[];
export interface ControlOptions {
    onlySelf?: boolean;
    emitEvent?: boolean;
    emitModelToViewChange?: boolean;
    emitViewToModelChange?: boolean;
}
export declare type ControlEventOptions = Pick<ControlOptions, 'emitEvent' | 'onlySelf'>;
export declare type OnlySelf = Pick<ControlOptions, 'onlySelf'>;
export declare type EmitEvent = Pick<ControlOptions, 'emitEvent'>;
export declare type ControlPath = Array<string | number> | string;
export declare type ControlState = 'VALID' | 'INVALID' | 'PENDING' | 'DISABLED';
export interface AbstractControl<T = any> extends NgAbstractControl {
    value: T;
}
export declare type ExtractStrings<T> = Extract<keyof T, string>;
export interface NgValidatorsErrors {
    required: true;
    email: true;
    pattern: {
        requiredPattern: string;
        actualValue: string;
    };
    minlength: {
        requiredLength: number;
        actualLength: number;
    };
    maxlength: {
        requiredLength: number;
        actualLength: number;
    };
    min: {
        min: number;
        actual: number;
    };
    max: {
        max: number;
        actual: number;
    };
}
export declare type BoxedValue<T> = {
    value: T;
    disabled?: boolean;
};
export declare type OrBoxedValue<T> = T | BoxedValue<T>;
export declare type Obj = {
    [key: string]: any;
};
declare type ArrayType<T> = T extends Array<infer R> ? R : any;
export declare type ControlValue<T> = T extends FormControl | FormGroup | FormArray | AbstractControl ? T['value'] : T;
/**
 * Convert
 * an
 * object
 * of
 * a
 * FormGroup's
 * "value"
 * or
 * "controls"
 * to
 * its
 * "value"
 * */
export declare type ControlsValue<T extends object> = {
    [K in keyof T]: ControlValue<T[K]>;
};
declare type Primitive = number | string | boolean | null | undefined;
declare type UnwrapArray<T> = T extends Array<infer U> ? U : never;
/**
 * Converts
 * a
 * value
 * /
 * form
 * control
 * to
 * form
 * control
 * Converting
 * non-control
 * types
 * to
 * AbstractControl of the type
 *
 * The
 * intermediate
 * type
 * is
 * to
 * solve
 * the
 * issue
 * of
 * T
 * being any, thus assignable to all condition and resulting in the "any" type.
 *
 * Note
 * the
 * use
 * of
 * an
 * array
 * is
 * to
 * prevent
 * to
 * use of distributive conditional types. (https://github.com/microsoft/TypeScript/issues/37279)
 * */
declare type AbstractControlOfWithPotentialUnion<T> = [T] extends [AbstractControl] ? T : [T] extends [Primitive] ? FormControl<T> : AbstractControl<T>;
export declare type AbstractControlOf<T> = AbstractControl extends AbstractControlOfWithPotentialUnion<T> ? AbstractControl<AbstractControlOfWithPotentialUnion<T>['value']> : AbstractControlOfWithPotentialUnion<T>;
/**
 * Convert
 * an
 * object
 * of
 * a
 * FormGroup's
 * "value"
 * or
 * "controls"
 * to
 * "controls".
 * Converting
 * non-control
 * types
 * to
 * AbstractControl
 * of
 * the
 * type
 * */
export declare type AbstractControlsOf<T extends Obj> = {
    [K in keyof T]: AbstractControlOf<T[K]>;
};
/**
 * Use
 * with
 * FormGroup
 * you
 * want
 * a
 * regular
 * FormControl
 * for
 * each
 * property
 *
 * @example
 * new
 *   FormGroup<FlatControls<{
 *   name:
 *   string;
 *   phone:
 *   {
 *   num:
 *   number;
 *   prefix:
 *   number;
 *   };
 * }>>({
 *   name:
 *   new
 *   FormControl<string>(),
 *   phone:
 *   new
 *   FormControl<{num:
 *   number,
 *   prefix:
 *   number}>(),
 * });
 * */
export declare type FlatControlsOf<T extends Object> = {
    [key in keyof T]: FormControl<T[key]>;
};
/**
 * Use
 * with
 * FormGroup
 * you
 * want
 * a
 * FormControl
 * for
 * a
 * primitive,
 * a FormGroup for an object, and a FormArray for an array
 *
 * @example
 * new
 *   FormGroup<ControlsOf<{
 *   name:
 *   string;
 *   phone:
 *   {
 *   num:
 *   number;
 *   prefix:
 *   number;
 *   };
 *   children:
 *   string[],
 * }>>({
 *   name:
 *   new
 *   FormControl<string>(),
 *   phone:
 *   new
 *   FormGroup({
 *   num:
 *   new
 *   FormControl<number>(),
 *   prefix: new FormControl<number>(),
 *   }),
 *   children:
 *   new
 *   FormArray([
 *   new
 *   FormControl<number>()
 *   ])
 * });
 * */
export declare type ControlOf<T> = [T] extends [any[]] ? FormArray<ControlOf<UnwrapArray<T>>> : [T] extends [object] ? FormGroup<ControlsOf<T>> : FormControl<T>;
export declare type ControlsOf<T extends Object, TOverrides extends Partial<AbstractControlsOf<T>> = {}> = {
    [key in keyof T]: unknown extends TOverrides[key] ? ControlOf<T[key]> : TOverrides[key];
};
export declare type ArrayKeys<T> = {
    [K in keyof T]: T[K] extends Array<any> ? K : never;
}[keyof T];
export declare type ControlFactory<T> = (value: T) => AbstractControl<T>;
export declare type ControlFactoryMap<T> = {
    [K in ArrayKeys<T>]?: ControlFactory<ArrayType<T[K]>>;
};
export interface PersistOptions<T> {
    debounceTime?: number;
    manager?: PersistManager<T>;
    arrControlFactory?: ControlFactoryMap<T>;
}
export {};
