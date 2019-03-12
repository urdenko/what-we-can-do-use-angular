import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { ISearchResult, IParsePage } from "../models/search-result.model";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  constructor(private http: HttpClient) {}

  search(srsearch: string): Observable<ISearchResult> {
    return this.http.get<ISearchResult>("/api.php", {
      params: {
        action: "query",
        list: "search",
        srsearch,
        format: "json"
      }
    });
  }

  loadPage(pageId: number): Observable<IParsePage> {
    return this.http.get<IParsePage>("/api.php", {
      params: {
        action: "parse",
        pageid: String(pageId),
        format: "json"
      }
    });
  }
}
