export class Template {
  'externalId': string;
  'name': string;
  'lastUpdated': number;
  'expression': string;
  'creativeExpression': string;
  'partner': string;
  'placement': string;
  'format': {
    'formatType': string,
    'size': {
      'width': number,
      'height': number
    }
  };
  'androidImageSize': string;
  'iOSImageSize': string;
  'size': {
    'width': number,
    'height': number
  };

  'pAdsNum': number;
  'bnrt': number;
  'closeOption': string;
  'closeLocation': string;
  'ctaColor': string;
  'mobileWeb': boolean;
  'private': boolean;
  'overlay': boolean;
  'showClose': boolean;
  'network': boolean;
  'nativeVideo': boolean;
  'engagement': boolean;
  'bigIcon': boolean;
  'blind': boolean;
  'timer': boolean;
  'floating': boolean;
  'interactive': boolean;
  'mobileWebOnly': boolean;
  'allClickable': boolean;
  'styleClass': string;
  'htmlVideo': boolean;
  'interceptedMraid': boolean;
  'bgEffect': string;
  'targetRules': {
    'test': boolean,
    'mraid': boolean,
    'os': string,
    'video': boolean,
    'coppa': boolean, // name not in 2D_top_apps_banner_infra,3D_banner_infra
    'portrait': boolean, // utils.diffnumber
    'minOs': string,
    'maxOs': string,
    'minSdkVersion': string,
    'maxSdkVersion': string,
    'deviceType': string,
    'categoryInclude': string[],
    'categoryExclude': string[],
    'appIdInclude': string[], // publisherId in templates
    'appIdExclude': string[], // publisherId in templates
    'developerIdInclude': string[],
    'developerIdExclude': string[],
    'channelIdInclude': string[],
    'channelIdExclude': string[],
    'geoInclude': string[],
    'geoExclude': string[],
    'serverInclude': string[],
    'serverExclude': string[],
  };
}
