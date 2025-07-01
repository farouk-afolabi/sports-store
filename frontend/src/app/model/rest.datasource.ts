import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, throwError, of } from "rxjs";
import { Product } from "./product.model";
import { Cart } from "./cart.model";
import { Order } from "./order.model";
import { map, timeout, catchError } from "rxjs/operators";
import { environment } from '../../environments/environment';

@Injectable()
export class RestDataSource {
    baseUrl: string;
    auth_token: string | null = null;
    readonly API_TIMEOUT = 10000; // 10 seconds

    constructor(private http: HttpClient) {
        // Ensure clean URL with single trailing slash
        this.baseUrl = environment.apiUrl.replace(/\/?$/, '/');
    }

    // Improved with timeout and error handling
    getProducts(): Observable<Product[]> {
        return this.http.get<Product[]>(`${this.baseUrl}products`)
            .pipe(
                timeout(this.API_TIMEOUT),
                catchError(this.handleError)
            );
    }

    saveOrder(order: Order): Observable<Order> {
        return this.http.post<Order>(`${this.baseUrl}orders`, order)
            .pipe(catchError(this.handleError));
    }

    authenticate(user: string, pass: string): Observable<boolean> {
        return this.http.post<any>(`${this.baseUrl}login`, {
            name: user, 
            password: pass
        }).pipe(
            timeout(5000),
            map(response => {
                this.auth_token = response.success ? response.token : null;
                return response.success;
            }),
            catchError(() => of(false))
        );
    }

    saveProduct(product: Product): Observable<Product> {
        return this.http.post<Product>(
            `${this.baseUrl}products`,
            product, 
            this.getOptions()
        ).pipe(catchError(this.handleError));
    }

    updateProduct(product: Product): Observable<Product> {
        return this.http.put<Product>(
            `${this.baseUrl}products/${product.id}`,
            product,
            this.getOptions()
        ).pipe(catchError(this.handleError));
    }

    deleteProduct(id: number): Observable<Product> {
        return this.http.delete<Product>(
            `${this.baseUrl}products/${id}`,
            this.getOptions()
        ).pipe(catchError(this.handleError));
    }

    getOrders(): Observable<Order[]> {
        return this.http.get<Order[]>(
            `${this.baseUrl}orders`,
            this.getOptions()
        ).pipe(catchError(this.handleError));
    }

    deleteOrder(id: number): Observable<Order> {
        return this.http.delete<Order>(
            `${this.baseUrl}orders/${id}`,
            this.getOptions()
        ).pipe(catchError(this.handleError));
    }

    updateOrder(order: Order): Observable<Order> {
        return this.http.put<Order>(
            `${this.baseUrl}orders/${order.id}`,
            order,
            this.getOptions()
        ).pipe(catchError(this.handleError));
    }

    private getOptions() {
        return {
            headers: new HttpHeaders({
                "Authorization": `Bearer ${this.auth_token}`
            })
        };
    }

    private handleError(error: any) {
        console.error('API Error:', error);
        return throwError(() => new Error('Server communication error'));
    }
}