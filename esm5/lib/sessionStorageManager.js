var SessionStorageManager = /** @class */ (function () {
    function SessionStorageManager() {
    }
    SessionStorageManager.prototype.setValue = function (key, data) {
        sessionStorage.setItem(key, JSON.stringify(data));
        return data;
    };
    SessionStorageManager.prototype.getValue = function (key) {
        return JSON.parse(sessionStorage.getItem(key) || '{}');
    };
    return SessionStorageManager;
}());
export { SessionStorageManager };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Vzc2lvblN0b3JhZ2VNYW5hZ2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG5nbmVhdC9yZWFjdGl2ZS1mb3Jtcy8iLCJzb3VyY2VzIjpbImxpYi9zZXNzaW9uU3RvcmFnZU1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7SUFBQTtJQVNBLENBQUM7SUFSQyx3Q0FBUSxHQUFSLFVBQVMsR0FBVyxFQUFFLElBQU87UUFDM0IsY0FBYyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ2xELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVELHdDQUFRLEdBQVIsVUFBUyxHQUFXO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUFDSCw0QkFBQztBQUFELENBQUMsQUFURCxJQVNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGVyc2lzdE1hbmFnZXIgfSBmcm9tICcuL3BlcnNpc3RNYW5hZ2VyJztcblxuZXhwb3J0IGNsYXNzIFNlc3Npb25TdG9yYWdlTWFuYWdlcjxUPiBpbXBsZW1lbnRzIFBlcnNpc3RNYW5hZ2VyPFQ+IHtcbiAgc2V0VmFsdWUoa2V5OiBzdHJpbmcsIGRhdGE6IFQpOiBUIHtcbiAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKGtleSwgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuICAgIHJldHVybiBkYXRhO1xuICB9XG5cbiAgZ2V0VmFsdWUoa2V5OiBzdHJpbmcpOiBUIHtcbiAgICByZXR1cm4gSlNPTi5wYXJzZShzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKGtleSkgfHwgJ3t9Jyk7XG4gIH1cbn1cbiJdfQ==