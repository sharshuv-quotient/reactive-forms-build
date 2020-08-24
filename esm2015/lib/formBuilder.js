import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { FormBuilder as NgFormBuilder } from '@angular/forms';
import { FormArray } from './formArray';
import { FormControl } from './formControl';
import { FormGroup } from './formGroup';
import * as i0 from "@angular/core";
function isAbstractControlOptions(options) {
    return (options.asyncValidators !== undefined ||
        options.validators !== undefined ||
        options.updateOn !== undefined);
}
let FormBuilder = class FormBuilder extends NgFormBuilder {
    group(controlsConfig, options) {
        const controls = this._reduceControls(controlsConfig);
        let validators = null;
        let asyncValidators = null;
        let updateOn;
        if (options != null) {
            if (isAbstractControlOptions(options)) {
                validators = options.validators != null ? options.validators : null;
                asyncValidators = options.asyncValidators != null ? options.asyncValidators : null;
                updateOn = options.updateOn != null ? options.updateOn : undefined;
            }
            else {
                // `options` are legacy form group options
                validators = options['validator'] != null ? options['validator'] : null;
                asyncValidators = options['asyncValidator'] != null ? options['asyncValidator'] : null;
            }
        }
        return new FormGroup(controls, { asyncValidators, updateOn, validators });
    }
    control(formState, validatorOrOpts, asyncValidator) {
        return new FormControl(formState, validatorOrOpts, asyncValidator);
    }
    array(controlsConfig, validatorOrOpts, asyncValidator) {
        const controls = controlsConfig.map(c => this._createControl(c));
        return new FormArray(controls, validatorOrOpts, asyncValidator);
    }
};
FormBuilder.ɵprov = i0.ɵɵdefineInjectable({ factory: function FormBuilder_Factory() { return new FormBuilder(); }, token: FormBuilder, providedIn: "root" });
FormBuilder = __decorate([
    Injectable({ providedIn: 'root' })
], FormBuilder);
export { FormBuilder };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybUJ1aWxkZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbmduZWF0L3JlYWN0aXZlLWZvcm1zLyIsInNvdXJjZXMiOlsibGliL2Zvcm1CdWlsZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxXQUFXLElBQUksYUFBYSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDOUQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUN4QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzVDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxhQUFhLENBQUM7O0FBR3hDLFNBQVMsd0JBQXdCLENBQy9CLE9BQTJEO0lBRTNELE9BQU8sQ0FDdUIsT0FBUSxDQUFDLGVBQWUsS0FBSyxTQUFTO1FBQ3RDLE9BQVEsQ0FBQyxVQUFVLEtBQUssU0FBUztRQUNqQyxPQUFRLENBQUMsUUFBUSxLQUFLLFNBQVMsQ0FDNUQsQ0FBQztBQUNKLENBQUM7QUFhRCxJQUFhLFdBQVcsR0FBeEIsTUFBYSxXQUFZLFNBQVEsYUFBYTtJQUM1QyxLQUFLLENBQ0gsY0FBMkIsRUFDM0IsT0FNUTtRQUVSLE1BQU0sUUFBUSxHQUFJLElBQVksQ0FBQyxlQUFlLENBQUMsY0FBYyxDQUFDLENBQUM7UUFFL0QsSUFBSSxVQUFVLEdBQXVDLElBQUksQ0FBQztRQUMxRCxJQUFJLGVBQWUsR0FBaUQsSUFBSSxDQUFDO1FBQ3pFLElBQUksUUFBMkQsQ0FBQztRQUVoRSxJQUFJLE9BQU8sSUFBSSxJQUFJLEVBQUU7WUFDbkIsSUFBSSx3QkFBd0IsQ0FBQyxPQUFPLENBQUMsRUFBRTtnQkFDckMsVUFBVSxHQUFHLE9BQU8sQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7Z0JBQ3BFLGVBQWUsR0FBRyxPQUFPLENBQUMsZUFBZSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO2dCQUNuRixRQUFRLEdBQUcsT0FBTyxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQzthQUNwRTtpQkFBTTtnQkFDTCwwQ0FBMEM7Z0JBQzFDLFVBQVUsR0FBRyxPQUFPLENBQUMsV0FBVyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztnQkFDeEUsZUFBZSxHQUFHLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQzthQUN4RjtTQUNGO1FBRUQsT0FBTyxJQUFJLFNBQVMsQ0FBQyxRQUFRLEVBQUUsRUFBRSxlQUFlLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxDQUFDLENBQUM7SUFDNUUsQ0FBQztJQUVELE9BQU8sQ0FDTCxTQUEwQixFQUMxQixlQUE2RSxFQUM3RSxjQUE2RDtRQUU3RCxPQUFPLElBQUksV0FBVyxDQUFDLFNBQVMsRUFBRSxlQUFlLEVBQUUsY0FBYyxDQUFDLENBQUM7SUFDckUsQ0FBQztJQUVELEtBQUssQ0FDSCxjQUFvQyxFQUNwQyxlQUE2RSxFQUM3RSxjQUE2RDtRQUU3RCxNQUFNLFFBQVEsR0FBRyxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUUsSUFBWSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzFFLE9BQU8sSUFBSSxTQUFTLENBQUMsUUFBUSxFQUFFLGVBQWUsRUFBRSxjQUFjLENBQUMsQ0FBQztJQUNsRSxDQUFDO0NBQ0YsQ0FBQTs7QUFoRFksV0FBVztJQUR2QixVQUFVLENBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLENBQUM7R0FDdEIsV0FBVyxDQWdEdkI7U0FoRFksV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1CdWlsZGVyIGFzIE5nRm9ybUJ1aWxkZXIgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBGb3JtQXJyYXkgfSBmcm9tICcuL2Zvcm1BcnJheSc7XG5pbXBvcnQgeyBGb3JtQ29udHJvbCB9IGZyb20gJy4vZm9ybUNvbnRyb2wnO1xuaW1wb3J0IHsgRm9ybUdyb3VwIH0gZnJvbSAnLi9mb3JtR3JvdXAnO1xuaW1wb3J0IHsgQWJzdHJhY3RDb250cm9sT3B0aW9ucywgQXN5bmNWYWxpZGF0b3JGbiwgQWJzdHJhY3RDb250cm9sLCBPckJveGVkVmFsdWUsIFZhbGlkYXRvckZuIH0gZnJvbSAnLi90eXBlcyc7XG5cbmZ1bmN0aW9uIGlzQWJzdHJhY3RDb250cm9sT3B0aW9uczxUPihcbiAgb3B0aW9uczogQWJzdHJhY3RDb250cm9sT3B0aW9uczxUPiB8IHsgW2tleTogc3RyaW5nXTogYW55IH1cbik6IG9wdGlvbnMgaXMgQWJzdHJhY3RDb250cm9sT3B0aW9uczxUPiB7XG4gIHJldHVybiAoXG4gICAgKDxBYnN0cmFjdENvbnRyb2xPcHRpb25zPFQ+Pm9wdGlvbnMpLmFzeW5jVmFsaWRhdG9ycyAhPT0gdW5kZWZpbmVkIHx8XG4gICAgKDxBYnN0cmFjdENvbnRyb2xPcHRpb25zPFQ+Pm9wdGlvbnMpLnZhbGlkYXRvcnMgIT09IHVuZGVmaW5lZCB8fFxuICAgICg8QWJzdHJhY3RDb250cm9sT3B0aW9uczxUPj5vcHRpb25zKS51cGRhdGVPbiAhPT0gdW5kZWZpbmVkXG4gICk7XG59XG5cbmV4cG9ydCB0eXBlIEZiQ29udHJvbENvbmZpZzxUID0gYW55PiA9XG4gIHwgQWJzdHJhY3RDb250cm9sPFQ+XG4gIHwgW09yQm94ZWRWYWx1ZTxUPiwgVmFsaWRhdG9yRm4gfCBWYWxpZGF0b3JGbltdIHwgbnVsbCwgQXN5bmNWYWxpZGF0b3JGbiB8IEFzeW5jVmFsaWRhdG9yRm5bXSB8IG51bGxdXG4gIHwgW09yQm94ZWRWYWx1ZTxUPiwgVmFsaWRhdG9yRm4gfCBWYWxpZGF0b3JGbltdIHwgQWJzdHJhY3RDb250cm9sT3B0aW9ucyB8IG51bGxdXG4gIHwgW1QgfCBPckJveGVkVmFsdWU8VD5dXG4gIHwgT3JCb3hlZFZhbHVlPFQ+XG4gIHwgVDtcblxuZXhwb3J0IHR5cGUgRmJHcm91cENvbmZpZzxUID0gYW55PiA9IHsgW2tleSBpbiBrZXlvZiBUXTogRmJDb250cm9sQ29uZmlnPFRba2V5XT4gfTtcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBGb3JtQnVpbGRlciBleHRlbmRzIE5nRm9ybUJ1aWxkZXIge1xuICBncm91cDxUIGV4dGVuZHMgb2JqZWN0LCBFIGV4dGVuZHMgb2JqZWN0ID0gYW55LCBHcm91cENvbmZpZyBleHRlbmRzIEZiR3JvdXBDb25maWc8VD4gPSBGYkdyb3VwQ29uZmlnPFQ+PihcbiAgICBjb250cm9sc0NvbmZpZzogR3JvdXBDb25maWcsXG4gICAgb3B0aW9ucz86XG4gICAgICB8IEFic3RyYWN0Q29udHJvbE9wdGlvbnM8VD5cbiAgICAgIHwge1xuICAgICAgICAgIHZhbGlkYXRvcj86IFZhbGlkYXRvckZuIHwgVmFsaWRhdG9yRm5bXTtcbiAgICAgICAgICBhc3luY1ZhbGlkYXRvcj86IEFzeW5jVmFsaWRhdG9yRm4gfCBBc3luY1ZhbGlkYXRvckZuW107XG4gICAgICAgIH1cbiAgICAgIHwgbnVsbFxuICApOiBGb3JtR3JvdXA8VCwgRT4ge1xuICAgIGNvbnN0IGNvbnRyb2xzID0gKHRoaXMgYXMgYW55KS5fcmVkdWNlQ29udHJvbHMoY29udHJvbHNDb25maWcpO1xuXG4gICAgbGV0IHZhbGlkYXRvcnM6IFZhbGlkYXRvckZuIHwgVmFsaWRhdG9yRm5bXSB8IG51bGwgPSBudWxsO1xuICAgIGxldCBhc3luY1ZhbGlkYXRvcnM6IEFzeW5jVmFsaWRhdG9yRm4gfCBBc3luY1ZhbGlkYXRvckZuW10gfCBudWxsID0gbnVsbDtcbiAgICBsZXQgdXBkYXRlT246IEFic3RyYWN0Q29udHJvbE9wdGlvbnM8VD5bJ3VwZGF0ZU9uJ10gfCB1bmRlZmluZWQ7XG5cbiAgICBpZiAob3B0aW9ucyAhPSBudWxsKSB7XG4gICAgICBpZiAoaXNBYnN0cmFjdENvbnRyb2xPcHRpb25zKG9wdGlvbnMpKSB7XG4gICAgICAgIHZhbGlkYXRvcnMgPSBvcHRpb25zLnZhbGlkYXRvcnMgIT0gbnVsbCA/IG9wdGlvbnMudmFsaWRhdG9ycyA6IG51bGw7XG4gICAgICAgIGFzeW5jVmFsaWRhdG9ycyA9IG9wdGlvbnMuYXN5bmNWYWxpZGF0b3JzICE9IG51bGwgPyBvcHRpb25zLmFzeW5jVmFsaWRhdG9ycyA6IG51bGw7XG4gICAgICAgIHVwZGF0ZU9uID0gb3B0aW9ucy51cGRhdGVPbiAhPSBudWxsID8gb3B0aW9ucy51cGRhdGVPbiA6IHVuZGVmaW5lZDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGBvcHRpb25zYCBhcmUgbGVnYWN5IGZvcm0gZ3JvdXAgb3B0aW9uc1xuICAgICAgICB2YWxpZGF0b3JzID0gb3B0aW9uc1sndmFsaWRhdG9yJ10gIT0gbnVsbCA/IG9wdGlvbnNbJ3ZhbGlkYXRvciddIDogbnVsbDtcbiAgICAgICAgYXN5bmNWYWxpZGF0b3JzID0gb3B0aW9uc1snYXN5bmNWYWxpZGF0b3InXSAhPSBudWxsID8gb3B0aW9uc1snYXN5bmNWYWxpZGF0b3InXSA6IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBGb3JtR3JvdXAoY29udHJvbHMsIHsgYXN5bmNWYWxpZGF0b3JzLCB1cGRhdGVPbiwgdmFsaWRhdG9ycyB9KTtcbiAgfVxuXG4gIGNvbnRyb2w8VCwgRSBleHRlbmRzIG9iamVjdCA9IGFueT4oXG4gICAgZm9ybVN0YXRlOiBPckJveGVkVmFsdWU8VD4sXG4gICAgdmFsaWRhdG9yT3JPcHRzPzogVmFsaWRhdG9yRm4gfCBWYWxpZGF0b3JGbltdIHwgQWJzdHJhY3RDb250cm9sT3B0aW9ucyB8IG51bGwsXG4gICAgYXN5bmNWYWxpZGF0b3I/OiBBc3luY1ZhbGlkYXRvckZuIHwgQXN5bmNWYWxpZGF0b3JGbltdIHwgbnVsbFxuICApOiBGb3JtQ29udHJvbDxULCBFPiB7XG4gICAgcmV0dXJuIG5ldyBGb3JtQ29udHJvbChmb3JtU3RhdGUsIHZhbGlkYXRvck9yT3B0cywgYXN5bmNWYWxpZGF0b3IpO1xuICB9XG5cbiAgYXJyYXk8VCwgRSBleHRlbmRzIG9iamVjdCA9IGFueT4oXG4gICAgY29udHJvbHNDb25maWc6IEZiQ29udHJvbENvbmZpZzxUPltdLFxuICAgIHZhbGlkYXRvck9yT3B0cz86IFZhbGlkYXRvckZuIHwgVmFsaWRhdG9yRm5bXSB8IEFic3RyYWN0Q29udHJvbE9wdGlvbnMgfCBudWxsLFxuICAgIGFzeW5jVmFsaWRhdG9yPzogQXN5bmNWYWxpZGF0b3JGbiB8IEFzeW5jVmFsaWRhdG9yRm5bXSB8IG51bGxcbiAgKTogRm9ybUFycmF5PFQsIEU+IHtcbiAgICBjb25zdCBjb250cm9scyA9IGNvbnRyb2xzQ29uZmlnLm1hcChjID0+ICh0aGlzIGFzIGFueSkuX2NyZWF0ZUNvbnRyb2woYykpO1xuICAgIHJldHVybiBuZXcgRm9ybUFycmF5KGNvbnRyb2xzLCB2YWxpZGF0b3JPck9wdHMsIGFzeW5jVmFsaWRhdG9yKTtcbiAgfVxufVxuIl19