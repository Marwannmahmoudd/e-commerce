import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { finalize, Observable } from 'rxjs';
import { LoaderService } from '../loader.service';

 @Injectable()
export class LoaderInterceptor implements HttpInterceptor {

  constructor(private loaderservices:LoaderService) {}

   intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    
   

    return next.handle(request).pipe(
      finalize(
        ()=>{
           
         
         
        
        }
      )
    );
      }
    }
