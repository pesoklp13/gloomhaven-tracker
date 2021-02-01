import {Injectable} from '@angular/core';
import {v4} from 'uuid';

@Injectable()
export class UUIDService {

  public uuid4(): string {
    return v4()
  }

}
