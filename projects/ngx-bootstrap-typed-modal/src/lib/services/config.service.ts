// // Angular modules
// import { Inject }                    from '@angular/core';
// import { Injectable }                from '@angular/core';

// // External modules
// import { NgbTypedModalModuleConfig } from '../types/ngb-typed-model-module-config.type';

// export const DEFAULT_CONFIG: NgbTypedModalModuleConfig =
// {
//   customClasses: []
// };


// @Injectable({
//   providedIn: 'root'
// })
// export class ConfigService
// {
//   private readonly config: NgbTypedModalModuleConfig;

//   constructor(
//     @Inject('config') userConfig: NgbTypedModalModuleConfig
//   )
//   {
//     this.config = { ...DEFAULT_CONFIG, ...userConfig };
//   }

//   public getConfig(): NgbTypedModalModuleConfig
//   {
//     return this.config;
//   }

//   public getStyleClasses(): string
//   {
//     if(typeof this.config.customClasses === 'string')
//       return this.config.customClasses;
//     else
//       return this.config.customClasses.join(' ');
//   }
// }
