import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {HomeComponent} from './home/home.component';
import {PortfolioComponent} from './portfolio/portfolio.component';
import {AboutComponent} from './about/about.component';
import {ContactMeComponent} from './contact-me/contact-me.component';

@Component({
    selector: 'my-app',
    template: `
    <nav class="navbar navbar-dark bg-inverse" style="background-color: #957bbe;">
        <div class="nav navbar-nav">
            <a class="nav-item nav-link active" [routerLink]="['Home']">Home</a>
            <a class="nav-item nav-link" [routerLink]="['Portfolio']">Portfolio</a>
            <a class="nav-item nav-link" [routerLink]="['About']">About Me</a>
            <a class="nav-item nav-link" [routerLink]="['ContactMe']">Contact Me</a>
        </div>
     </nav>
      <router-outlet></router-outlet>
    `,
    styleUrls: ['app/app.component.css'],
    directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
    {path: '/home', name: 'Home', component: HomeComponent, useAsDefault:true},
    {path: '/portfolio', name: 'Portfolio', component: PortfolioComponent},
    {path: '/about', name: 'About',     component: AboutComponent},
    {path: '/contact-me', name: 'ContactMe',     component: ContactMeComponent}
])  

export class AppComponent {
    public title = 'Shailender Singh Portfolio';
}