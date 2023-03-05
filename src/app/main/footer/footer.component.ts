import { Component } from '@angular/core';
import { LayoutService } from '../../service/app.layout.service';

@Component({
    selector: 'footer',
    templateUrl: './footer.component.html'
})
export class FooterComponent {
    constructor(public layoutService: LayoutService) { }
}
