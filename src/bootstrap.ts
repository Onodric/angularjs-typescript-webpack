import * as angular from 'angular';
import { NgModule } from 'angular-ts-decorators';
import { AppModule } from './main';

angular.element(document).ready(() => {
  angular.bootstrap(document, [(<NgModule>AppModule).module.name], {strictDi: true});
});
