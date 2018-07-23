import {Injectable} from '@angular/core';

@Injectable()
export class TemplateMetadataProvider {

  sizes = ['300x50', '320x50', '300x250', '300x156', '300x157', '480,320', '768x90', '1024x90',
    '150x150', '480x50', '468x60', '728x90', '480x32', '1200x628', '568x50', '375x50', '414x50', '736x50', '667x50'];

  placements = [
    'INAPP_BANNER',
    'INAPP_SPLASH',
    'INAPP_RETURN',
    'INAPP_OVERLAY',
    'INAPP_FULL_SCREEN',
    'INAPP_OFFER_WALL',
    'INAPP_NATIVE',
    'TRIAL_CREATIVE',
    'NOTIFICATION_AREA',
    'API_NATIVE',
    'API_BANNER',
    'API_FULL_SCREEN',
    'RTB_API_JSON',
    'RTB_BANNER',
    'RTB_LARGE_BANNER',
    'RTB_FULL_SCREEN',
    'THIRD_PARTY_TAG',
    'BULK_API'
  ];

  types = ['IMAGE', 'VIDEO', 'HTML'];

  os = ['ANDROID', 'IOS'];


}
