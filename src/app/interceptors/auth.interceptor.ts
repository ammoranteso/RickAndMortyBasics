import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse
} from '@angular/common/http';
import { environment } from 'environments/environment';
import { catchError, tap } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return next.handle(req).pipe(
      tap((event: HttpEvent<any>) => {
        if ((event instanceof HttpResponse && !environment.production)) {
          console.log(event);
          console.log("Hola")
        }
      }),
      catchError(err => {
        if (!environment.production) {
          console.log(err);
        }
        return throwError(err);
      })
    );
  }
}
