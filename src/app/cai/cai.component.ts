import { Component, Inject, NgZone, PLATFORM_ID, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
    selector: 'app-cai',
    templateUrl: './cai.component.html',
    styleUrls: ['./cai.component.scss']
})
export class CaiComponent implements OnInit {

    public semester: string | null = '';

    constructor(@Inject(PLATFORM_ID) private platformId: any,
        private zone: NgZone,
        private route: ActivatedRoute
    ) { }

    ngOnInit(): void {
        //        this.semester = this.route.snapshot.paramMap.get('semester')

        this.route.paramMap.subscribe((params: ParamMap) => {
            this.semester = params.get('semester');
        })
    }


}
