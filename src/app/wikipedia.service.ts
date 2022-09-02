import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

interface wikipediaResponse {
  query: {
    search: {
      title: string;
      snippet: string;
      pageid: number;
    };
  };
}

@Injectable({
  providedIn: 'root',
})
export class WikipediaService {
  getAPI = 'https://en.wikipedia.org/w/api.php';
  constructor(private httpClient: HttpClient) {}

  search(input: string) {
    return this.httpClient
      .get<wikipediaResponse>(this.getAPI, {
        params: {
          action: 'query',
          format: 'json',
          list: 'search',
          utf8: '1',
          srsearch: input,
          origin: '*',
        },
      })
      .pipe(map((e) => e?.query?.search));
  }
}
