import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';
import { IUser } from './models/user';

export class MockData implements InMemoryDbService {
  createDb(reqInfo?: RequestInfo | undefined): {} | Observable<{}> | Promise<{}> {
    const users: IUser[] = [
      { id: 1, First_Name: 'ram',Last_Name: 'cena', Email: 'john@gmail.com' },
      { id: 2, First_Name: 'shayam',Last_Name: 'cena', Email: 'jane@yahoo.com' },
      { id: 3, First_Name: 'mohan',Last_Name: 'cena', Email: 'Kane@rediff.com' }
    ]
    return { users };  }

}
