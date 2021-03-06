export class LocalStorageManager {
    setValue(key, data) {
        localStorage.setItem(key, JSON.stringify(data));
        return data;
    }
    getValue(key) {
        return JSON.parse(localStorage.getItem(key) || '{}');
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWxTdG9yYWdlTWFuYWdlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZ25lYXQvcmVhY3RpdmUtZm9ybXMvIiwic291cmNlcyI6WyJsaWIvbG9jYWxTdG9yYWdlTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxNQUFNLE9BQU8sbUJBQW1CO0lBQzlCLFFBQVEsQ0FBQyxHQUFXLEVBQUUsSUFBTztRQUMzQixZQUFZLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDaEQsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQsUUFBUSxDQUFDLEdBQVc7UUFDbEIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUM7SUFDdkQsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGVyc2lzdE1hbmFnZXIgfSBmcm9tICcuL3BlcnNpc3RNYW5hZ2VyJztcblxuZXhwb3J0IGNsYXNzIExvY2FsU3RvcmFnZU1hbmFnZXI8VD4gaW1wbGVtZW50cyBQZXJzaXN0TWFuYWdlcjxUPiB7XG4gIHNldFZhbHVlKGtleTogc3RyaW5nLCBkYXRhOiBUKTogVCB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCBKU09OLnN0cmluZ2lmeShkYXRhKSk7XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cblxuICBnZXRWYWx1ZShrZXk6IHN0cmluZyk6IFQge1xuICAgIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSkgfHwgJ3t9Jyk7XG4gIH1cbn1cbiJdfQ==