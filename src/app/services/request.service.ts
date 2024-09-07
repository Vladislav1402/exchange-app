import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { environment } from '../../enviroment/enviroment';
import { URLS } from '../const/urls';

@Injectable()
export class RequestService {
    constructor(private readonly http: HttpClient) { }

    get authHeader() {
        return {
          Authorization: `Bearer ${
            localStorage.getItem("access_token") || "{}"
          }`,
        };
      }

      get(
        urlKey: keyof typeof URLS,
        params?: { [key: string]: any },
        auth?: boolean,
        id?: string,
        headers?: any
      ): Observable<any> {
        let url = "";
    
        if (id) {
          // @ts-expect-error
          url = `${environment.__APIURL__}/${URLS[urlKey](id)}`;
        } else {
          url = `${environment.__APIURL__}/${URLS[urlKey]}`;
        }
    
        if (params && Object.keys(params).length) {
          const preparedParams = Object.keys(params)
            .map((key: string) => `${key}=${params[key]}`)
            .join("&");
    
          url = `${url}?${preparedParams}`;
        }
    
        if (auth && !headers) {
          headers = this.authHeader;
        }
    
        if (auth && headers) {
          headers = { ...headers, ...this.authHeader };
        }
        
        return this.http
          .get(url, {
            headers,
          })
          .pipe(
            catchError((error: any): any => {
              console.log(error);
            })
          );
      }
    
}