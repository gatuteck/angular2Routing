import {bootstrap} from 'angular2/platform/browser';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {HomeService} from './home/home.service';
import {PortfolioService} from './portfolio/portfolio.service';
import {AppComponent} from './app.component'; 

bootstrap(AppComponent, [ROUTER_PROVIDERS, HomeService, PortfolioService]);