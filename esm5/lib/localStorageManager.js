var LocalStorageManager = /** @class */ (function () {
    function LocalStorageManager() {
    }
    LocalStorageManager.prototype.setValue = function (key, data) {
        localStorage.setItem(key, JSON.stringify(data));
        return data;
    };
    LocalStorageManager.prototype.getValue = function (key) {
        return JSON.parse(localStorage.getItem(key) || '{}');
    };
    return LocalStorageManager;
}());
export { LocalStorageManager };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWxTdG9yYWdlTWFuYWdlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZ25lYXQvcmVhY3RpdmUtZm9ybXMvIiwic291cmNlcyI6WyJsaWIvbG9jYWxTdG9yYWdlTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtJQUFBO0lBU0EsQ0FBQztJQVJDLHNDQUFRLEdBQVIsVUFBUyxHQUFXLEVBQUUsSUFBTztRQUMzQixZQUFZLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDaEQsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQsc0NBQVEsR0FBUixVQUFTLEdBQVc7UUFDbEIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUM7SUFDdkQsQ0FBQztJQUNILDBCQUFDO0FBQUQsQ0FBQyxBQVRELElBU0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQZXJzaXN0TWFuYWdlciB9IGZyb20gJy4vcGVyc2lzdE1hbmFnZXInO1xuXG5leHBvcnQgY2xhc3MgTG9jYWxTdG9yYWdlTWFuYWdlcjxUPiBpbXBsZW1lbnRzIFBlcnNpc3RNYW5hZ2VyPFQ+IHtcbiAgc2V0VmFsdWUoa2V5OiBzdHJpbmcsIGRhdGE6IFQpOiBUIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcbiAgICByZXR1cm4gZGF0YTtcbiAgfVxuXG4gIGdldFZhbHVlKGtleTogc3RyaW5nKTogVCB7XG4gICAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KSB8fCAne30nKTtcbiAgfVxufVxuIl19