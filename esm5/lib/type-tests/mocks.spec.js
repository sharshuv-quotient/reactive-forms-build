import { of } from 'rxjs';
export var user = { id: 1, name: 'Itay' };
export var nestedFormValue = {
    a: 1,
    b: {
        a: '1',
        c: [1]
    },
    c: [{ a: 2 }]
};
export var errors = { required: true, pattern: { requiredPattern: '*', actualValue: '*' } };
export var required = function (control) { return ({ required: true }); };
export var pattern = function (control) { return ({ pattern: { requiredPattern: '*', actualValue: '*' } }); };
export var requiredAsync = function (control) { return of({ required: true }); };
export var patternAsync = function (control) { return of({ pattern: { requiredPattern: '*', actualValue: '*' } }); };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9ja3Muc3BlYy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZ25lYXQvcmVhY3RpdmUtZm9ybXMvIiwic291cmNlcyI6WyJsaWIvdHlwZS10ZXN0cy9tb2Nrcy5zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFnQzFCLE1BQU0sQ0FBQyxJQUFNLElBQUksR0FBUyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxDQUFDO0FBQ2xELE1BQU0sQ0FBQyxJQUFNLGVBQWUsR0FBZTtJQUN6QyxDQUFDLEVBQUUsQ0FBQztJQUNKLENBQUMsRUFBRTtRQUNELENBQUMsRUFBRSxHQUFHO1FBQ04sQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0tBQ1A7SUFDRCxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztDQUNkLENBQUM7QUFDRixNQUFNLENBQUMsSUFBTSxNQUFNLEdBQVcsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxFQUFFLGVBQWUsRUFBRSxHQUFHLEVBQUUsV0FBVyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUM7QUFDdEcsTUFBTSxDQUFDLElBQU0sUUFBUSxHQUFHLFVBQUEsT0FBTyxJQUFJLE9BQUEsQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFwQixDQUFvQixDQUFDO0FBQ3hELE1BQU0sQ0FBQyxJQUFNLE9BQU8sR0FBRyxVQUFBLE9BQU8sSUFBSSxPQUFBLENBQUMsRUFBRSxPQUFPLEVBQUUsRUFBRSxlQUFlLEVBQUUsR0FBRyxFQUFFLFdBQVcsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQXpELENBQXlELENBQUM7QUFDNUYsTUFBTSxDQUFDLElBQU0sYUFBYSxHQUFHLFVBQUEsT0FBTyxJQUFJLE9BQUEsRUFBRSxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDLEVBQXRCLENBQXNCLENBQUM7QUFDL0QsTUFBTSxDQUFDLElBQU0sWUFBWSxHQUFHLFVBQUEsT0FBTyxJQUFJLE9BQUEsRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLEVBQUUsZUFBZSxFQUFFLEdBQUcsRUFBRSxXQUFXLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUEzRCxDQUEyRCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEZvcm1Db250cm9sIH0gZnJvbSAnLi4vZm9ybUNvbnRyb2wnO1xuaW1wb3J0IHsgRm9ybUdyb3VwIH0gZnJvbSAnLi4vZm9ybUdyb3VwJztcbmltcG9ydCB7IEZvcm1BcnJheSB9IGZyb20gJy4uL2Zvcm1BcnJheSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmVzdGVkRm9ybSB7XG4gIGE6IG51bWJlcjtcbiAgYj86IHtcbiAgICBhOiBzdHJpbmc7XG4gICAgYzogbnVtYmVyW107XG4gIH07XG4gIGM/OiB7IGE6IG51bWJlciB9W107XG4gIGQ/OiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE5lc3RlZEZvcm1Db250cm9scyB7XG4gIGE6IEZvcm1Db250cm9sPG51bWJlcj47XG4gIGI6IEZvcm1Hcm91cDx7XG4gICAgYTogRm9ybUNvbnRyb2w8c3RyaW5nPjtcbiAgICBjOiBGb3JtQXJyYXk8Rm9ybUNvbnRyb2w8bnVtYmVyPj47XG4gIH0+O1xuICBjOiBGb3JtQXJyYXk8Rm9ybUdyb3VwPHsgYTogbnVtYmVyIH0+Pjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBVc2VyIHtcbiAgaWQ6IG51bWJlcjtcbiAgbmFtZT86IHN0cmluZztcbn1cbmV4cG9ydCBpbnRlcmZhY2UgRXJyb3JzIHtcbiAgcmVxdWlyZWQ6IGJvb2xlYW47XG4gIHBhdHRlcm46IHsgcmVxdWlyZWRQYXR0ZXJuOiBzdHJpbmc7IGFjdHVhbFZhbHVlOiBzdHJpbmcgfTtcbn1cbmV4cG9ydCBjb25zdCB1c2VyOiBVc2VyID0geyBpZDogMSwgbmFtZTogJ0l0YXknIH07XG5leHBvcnQgY29uc3QgbmVzdGVkRm9ybVZhbHVlOiBOZXN0ZWRGb3JtID0ge1xuICBhOiAxLFxuICBiOiB7XG4gICAgYTogJzEnLFxuICAgIGM6IFsxXVxuICB9LFxuICBjOiBbeyBhOiAyIH1dXG59O1xuZXhwb3J0IGNvbnN0IGVycm9yczogRXJyb3JzID0geyByZXF1aXJlZDogdHJ1ZSwgcGF0dGVybjogeyByZXF1aXJlZFBhdHRlcm46ICcqJywgYWN0dWFsVmFsdWU6ICcqJyB9IH07XG5leHBvcnQgY29uc3QgcmVxdWlyZWQgPSBjb250cm9sID0+ICh7IHJlcXVpcmVkOiB0cnVlIH0pO1xuZXhwb3J0IGNvbnN0IHBhdHRlcm4gPSBjb250cm9sID0+ICh7IHBhdHRlcm46IHsgcmVxdWlyZWRQYXR0ZXJuOiAnKicsIGFjdHVhbFZhbHVlOiAnKicgfSB9KTtcbmV4cG9ydCBjb25zdCByZXF1aXJlZEFzeW5jID0gY29udHJvbCA9PiBvZih7IHJlcXVpcmVkOiB0cnVlIH0pO1xuZXhwb3J0IGNvbnN0IHBhdHRlcm5Bc3luYyA9IGNvbnRyb2wgPT4gb2YoeyBwYXR0ZXJuOiB7IHJlcXVpcmVkUGF0dGVybjogJyonLCBhY3R1YWxWYWx1ZTogJyonIH0gfSk7XG4iXX0=