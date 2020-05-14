import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

// const baseUrl = 'https://us-central1-grid-cloud-6ce8b.cloudfunctions.net/app/api/tutorials';
const baseUrl = '/api/tutorials';
@Injectable({
  providedIn: 'root'
})
export class TutorialService {

  constructor(private http: HttpClient) {
  }

  getAll() {
    return this.http.get(baseUrl);
  }

  get(id) {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data) {
    return this.http.post(baseUrl, data);
  }

  update(id, data) {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  deleteAll() {
    return this.http.delete(baseUrl);
  }

  delete(id) {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  findByTitle(title) {
    return this.http.get(`${baseUrl}?title=${title}`);
  }
}
