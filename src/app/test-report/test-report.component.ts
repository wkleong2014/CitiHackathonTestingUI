import { Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { TestReportDataSource } from './test-report-datasource';
import { Report } from '../models/report.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-test-report',
    templateUrl: './test-report.component.html',
    styleUrls: ['./test-report.component.css']
})
export class TestReportComponent implements OnInit {
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;
    dataSource: TestReportDataSource;
    report: Report[];
    subscription: Subscription;

    /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
    displayedColumns = ['timestamp', 'testUrl', 'runCount', 'failureCount', 'successCount'];

    constructor(private db: AngularFirestore) {
    }

    ngOnInit() {
        this.dataSource = new TestReportDataSource(this.paginator, this.sort);

        this.subscription = this.db.collection('report').valueChanges().subscribe(d => {
            this.dataSource = new TestReportDataSource(this.paginator, this.sort);
            this.dataSource.data = d;
        });
    }
}
