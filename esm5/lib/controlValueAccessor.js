var ControlValueAccessor = /** @class */ (function () {
    function ControlValueAccessor() {
        this.onChange = function (value) { };
        this.onTouched = function () { };
    }
    ControlValueAccessor.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    ControlValueAccessor.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    return ControlValueAccessor;
}());
export { ControlValueAccessor };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbFZhbHVlQWNjZXNzb3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbmduZWF0L3JlYWN0aXZlLWZvcm1zLyIsInNvdXJjZXMiOlsibGliL2NvbnRyb2xWYWx1ZUFjY2Vzc29yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0lBQUE7UUFHRSxhQUFRLEdBQUksVUFBQyxLQUFlLElBQU0sQ0FBQyxDQUFDO1FBQ3BDLGNBQVMsR0FBSSxjQUFPLENBQUMsQ0FBQztJQVN4QixDQUFDO0lBUEMsK0NBQWdCLEdBQWhCLFVBQWlCLEVBQTZCO1FBQzVDLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFFRCxnREFBaUIsR0FBakIsVUFBa0IsRUFBYztRQUM5QixJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBQ0gsMkJBQUM7QUFBRCxDQUFDLEFBYkQsSUFhQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yIGFzIE5nQ29udHJvbFZhbHVlQWNjZXNzb3IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBDb250cm9sVmFsdWVBY2Nlc3NvcjxUID0gYW55PiBpbXBsZW1lbnRzIE5nQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuICBhYnN0cmFjdCB3cml0ZVZhbHVlKHZhbHVlOiBUKTogdm9pZDtcblxuICBvbkNoYW5nZT8gPSAodmFsdWU6IFQgfCBudWxsKSA9PiB7fTtcbiAgb25Ub3VjaGVkPyA9ICgpID0+IHt9O1xuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46ICh2YWx1ZTogVCB8IG51bGwpID0+IHZvaWQpOiB2b2lkIHtcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4gdm9pZCk6IHZvaWQge1xuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XG4gIH1cbn1cbiJdfQ==