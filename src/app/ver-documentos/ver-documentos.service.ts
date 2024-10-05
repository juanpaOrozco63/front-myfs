import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { LoginService } from '../login/login.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VerDocumentosService {
  private http = inject(HttpClient);
  private environment = environment;
  private loginService = inject(LoginService);
  getDocuments() {
    const idToken = this.loginService.getIdToken() || '';
    let headers = new HttpHeaders().set('Authorization', `Bearer ${idToken}`);
    return this.http.get<any>(
      this.environment.url + this.environment.documentsEndpoints.documents,
      { headers }
    );
  }
  deleteDocument(id: string) {
    const idToken = this.loginService.getIdToken() || '';
    let headers = new HttpHeaders().set('Authorization', `Bearer ${idToken}`);
    return this.http.delete<any>(
      this.environment.url +
        this.environment.documentsEndpoints.documents +
        '/' +
        id,
      { headers }
    );
  }

  getDocument(id: string) {
    const idToken = this.loginService.getIdToken() || '';
    let headers = new HttpHeaders().set('Authorization', `Bearer ${idToken}`);
    return this.http.get<any>(
      this.environment.url +
        this.environment.documentsEndpoints.documents +
        '/' +
        id,
      { headers }
    );
  }
  seeDocumentPreSignedUrl(key: string) {
    const idToken = this.loginService.getIdToken() || '';
    let headers = new HttpHeaders().set('Authorization', `Bearer ${idToken}`);
    return this.http.get<any>(
      this.environment.url +
        this.environment.documentsEndpoints.documents +
        '/' +
        key +
        '/url',
      { headers }
    );
  }
  updateDocument(key: string): Observable<any> {
    const idToken = this.loginService.getIdToken() || '';
    let headers = new HttpHeaders().set('Authorization', `Bearer ${idToken}`);
    return this.http.patch<any>(
      `${environment.url}${environment.documentsEndpoints.documents}/${key}${environment.documentsEndpoints.signed}`,
      idToken,
      { headers }
    );
  }
}
