import { Observable } from "rxjs";


export function ToAsync<T>(observable: Observable<T>): Promise<T> {
  return new Promise<T>((resolve, reject) => {
    observable.subscribe({
      next: data => resolve(data),
      error: err => reject(err),
      complete: () => { /* optional cleanup logic */ }
    });
  });
}