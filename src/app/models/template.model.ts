export class Template {
  'externalId': string;
  'name': string;
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
  'androidImageSize': string; // androidImageWidth
  'iOSImageSize': string; // iOSImageWidth
  // these are duplication of width/height from format, but leave them at this stage
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
  'isNetwork': boolean;
  'isNativeVideo': boolean;
  'engagement': boolean;
  'isBigIcon': boolean;
  'blind': boolean;
  'isTimer': boolean;
  'isFloating': boolean;
  'isnumbereractive': boolean;
  'isMobileWebOnly': boolean;
  'isAllClickable': boolean;
  'styleClass': string;
  'isHtmlVideo': boolean;
  'bgEffect': string;
  'targetRules': {
    'test': boolean,
    'mraid': boolean,
    'os': string,
  };
}
