import { Component } from "@angular/core";
import { Post } from "../app.component";

const posts = [
    {
        "userName": "John Dow",
        "datePost": new Date("2021-11-07T11:55:36.244Z"),
        "title": "NATURAL LANGUAGE INTERFACE ACCESSIBILITY",
        "dubTitle": "Spoken interaction with mobile devices and consumer"
    },
    {
        "userName": "John Dow",
        "datePost": new Date("2021-11-07T11:55:36.244Z"),
        "title": "Accessibility of Remote Meeting",
        "dubTitle": "The impactvof COVID-19 has seen a substantial increase"
    }
];

@Component({
    selector: 'app-news-feed',
    templateUrl: './newsFead.component.html'
})

export class NewsFeadComponent {
    posts: Post[] = posts;
}