import { __extends, __read, __spread } from "tslib";
import { FormControl as NgFormControl } from '@angular/forms';
import { isObservable, Subject } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';
import { controlDisabled$, controlDisabledWhile, controlEnabled$, controlEnabledWhile, controlErrorChanges$, controlStatusChanges$, controlValueChanges$, disableControl, enableControl, hasErrorAndDirty, hasErrorAndTouched, mergeControlValidators, validateControlOn } from './control-actions';
import { coerceArray } from './utils';
var FormControl = /** @class */ (function (_super) {
    __extends(FormControl, _super);
    function FormControl(formState, validatorOrOpts, asyncValidator) {
        var _this = _super.call(this, formState, validatorOrOpts, asyncValidator) || this;
        _this.touchChanges = new Subject();
        _this.dirtyChanges = new Subject();
        _this.touch$ = _this.touchChanges.asObservable().pipe(distinctUntilChanged());
        _this.dirty$ = _this.dirtyChanges.asObservable().pipe(distinctUntilChanged());
        _this.value$ = controlValueChanges$(_this);
        _this.disabled$ = controlDisabled$(_this);
        _this.enabled$ = controlEnabled$(_this);
        _this.status$ = controlStatusChanges$(_this);
        _this.errors$ = controlErrorChanges$(_this);
        return _this;
    }
    FormControl.prototype.setValue = function (valueOrObservable, options) {
        var _this = this;
        if (isObservable(valueOrObservable)) {
            return valueOrObservable.subscribe(function (value) { return _super.prototype.setValue.call(_this, value, options); });
        }
        _super.prototype.setValue.call(this, valueOrObservable, options);
    };
    FormControl.prototype.patchValue = function (valueOrObservable, options) {
        var _this = this;
        if (isObservable(valueOrObservable)) {
            return valueOrObservable.subscribe(function (value) { return _super.prototype.patchValue.call(_this, value, options); });
        }
        _super.prototype.patchValue.call(this, valueOrObservable, options);
    };
    FormControl.prototype.disabledWhile = function (observable, options) {
        return controlDisabledWhile(this, observable, options);
    };
    FormControl.prototype.enabledWhile = function (observable, options) {
        return controlEnabledWhile(this, observable, options);
    };
    FormControl.prototype.mergeValidators = function (validators) {
        mergeControlValidators(this, validators);
    };
    FormControl.prototype.mergeAsyncValidators = function (validators) {
        this.setAsyncValidators(__spread([this.asyncValidator], coerceArray(validators)));
        this.updateValueAndValidity();
    };
    FormControl.prototype.markAsTouched = function (opts) {
        _super.prototype.markAsTouched.call(this, opts);
        this.touchChanges.next(true);
    };
    FormControl.prototype.markAsUntouched = function (opts) {
        _super.prototype.markAsUntouched.call(this, opts);
        this.touchChanges.next(false);
    };
    FormControl.prototype.markAsPristine = function (opts) {
        _super.prototype.markAsPristine.call(this, opts);
        this.dirtyChanges.next(false);
    };
    FormControl.prototype.markAsDirty = function (opts) {
        _super.prototype.markAsDirty.call(this, opts);
        this.dirtyChanges.next(true);
    };
    FormControl.prototype.markAllAsDirty = function () {
        this.markAsDirty({ onlySelf: true });
    };
    FormControl.prototype.reset = function (formState, options) {
        _super.prototype.reset.call(this, formState, options);
    };
    FormControl.prototype.setValidators = function (newValidator) {
        _super.prototype.setValidators.call(this, newValidator);
        _super.prototype.updateValueAndValidity.call(this);
    };
    FormControl.prototype.setAsyncValidators = function (newValidator) {
        _super.prototype.setAsyncValidators.call(this, newValidator);
        _super.prototype.updateValueAndValidity.call(this);
    };
    FormControl.prototype.validateOn = function (observableValidation) {
        return validateControlOn(this, observableValidation);
    };
    FormControl.prototype.getError = function (errorCode) {
        return _super.prototype.getError.call(this, errorCode);
    };
    FormControl.prototype.hasError = function (errorCode) {
        return _super.prototype.hasError.call(this, errorCode);
    };
    FormControl.prototype.setErrors = function (errors, opts) {
        if (opts === void 0) { opts = {}; }
        return _super.prototype.setErrors.call(this, errors, opts);
    };
    FormControl.prototype.hasErrorAndTouched = function (error) {
        return hasErrorAndTouched(this, error);
    };
    FormControl.prototype.hasErrorAndDirty = function (error) {
        return hasErrorAndDirty(this, error);
    };
    FormControl.prototype.setEnable = function (enable, opts) {
        if (enable === void 0) { enable = true; }
        enableControl(this, enable, opts);
    };
    FormControl.prototype.setDisable = function (disable, opts) {
        if (disable === void 0) { disable = true; }
        disableControl(this, disable, opts);
    };
    return FormControl;
}(NgFormControl));
export { FormControl };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybUNvbnRyb2wuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbmduZWF0L3JlYWN0aXZlLWZvcm1zLyIsInNvdXJjZXMiOlsibGliL2Zvcm1Db250cm9sLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsV0FBVyxJQUFJLGFBQWEsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzlELE9BQU8sRUFBRSxZQUFZLEVBQWMsT0FBTyxFQUFnQixNQUFNLE1BQU0sQ0FBQztBQUN2RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN0RCxPQUFPLEVBQ0wsZ0JBQWdCLEVBQ2hCLG9CQUFvQixFQUNwQixlQUFlLEVBQ2YsbUJBQW1CLEVBQ25CLG9CQUFvQixFQUNwQixxQkFBcUIsRUFDckIsb0JBQW9CLEVBQ3BCLGNBQWMsRUFDZCxhQUFhLEVBQ2IsZ0JBQWdCLEVBQ2hCLGtCQUFrQixFQUNsQixzQkFBc0IsRUFDdEIsaUJBQWlCLEVBQ2xCLE1BQU0sbUJBQW1CLENBQUM7QUFjM0IsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLFNBQVMsQ0FBQztBQUV0QztJQUFrRSwrQkFBYTtJQW9CN0UscUJBQVksU0FBMkIsRUFBRSxlQUFpQyxFQUFFLGNBQStCO1FBQTNHLFlBQ0Usa0JBQU0sU0FBUyxFQUFFLGVBQWUsRUFBRSxjQUFjLENBQUMsU0FDbEQ7UUFkTyxrQkFBWSxHQUFHLElBQUksT0FBTyxFQUFXLENBQUM7UUFDdEMsa0JBQVksR0FBRyxJQUFJLE9BQU8sRUFBVyxDQUFDO1FBRXJDLFlBQU0sR0FBRyxLQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksRUFBRSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDLENBQUM7UUFDdkUsWUFBTSxHQUFHLEtBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxFQUFFLENBQUMsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUMsQ0FBQztRQUV2RSxZQUFNLEdBQUcsb0JBQW9CLENBQUks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SSxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRUQsZ0NBQVUsR0FBVixVQUFXLE9BQWMsRUFBRSxJQUEwQjtRQUExQyx3QkFBQSxFQUFBLGNBQWM7UUFDdkIsY0FBYyxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUNILGtCQUFDO0FBQUQsQ0FBQyxBQWxJRCxDQUFrRSxhQUFhLEdBa0k5RSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZvcm1Db250cm9sIGFzIE5nRm9ybUNvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBpc09ic2VydmFibGUsIE9ic2VydmFibGUsIFN1YmplY3QsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGlzdGluY3RVbnRpbENoYW5nZWQgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQge1xuICBjb250cm9sRGlzYWJsZWQkLFxuICBjb250cm9sRGlzYWJsZWRXaGlsZSxcbiAgY29udHJvbEVuYWJsZWQkLFxuICBjb250cm9sRW5hYmxlZFdoaWxlLFxuICBjb250cm9sRXJyb3JDaGFuZ2VzJCxcbiAgY29udHJvbFN0YXR1c0NoYW5nZXMkLFxuICBjb250cm9sVmFsdWVDaGFuZ2VzJCxcbiAgZGlzYWJsZUNvbnRyb2wsXG4gIGVuYWJsZUNvbnRyb2wsXG4gIGhhc0Vycm9yQW5kRGlydHksXG4gIGhhc0Vycm9yQW5kVG91Y2hlZCxcbiAgbWVyZ2VDb250cm9sVmFsaWRhdG9ycyxcbiAgdmFsaWRhdGVDb250cm9sT25cbn0gZnJvbSAnLi9jb250cm9sLWFjdGlvbnMnO1xuaW1wb3J0IHtcbiAgQXN5bmNWYWxpZGF0b3IsXG4gIEFzeW5jVmFsaWRhdG9yRm4sXG4gIENvbnRyb2xFdmVudE9wdGlvbnMsXG4gIENvbnRyb2xPcHRpb25zLFxuICBDb250cm9sU3RhdGUsXG4gIEVtaXRFdmVudCxcbiAgRXh0cmFjdFN0cmluZ3MsXG4gIE9ubHlTZWxmLFxuICBPckJveGVkVmFsdWUsXG4gIFZhbGlkYXRvcixcbiAgVmFsaWRhdG9yT3JPcHRzXG59IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHsgY29lcmNlQXJyYXkgfSBmcm9tICcuL3V0aWxzJztcblxuZXhwb3J0IGNsYXNzIEZvcm1Db250cm9sPFQgPSBhbnksIEUgZXh0ZW5kcyBvYmplY3QgPSBhbnk+IGV4dGVuZHMgTmdGb3JtQ29udHJvbCB7XG4gIHJlYWRvbmx5IHZhbHVlOiBUO1xuICByZWFkb25seSBlcnJvcnM6IEUgfCBudWxsO1xuICByZWFkb25seSBhc3luY1ZhbGlkYXRvcjogQXN5bmNWYWxpZGF0b3JGbjxUPjtcbiAgcmVhZG9ubHkgdmFsdWVDaGFuZ2VzOiBPYnNlcnZhYmxlPFQ+O1xuICByZWFkb25seSBzdGF0dXM6IENvbnRyb2xTdGF0ZTtcbiAgcmVhZG9ubHkgc3RhdHVzQ2hhbmdlczogT2JzZXJ2YWJsZTxDb250cm9sU3RhdGU+O1xuXG4gIHByaXZhdGUgdG91Y2hDaGFuZ2VzID0gbmV3IFN1YmplY3Q8Ym9vbGVhbj4oKTtcbiAgcHJpdmF0ZSBkaXJ0eUNoYW5nZXMgPSBuZXcgU3ViamVjdDxib29sZWFuPigpO1xuXG4gIHJlYWRvbmx5IHRvdWNoJCA9IHRoaXMudG91Y2hDaGFuZ2VzLmFzT2JzZXJ2YWJsZSgpLnBpcGUoZGlzdGluY3RVbnRpbENoYW5nZWQoKSk7XG4gIHJlYWRvbmx5IGRpcnR5JCA9IHRoaXMuZGlydHlDaGFuZ2VzLmFzT2JzZXJ2YWJsZSgpLnBpcGUoZGlzdGluY3RVbnRpbENoYW5nZWQoKSk7XG5cbiAgcmVhZG9ubHkgdmFsdWUkID0gY29udHJvbFZhbHVlQ2hhbmdlcyQ8VD4odGhpcyk7XG4gIHJlYWRvbmx5IGRpc2FibGVkJCA9IGNvbnRyb2xEaXNhYmxlZCQ8VD4odGhpcyk7XG4gIHJlYWRvbmx5IGVuYWJsZWQkID0gY29udHJvbEVuYWJsZWQkPFQ+KHRoaXMpO1xuICByZWFkb25seSBzdGF0dXMkID0gY29udHJvbFN0YXR1c0NoYW5nZXMkPFQ+KHRoaXMpO1xuICByZWFkb25seSBlcnJvcnMkID0gY29udHJvbEVycm9yQ2hhbmdlcyQ8RT4odGhpcyk7XG5cbiAgY29uc3RydWN0b3IoZm9ybVN0YXRlPzogT3JCb3hlZFZhbHVlPFQ+LCB2YWxpZGF0b3JPck9wdHM/OiBWYWxpZGF0b3JPck9wdHMsIGFzeW5jVmFsaWRhdG9yPzogQXN5bmNWYWxpZGF0b3IpIHtcbiAgICBzdXBlcihmb3JtU3RhdGUsIHZhbGlkYXRvck9yT3B0cywgYXN5bmNWYWxpZGF0b3IpO1xuICB9XG5cbiAgc2V0VmFsdWUodmFsdWVPck9ic2VydmFibGU6IE9ic2VydmFibGU8VD4sIG9wdGlvbnM/OiBDb250cm9sT3B0aW9ucyk6IFN1YnNjcmlwdGlvbjtcbiAgc2V0VmFsdWUodmFsdWVPck9ic2VydmFibGU6IFQsIG9wdGlvbnM/OiBDb250cm9sT3B0aW9ucyk6IHZvaWQ7XG4gIHNldFZhbHVlKHZhbHVlT3JPYnNlcnZhYmxlOiBhbnksIG9wdGlvbnM/OiBDb250cm9sT3B0aW9ucyk6IFN1YnNjcmlwdGlvbiB8IHZvaWQge1xuICAgIGlmIChpc09ic2VydmFibGUodmFsdWVPck9ic2VydmFibGUpKSB7XG4gICAgICByZXR1cm4gdmFsdWVPck9ic2VydmFibGUuc3Vic2NyaWJlKHZhbHVlID0+IHN1cGVyLnNldFZhbHVlKHZhbHVlLCBvcHRpb25zKSk7XG4gICAgfVxuXG4gICAgc3VwZXIuc2V0VmFsdWUodmFsdWVPck9ic2VydmFibGUsIG9wdGlvbnMpO1xuICB9XG5cbiAgcGF0Y2hWYWx1ZSh2YWx1ZU9yT2JzZXJ2YWJsZTogT2JzZXJ2YWJsZTxUPiwgb3B0aW9ucz86IENvbnRyb2xPcHRpb25zKTogU3Vic2NyaXB0aW9uO1xuICBwYXRjaFZhbHVlKHZhbHVlT3JPYnNlcnZhYmxlOiBULCBvcHRpb25zPzogQ29udHJvbE9wdGlvbnMpOiB2b2lkO1xuICBwYXRjaFZhbHVlKHZhbHVlT3JPYnNlcnZhYmxlOiBhbnksIG9wdGlvbnM/OiBDb250cm9sT3B0aW9ucyk6IFN1YnNjcmlwdGlvbiB8IHZvaWQge1xuICAgIGlmIChpc09ic2VydmFibGUodmFsdWVPck9ic2VydmFibGUpKSB7XG4gICAgICByZXR1cm4gdmFsdWVPck9ic2VydmFibGUuc3Vic2NyaWJlKHZhbHVlID0+IHN1cGVyLnBhdGNoVmFsdWUodmFsdWUsIG9wdGlvbnMpKTtcbiAgICB9XG5cbiAgICBzdXBlci5wYXRjaFZhbHVlKHZhbHVlT3JPYnNlcnZhYmxlLCBvcHRpb25zKTtcbiAgfVxuXG4gIGRpc2FibGVkV2hpbGUob2JzZXJ2YWJsZTogT2JzZXJ2YWJsZTxib29sZWFuPiwgb3B0aW9ucz86IENvbnRyb2xPcHRpb25zKSB7XG4gICAgcmV0dXJuIGNvbnRyb2xEaXNhYmxlZFdoaWxlKHRoaXMsIG9ic2VydmFibGUsIG9wdGlvbnMpO1xuICB9XG5cbiAgZW5hYmxlZFdoaWxlKG9ic2VydmFibGU6IE9ic2VydmFibGU8Ym9vbGVhbj4sIG9wdGlvbnM/OiBDb250cm9sT3B0aW9ucykge1xuICAgIHJldHVybiBjb250cm9sRW5hYmxlZFdoaWxlKHRoaXMsIG9ic2VydmFibGUsIG9wdGlvbnMpO1xuICB9XG5cbiAgbWVyZ2VWYWxpZGF0b3JzKHZhbGlkYXRvcnM6IFZhbGlkYXRvcikge1xuICAgIG1lcmdlQ29udHJvbFZhbGlkYXRvcnModGhpcywgdmFsaWRhdG9ycyk7XG4gIH1cblxuICBtZXJnZUFzeW5jVmFsaWRhdG9ycyh2YWxpZGF0b3JzOiBBc3luY1ZhbGlkYXRvcikge1xuICAgIHRoaXMuc2V0QXN5bmNWYWxpZGF0b3JzKFt0aGlzLmFzeW5jVmFsaWRhdG9yLCAuLi5jb2VyY2VBcnJheSh2YWxpZGF0b3JzKV0pO1xuICAgIHRoaXMudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSgpO1xuICB9XG5cbiAgbWFya0FzVG91Y2hlZChvcHRzPzogT25seVNlbGYpOiB2b2lkIHtcbiAgICBzdXBlci5tYXJrQXNUb3VjaGVkKG9wdHMpO1xuICAgIHRoaXMudG91Y2hDaGFuZ2VzLm5leHQodHJ1ZSk7XG4gIH1cblxuICBtYXJrQXNVbnRvdWNoZWQob3B0cz86IE9ubHlTZWxmKTogdm9pZCB7XG4gICAgc3VwZXIubWFya0FzVW50b3VjaGVkKG9wdHMpO1xuICAgIHRoaXMudG91Y2hDaGFuZ2VzLm5leHQoZmFsc2UpO1xuICB9XG5cbiAgbWFya0FzUHJpc3RpbmUob3B0cz86IE9ubHlTZWxmKTogdm9pZCB7XG4gICAgc3VwZXIubWFya0FzUHJpc3RpbmUob3B0cyk7XG4gICAgdGhpcy5kaXJ0eUNoYW5nZXMubmV4dChmYWxzZSk7XG4gIH1cblxuICBtYXJrQXNEaXJ0eShvcHRzPzogT25seVNlbGYpOiB2b2lkIHtcbiAgICBzdXBlci5tYXJrQXNEaXJ0eShvcHRzKTtcbiAgICB0aGlzLmRpcnR5Q2hhbmdlcy5uZXh0KHRydWUpO1xuICB9XG5cbiAgbWFya0FsbEFzRGlydHkoKTogdm9pZCB7XG4gICAgdGhpcy5tYXJrQXNEaXJ0eSh7IG9ubHlTZWxmOiB0cnVlIH0pO1xuICB9XG5cbiAgcmVzZXQoZm9ybVN0YXRlPzogT3JCb3hlZFZhbHVlPFQ+LCBvcHRpb25zPzogQ29udHJvbEV2ZW50T3B0aW9ucyk6IHZvaWQge1xuICAgIHN1cGVyLnJlc2V0KGZvcm1TdGF0ZSwgb3B0aW9ucyk7XG4gIH1cblxuICBzZXRWYWxpZGF0b3JzKG5ld1ZhbGlkYXRvcjogVmFsaWRhdG9yKTogdm9pZCB7XG4gICAgc3VwZXIuc2V0VmFsaWRhdG9ycyhuZXdWYWxpZGF0b3IpO1xuICAgIHN1cGVyLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoKTtcbiAgfVxuXG4gIHNldEFzeW5jVmFsaWRhdG9ycyhuZXdWYWxpZGF0b3I6IEFzeW5jVmFsaWRhdG9yKTogdm9pZCB7XG4gICAgc3VwZXIuc2V0QXN5bmNWYWxpZGF0b3JzKG5ld1ZhbGlkYXRvcik7XG4gICAgc3VwZXIudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSgpO1xuICB9XG5cbiAgdmFsaWRhdGVPbihvYnNlcnZhYmxlVmFsaWRhdGlvbjogT2JzZXJ2YWJsZTxudWxsIHwgb2JqZWN0Pikge1xuICAgIHJldHVybiB2YWxpZGF0ZUNvbnRyb2xPbih0aGlzLCBvYnNlcnZhYmxlVmFsaWRhdGlvbik7XG4gIH1cblxuICBnZXRFcnJvcjxLIGV4dGVuZHMgRXh0cmFjdFN0cmluZ3M8RT4+KGVycm9yQ29kZTogSyk6IEVbS10gfCBudWxsIHtcbiAgICByZXR1cm4gc3VwZXIuZ2V0RXJyb3IoZXJyb3JDb2RlKSBhcyBFW0tdIHwgbnVsbDtcbiAgfVxuXG4gIGhhc0Vycm9yPEsgZXh0ZW5kcyBFeHRyYWN0U3RyaW5nczxFPj4oZXJyb3JDb2RlOiBLKSB7XG4gICAgcmV0dXJuIHN1cGVyLmhhc0Vycm9yKGVycm9yQ29kZSk7XG4gIH1cblxuICBzZXRFcnJvcnMoZXJyb3JzOiBQYXJ0aWFsPEU+IHwgbnVsbCwgb3B0czogRW1pdEV2ZW50ID0ge30pIHtcbiAgICByZXR1cm4gc3VwZXIuc2V0RXJyb3JzKGVycm9ycywgb3B0cyk7XG4gIH1cblxuICBoYXNFcnJvckFuZFRvdWNoZWQoZXJyb3I6IEV4dHJhY3RTdHJpbmdzPEU+KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGhhc0Vycm9yQW5kVG91Y2hlZCh0aGlzLCBlcnJvcik7XG4gIH1cblxuICBoYXNFcnJvckFuZERpcnR5KGVycm9yOiBFeHRyYWN0U3RyaW5nczxFPik6IGJvb2xlYW4ge1xuICAgIHJldHVybiBoYXNFcnJvckFuZERpcnR5KHRoaXMsIGVycm9yKTtcbiAgfVxuXG4gIHNldEVuYWJsZShlbmFibGUgPSB0cnVlLCBvcHRzPzogQ29udHJvbEV2ZW50T3B0aW9ucykge1xuICAgIGVuYWJsZUNvbnRyb2wodGhpcywgZW5hYmxlLCBvcHRzKTtcbiAgfVxuXG4gIHNldERpc2FibGUoZGlzYWJsZSA9IHRydWUsIG9wdHM/OiBDb250cm9sRXZlbnRPcHRpb25zKSB7XG4gICAgZGlzYWJsZUNvbnRyb2wodGhpcywgZGlzYWJsZSwgb3B0cyk7XG4gIH1cbn1cbiJdfQ==