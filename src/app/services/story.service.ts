import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Historia } from '../model/historia';

import {
  Firestore,
  collection,
  collectionData,
  orderBy,
  query,
} from '@angular/fire/firestore';

@Injectable({ providedIn: 'root' })
export class StoryService {
  constructor(private firestore: Firestore) {}

  listarAcao(): Observable<Historia[]> {
    const ref = query(
      collection(this.firestore, 'acao'),
      orderBy('criadoEm', 'desc')
    );
    return collectionData(ref, { idField: 'id' }) as Observable<Historia[]>;
  }

  listarAventura(): Observable<Historia[]> {
    const ref = query(
      collection(this.firestore, 'aventura'),
      orderBy('criadoEm', 'desc')
    );
    return collectionData(ref, { idField: 'id' }) as Observable<Historia[]>;
  }

  listarEsporte(): Observable<Historia[]> {
    const ref = query(
      collection(this.firestore, 'esporte'),
      orderBy('criadoEm', 'desc')
    );
    return collectionData(ref, { idField: 'id' }) as Observable<Historia[]>;
  }

  listarFantasia(): Observable<Historia[]> {
    const ref = query(
      collection(this.firestore, 'fantasia'),
      orderBy('criadoEm', 'desc')
    );
    return collectionData(ref, { idField: 'id' }) as Observable<Historia[]>;
  }
}
