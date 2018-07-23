import {Component, Input, OnChanges, OnInit, SimpleChange} from '@angular/core';
import {Template} from '../../models/template.model';
import {TemplateMetadataProvider} from '../../providers/template-metadata-provider';

@Component({
  selector: 'template-details',
  templateUrl: './template-details.component.html',
  styleUrls: ['./template-details.component.css']
})
export class TemplateDetailsComponent implements OnChanges {

  @Input() template: Template;

  selectedSize: string;
  sizes: Array<String>;

  selectedType: string;
  types: Array<String>;

  selectedPlacement: string;
  placements: Array<String>;

  selectedOs: string;
  operationSystems: Array<String>;

  showClose = false;
  testMode = false;
  isMobileWeb = false;
  isPrivate = false;
  isMraid = false;
  isOverlay = false;
  isBlind = false;
  isEngagement = false;

  partner: string;
  expression: string;
  creativeExpression: string;


  constructor(public templateMetadata: TemplateMetadataProvider) {
    this.template = new Template();
    this.sizes = templateMetadata.sizes;
    this.types = templateMetadata.types;
    this.placements = templateMetadata.placements;
    this.operationSystems = templateMetadata.os;
  }

  ngOnInit() {
  }

  ngOnChanges(): void {
    console.log("Template onChange:");
    if (this.template) {
      console.log("Template", this.template);
      let size = this.template.size;
      if (size) {
        this.selectedSize = size.width + "x" + size.height;
      } else {
        this.selectedSize = "";
      }
      this.selectedPlacement = this.template.placement;
      if (this.template.format) {
        this.selectedType = this.template.format.formatType;
      } else {
        this.selectedType = "";
      }
      if (this.template.targetRules) {
        this.selectedOs = this.template.targetRules.os;
        this.testMode = this.template.targetRules.test;
        this.isMraid = this.template.targetRules.mraid;
      } else {
        this.selectedOs = "";
        this.testMode = false;
        this.isMraid = false;
      }
      this.showClose = this.template.showClose;
      this.isMobileWeb = this.template.mobileWeb;
      this.isPrivate = this.template.private;
      this.isOverlay = this.template.overlay;
      this.isBlind = this.template.blind;
      this.isEngagement = this.template.engagement;

      this.partner = this.template.partner;
      this.expression = this.template.expression;
      this.creativeExpression = this.template.creativeExpression;
    }
  }

  mergeWithUpdates(template: Template, templateName: string): Template {
    let result = template ? template : new Template();
    result.name = templateName;
    if (this.selectedSize) {
      let sizes = this.selectedSize.split("x");
      result.size = {width: Number(sizes[0]), height: Number(sizes[1])};
    }
    result.format = {formatType: this.selectedType ? this.selectedType : null, size: result.size ? result.size : null};
    result.placement = this.selectedPlacement;

    if (result.targetRules) {
      result.targetRules.os = this.selectedOs;
      result.targetRules.test = this.testMode;
      result.targetRules.mraid = this.isMraid;
    } else {
      result.targetRules = {
        test: this.testMode ? this.testMode : null,
        mraid: this.isMraid ? this.isMraid : null,
        os: this.selectedOs ? this.selectedOs : null
      }
    }

    result.showClose = this.showClose ? this.showClose : null;
    result.mobileWeb = this.isMobileWeb ? this.isMobileWeb : null;
    result.private = this.isPrivate ? this.isPrivate : null;
    result.overlay = this.isOverlay ? this.isOverlay : null;
    result.blind = this.isBlind ? this.isBlind : null;
    result.engagement = this.isEngagement ? this.isEngagement : null;

    result.partner = this.partner;
    result.expression = this.expression;
    result.creativeExpression = this.creativeExpression;

    return result;
  }

}

