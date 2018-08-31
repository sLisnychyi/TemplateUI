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
  isNetwork = false;
  isNativeVideo = false;
  isBigIcon = false;
  isTimer = false;
  isFloating = false;
  isInteractive = false;
  isMobileWebOnly = false;
  isAllClickable = false;
  isHtmlVideo = false;
  isInterceptedMraid = false;
  isVideo = false;
  isCoppa = false;
  isPortrait = false;

  partner: string;
  expression: string;
  creativeExpression: string;
  androidImageSize: string;
  iOSImageSize: string;
  pAdsNum: number;
  bnrt: number;
  closeOption: string;
  closeLocation: string;
  ctaColor: string;
  styleClass: string;
  bgEffect: string;
  advertiserId: string;
  publisherId: string;
  deviceType: string;
  minOs: string;
  maxOs: string;
  minSdkVersion: string;
  maxSdkVersion: string;

  categoryInclude: string;
  categoryExclude: string;
  appIdInclude: string;
  appIdExclude: string;
  developerIdInclude: string;
  developerIdExclude: string;
  channelIdInclude: string;
  channelIdExclude: string;
  geoInclude: string;
  geoExclude: string;
  serverInclude: string;
  serverExclude: string;

  constructor(public templateMetadata: TemplateMetadataProvider) {
    this.template = new Template();
    this.sizes = templateMetadata.sizes;
    this.types = templateMetadata.types;
    this.placements = templateMetadata.placements;
    this.operationSystems = templateMetadata.os;
  }


  ngOnChanges(): void {
    console.log('Template onChange:');
    if (this.template) {
      console.log('Template', this.template);
      const size = this.template.size;
      if (size) {
        this.selectedSize = size.width + 'x' + size.height;
      } else {
        this.selectedSize = '';
      }
      this.selectedPlacement = this.template.placement;
      if (this.template.format) {
        this.selectedType = this.template.format.formatType;
      } else {
        this.selectedType = '';
      }
      if (this.template.targetRules) {
        this.selectedOs = this.template.targetRules.os;
        this.testMode = this.template.targetRules.test;
        this.isMraid = this.template.targetRules.mraid;
        this.isVideo = this.template.targetRules.video;
        this.isCoppa = this.template.targetRules.coppa;
        this.isPortrait = this.template.targetRules.portrait;
        this.deviceType = this.template.targetRules.deviceType;
        this.minOs = this.template.targetRules.minOs;
        this.maxOs = this.template.targetRules.maxOs;
        this.minSdkVersion = this.template.targetRules.minSdkVersion;
        this.maxSdkVersion = this.template.targetRules.maxSdkVersion;

        this.categoryInclude = this.template.targetRules.categoryInclude ? this.template.targetRules.categoryInclude.join() : '';
        this.categoryExclude = this.template.targetRules.categoryExclude ? this.template.targetRules.categoryExclude.join() : '';
        this.appIdInclude = this.template.targetRules.appIdInclude ? this.template.targetRules.appIdInclude.join() : '';
        this.appIdExclude = this.template.targetRules.appIdExclude ? this.template.targetRules.appIdExclude.join() : '';
        this.developerIdInclude = this.template.targetRules.developerIdInclude ? this.template.targetRules.developerIdInclude.join() : '';
        this.developerIdExclude = this.template.targetRules.developerIdExclude ? this.template.targetRules.developerIdExclude.join() : '';
        this.channelIdInclude = this.template.targetRules.channelIdInclude ? this.template.targetRules.channelIdInclude.join() : '';
        this.channelIdExclude = this.template.targetRules.channelIdExclude ? this.template.targetRules.channelIdExclude.join() : '';
        this.geoInclude = this.template.targetRules.geoInclude ? this.template.targetRules.geoInclude.join() : '';
        this.geoExclude = this.template.targetRules.geoExclude ? this.template.targetRules.geoExclude.join() : '';
        this.serverInclude = this.template.targetRules.serverInclude ? this.template.targetRules.serverInclude.join() : '';
        this.serverExclude = this.template.targetRules.serverExclude ? this.template.targetRules.serverExclude.join() : '';
      } else {
        this.selectedOs = '';
        this.deviceType = '';
        this.minOs = '';
        this.maxOs = '';
        this.minSdkVersion = '';
        this.maxSdkVersion = '';
        this.testMode = false;
        this.isMraid = false;
        this.isVideo = false;
        this.isCoppa = false;
        this.isPortrait = false;
        this.categoryInclude = '';
        this.categoryExclude = '';
        this.appIdInclude = '';
        this.appIdExclude = '';
        this.developerIdInclude = '';
        this.developerIdExclude = '';
        this.channelIdInclude = '';
        this.channelIdExclude = '';
        this.geoInclude = '';
        this.geoExclude = '';
        this.serverInclude = '';
        this.serverExclude = '';
      }
      this.showClose = this.template.showClose;
      this.isMobileWeb = this.template.mobileWeb;
      this.isPrivate = this.template.private;
      this.isOverlay = this.template.overlay;
      this.isBlind = this.template.blind;
      this.isEngagement = this.template.engagement;
      this.isNetwork = this.template.network;
      this.isNativeVideo = this.template.nativeVideo;
      this.isBigIcon = this.template.bigIcon;
      this.isTimer = this.template.timer;
      this.isFloating = this.template.floating;
      this.isInteractive = this.template.interactive;
      this.isMobileWebOnly = this.template.mobileWebOnly;
      this.isAllClickable = this.template.allClickable;
      this.isHtmlVideo = this.template.htmlVideo;
      this.isInterceptedMraid = this.template.interceptedMraid;

      this.partner = this.template.partner;
      this.expression = this.template.expression;
      this.creativeExpression = this.template.creativeExpression;
      this.androidImageSize = this.template.androidImageSize;
      this.iOSImageSize = this.template.iOSImageSize;
      this.pAdsNum = this.template.pAdsNum;
      this.bnrt = this.template.bnrt;
      this.closeOption = this.template.closeOption;
      this.closeLocation = this.template.closeLocation;
      this.ctaColor = this.template.ctaColor;
      this.styleClass = this.template.styleClass;
      this.bgEffect = this.template.bgEffect;
      this.advertiserId = this.template.advertiserId;
      this.publisherId = this.template.publisherId;
    }
  }

  mergeWithUpdates(template: Template, templateName: string): Template {
    const result = template ? template : new Template();
    result.name = templateName;
    if (this.selectedSize) {
      const sizes = this.selectedSize.split('x');
      result.size = {width: Number(sizes[0]), height: Number(sizes[1])};
    }
    result.format = {formatType: this.selectedType ? this.selectedType : null, size: result.size ? result.size : null};
    result.placement = this.selectedPlacement;

    if (result.targetRules) {
      result.targetRules.os = this.selectedOs;
      result.targetRules.test = this.testMode;
      result.targetRules.mraid = this.isMraid;
      result.targetRules.video = this.isVideo;
      result.targetRules.coppa = this.isCoppa;
      result.targetRules.portrait = this.isPortrait;
      result.targetRules.deviceType = this.deviceType;
      result.targetRules.minOs = this.minOs;
      result.targetRules.maxOs = this.maxOs;
      result.targetRules.minSdkVersion = this.minSdkVersion;
      result.targetRules.maxSdkVersion = this.maxSdkVersion;
      result.targetRules.categoryInclude = this.categoryInclude ? this.categoryInclude.split(',') : null;
      result.targetRules.categoryExclude = this.categoryExclude ? this.categoryExclude.split(',') : null;
      result.targetRules.appIdInclude = this.appIdInclude ? this.appIdInclude.split(',') : null;
      result.targetRules.appIdExclude = this.appIdExclude ? this.appIdExclude.split(',') : null;
      result.targetRules.developerIdInclude = this.developerIdInclude ? this.developerIdInclude.split(',') : null;
      result.targetRules.developerIdExclude = this.developerIdExclude ? this.developerIdExclude.split(',') : null;
      result.targetRules.channelIdInclude = this.channelIdInclude ? this.channelIdInclude.split(',') : null;
      result.targetRules.channelIdExclude = this.channelIdExclude ? this.channelIdExclude.split(',') : null;
      result.targetRules.geoInclude = this.geoInclude ? this.geoInclude.split(',') : null;
      result.targetRules.geoExclude = this.geoExclude ? this.geoExclude.split(',') : null;
      result.targetRules.serverInclude = this.serverInclude ? this.serverInclude.split(',') : null;
      result.targetRules.serverExclude = this.serverExclude ? this.serverExclude.split(',') : null;
    } else {
      result.targetRules = {
        os: this.selectedOs ? this.selectedOs : null,
        deviceType: this.deviceType ? this.deviceType : null,
        minOs: this.minOs ? this.minOs : null,
        maxOs: this.maxOs ? this.maxOs : null,
        minSdkVersion: this.minSdkVersion ? this.minSdkVersion : null,
        maxSdkVersion: this.maxSdkVersion ? this.maxSdkVersion : null,
        test: this.testMode ? this.testMode : null,
        mraid: this.isMraid ? this.isMraid : null,
        video: this.isVideo ? this.isVideo : null,
        coppa: this.isCoppa ? this.isCoppa : null,
        portrait: this.isPortrait ? this.isPortrait : null,
        categoryInclude: this.categoryInclude ? this.categoryInclude.split(',') : null,
        categoryExclude: this.categoryExclude ? this.categoryExclude.split(',') : null,
        appIdInclude: this.appIdInclude ? this.appIdInclude.split(',') : null,
        appIdExclude: this.appIdExclude ? this.appIdExclude.split(',') : null,
        developerIdInclude: this.developerIdInclude ? this.developerIdInclude.split(',') : null,
        developerIdExclude: this.developerIdExclude ? this.developerIdExclude.split(',') : null,
        channelIdInclude: this.channelIdInclude ? this.channelIdInclude.split(',') : null,
        channelIdExclude: this.channelIdExclude ? this.channelIdExclude.split(',') : null,
        geoInclude: this.geoInclude ? this.geoInclude.split(',') : null,
        geoExclude: this.geoExclude ? this.geoExclude.split(',') : null,
        serverInclude: this.serverInclude ? this.serverInclude.split(',') : null,
        serverExclude: this.serverExclude ? this.serverExclude.split(',') : null
      };
    }

    result.showClose = this.showClose ? this.showClose : null;
    result.mobileWeb = this.isMobileWeb ? this.isMobileWeb : null;
    result.private = this.isPrivate ? this.isPrivate : null;
    result.overlay = this.isOverlay ? this.isOverlay : null;
    result.blind = this.isBlind ? this.isBlind : null;
    result.engagement = this.isEngagement ? this.isEngagement : null;
    result.network = this.isNetwork ? this.isNetwork : null;
    result.nativeVideo = this.isNativeVideo ? this.isNativeVideo : null;
    result.bigIcon = this.isBigIcon ? this.isBigIcon : null;
    result.timer = this.isTimer ? this.isTimer : null;
    result.floating = this.isFloating ? this.isFloating : null;
    result.interactive = this.isInteractive ? this.isInteractive : null;
    result.mobileWebOnly = this.isMobileWebOnly ? this.isMobileWebOnly : null;
    result.allClickable = this.isAllClickable ? this.isAllClickable : null;
    result.htmlVideo = this.isHtmlVideo ? this.isHtmlVideo : null;
    result.interceptedMraid = this.isInterceptedMraid ? this.isInterceptedMraid : null;

    result.partner = this.partner;
    result.expression = this.expression;
    result.creativeExpression = this.creativeExpression;
    result.androidImageSize = this.androidImageSize;
    result.iOSImageSize = this.iOSImageSize;
    result.pAdsNum = this.pAdsNum;
    result.bnrt = this.bnrt;
    result.closeOption = this.closeOption;
    result.closeLocation = this.closeLocation;
    result.ctaColor = this.ctaColor;
    result.styleClass = this.styleClass;
    result.bgEffect = this.bgEffect;
    result.advertiserId = this.advertiserId;
    result.publisherId = this.publisherId;

    return result;
  }

}

