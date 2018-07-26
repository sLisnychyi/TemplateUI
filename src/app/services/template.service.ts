import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/index';
import {Template} from '../models/template.model';
import {TemplateRequest} from '../models/templateRequest';

@Injectable({
  providedIn: 'root'
})
export class TemplateService {

  private templateUrl = 'http://localhost:8080/AdPlatform/templateapp/templates';
  private partnerUrl = 'http://localhost:8080/AdPlatform/templateapp/partners';
  private templateProcessUrl = 'http://localhost:8080/AdPlatform/templateapp/template';
  // private templateUrl = "templates";
  // private partnerUrl = "partners";
  // private templateProcessUrl = "template";

  constructor(private http: HttpClient) {
  }

  getTemplates(templateReq: TemplateRequest): Observable<Array<String>> {
    console.log('TEMPLATES request ', templateReq, JSON.stringify(this.templateUrl));
    return this.http.post<Array<String>>(this.templateUrl, templateReq,
      {
        headers: new HttpHeaders().set('Content-Type', 'application/json')
      });
  }

  getPartners(): Observable<Array<String>> {
    return this.http.get<Array<String>>(this.partnerUrl);
  }

  getTemplateByName(name: string): Observable<Array<Template>> {
    return this.http.get<Array<Template>>(this.templateProcessUrl, {params: {name: name}});
  }

  removeTemplate(templateId: string): Observable<String> {
    return this.http.delete<String>(this.templateProcessUrl, {params: {id: templateId}});
  }

  upsertTemplate(template: Template): Observable<String> {
    console.log('Upsert Template:', template);
    return this.http.post<String>(this.templateProcessUrl, template,
      {
        headers: new HttpHeaders().set('Content-Type', 'application/json')
      });
  }

}
