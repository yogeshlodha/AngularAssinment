import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserMockService {
  baseUrl = "/api/users";

  getUsers = () => {
    return this.http.get<IUser[]>(this.baseUrl);
  }
  getUserById = (id: number) => {
    return this.http.get<IUser>(`${this.baseUrl}/${id}`);
  }

  addUser = (user: IUser) => {
    return this.http.post<IUser>(this.baseUrl, user);
  }

  updateUser = (user: IUser) => {
    return this.http.put<any>(`${this.baseUrl}/${user.id}`, user);
  }

  deleteUser = (id: number) => {
    return this.http.delete<any>(`${this.baseUrl}/${id}`);
  }
  constructor(private http: HttpClient) { }
}
