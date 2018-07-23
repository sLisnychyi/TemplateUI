import {Component, OnInit, ViewChild} from '@angular/core';
import {TemplateService} from "../../services/template.service";
import {TemplateRequest} from "../../models/templateRequest";
import {DataSource} from "@angular/cdk/collections";
import {Observable} from "rxjs/index";
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {map, startWith} from 'rxjs/operators';
import {Router} from "@angular/router";
import {TemplateMetadataProvider} from "../../providers/template-metadata-provider";

@Component({
  selector: 'templatetable',
  templateUrl: './templatetable.component.html',
  styleUrls: ['./templatetable.component.css']
})
export class TemplatetableComponent implements OnInit {

  dataSource;
  displayedColumns = ['name', 'actionsColumn'];

  partners: Array<String>;
  partnerControl = new FormControl();
  filteredPartners: Observable<Array<String>>;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  placements = new FormControl();
  placementsList: Array<String>;

  testMode = false;
  mRaid = false;
  mobileWeb = false;
  priv = false;
  blind = false;

  constructor(private templateService: TemplateService, private router: Router,
              private templateMetadata: TemplateMetadataProvider) {
    this.placementsList = templateMetadata.placements;
  }

  ngOnInit() {
    this.refresh();
    this.templateService.getPartners()
      .subscribe(resp => {
        this.partners = resp;
        this.filteredPartners = this.partnerControl.valueChanges
          .pipe(
            startWith(''),
            map(val => this.filter(val))
          );
      });
  }

  refresh() {
    const templateReq = new TemplateRequest();
    templateReq.placements = this.placements.value;
    templateReq.partner = this.partnerControl.value;
    templateReq.testMode = this.testMode;
    templateReq.mraid = this.mRaid;
    templateReq.mobileWeb = this.mobileWeb;
    templateReq.privateTemplate = this.priv;
    templateReq.blind = this.blind;
    console.log(JSON.stringify(templateReq));

    this.templateService.getTemplates(templateReq)
      .subscribe(resp => {
        this.dataSource = new MatTableDataSource(resp);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      });
  }

  filter(val: string): Array<String> {
    return this.partners.filter(partner => partner.toLowerCase().includes(val.toLowerCase())
    )
  }

  clearFilters() {
    this.placements = new FormControl();
    this.partnerControl = new FormControl();
    this.testMode = false;
    this.mRaid = false;
    this.mobileWeb = false;
    this.priv = false;
    this.blind = false;
    this.refresh();

  }

  onChange() {
    this.refresh();
  }


  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
