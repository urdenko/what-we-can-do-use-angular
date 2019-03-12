import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { ISearchResult } from "../models/search-result.model";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  constructor(private http: HttpClient) {}
  search(tag: string): Observable<ISearchResult> {
    return this.http.get<ISearchResult>("/api.php", {
      params: {
        action: "query",
        list: "search",
        srsearch: tag,
        format: "json"
      }
    });
  }
}
