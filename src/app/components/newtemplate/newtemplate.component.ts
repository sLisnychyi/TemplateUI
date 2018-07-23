import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {ActivatedRoute} from '@angular/router';
import {MatDialog, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {TemplateService} from '../../services/template.service';
import {Template} from '../../models/template.model';
import {DeleteConfirmDialogComponent} from '../../shared/delete-confirm-dialog/delete-confirm-dialog.component';
import {TemplateDetailsComponent} from '../template-details/template-details.component';
import {PopupDialogComponent} from '../../shared/popup-dialog/popup-dialog.component';

@Component({
  selector: 'newtemplate',
  templateUrl: './newtemplate.component.html',
  styleUrls: ['./newtemplate.component.css']
})
export class NewtemplateComponent implements OnInit {

  templateName;

  dataSource;
  displayedColumns = ['id', 'name', 'placement', 'partner', 'format', 'actionsColumn'];

  submitButtonLabel = 'Add New';
  disableTemplateName: boolean;

  selectedTemplate: Template;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(TemplateDetailsComponent) templateDetails: TemplateDetailsComponent;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private templateService: TemplateService,
              public dialog: MatDialog) {
  }

  ngOnInit() {
    const templatename = this.activatedRoute.snapshot.params['name'];
    console.log('templatename =' + templatename);
    if (templatename) {
      this.disableTemplateName = true;
      this.templateName = templatename;
      console.log(this.templateName);
      this.templateService.getTemplateByName(templatename)
        .subscribe(resp => {
          console.log('templates', resp);
          this.dataSource = new MatTableDataSource(resp);
          this.dataSource.sort = this.sort;
          this.dataSource.paginator = this.paginator;
        });
    } else {
      this.disableTemplateName = false;
    }
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  editTemplate(template: Template) {
    this.selectedTemplate = template;
    this.submitButtonLabel = 'Edit';
  }

  clearTemplate() {
    this.selectedTemplate = new Template();
    this.submitButtonLabel = 'Add New';
  }

  removeTemplate(template: Template) {
    const templateToRemove = this.dataSource.data.find(e => e.externalId === template.externalId);
    console.log('Remove Template', templateToRemove);

    let dialogRef = this.dialog.open(DeleteConfirmDialogComponent, {
      height: '200px',
      width: '600px',
      data: {id: template.externalId}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.templateService.removeTemplate(templateToRemove.externalId)
          .subscribe(() => {
            this.templateService.getTemplateByName(this.templateName)
              .subscribe(resp => {
                this.dataSource = new MatTableDataSource(resp);
                this.dataSource.sort = this.sort;
                this.dataSource.paginator = this.paginator;
                this.selectedTemplate = new Template();
              });
          });
      }
    });
  }

  upsertTemplate() {
    const templateToSave = this.templateDetails.mergeWithUpdates(this.selectedTemplate, this.templateName);
    if (templateToSave && templateToSave.name) {
      this.templateService.upsertTemplate(templateToSave).subscribe(resp => {
        this.templateService.getTemplateByName(this.templateName)
          .subscribe(resp => {
            this.dataSource = new MatTableDataSource(resp);
            this.dataSource.sort = this.sort;
            this.dataSource.paginator = this.paginator;
            this.disableTemplateName = true;
            this.clearTemplate();
          });
      });
    } else {
      this.openDialog('empty template name');
    }
  }

  openDialog(message: string): void {
    const dialogRef = this.dialog.open(PopupDialogComponent, {
      width: '250px',
      data: {message: message}
    });
  }


}
