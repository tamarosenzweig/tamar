import { Component, OnInit } from '@angular/core';
import { AsyncService } from '../../shared/async-service.service';

@Component({
  selector: 'app-package-list',
  templateUrl: './package-list.component.html',
  styleUrls: ['./package-list.component.css']
})
export class PackageListComponent implements OnInit {
  ngOnInit() {

  }
  allPackage: any = [];
  downloadList: any = [];
  constructor(private asyncService: AsyncService) {
    // this.asyncService.packageSubject.subscribe(
    //   {
    //     // next: (v: any) =>{ this.allPackage.push({ name: v.package.name })}
    //     next: (v:string) => this.allPackage=v
    //   }
    // );
    // this.asyncService.downloadSubject.subscribe(
    //   {
    //     next: (v: { start: any, end: any }) => this.downloadList.forEach(element => {
    //       this.asyncService.getAllDownloads(v.start, v.end, element.name).subscribe(
    //         p => {
    //           element.download = p.downloads;
    //         }
    //       )
    //     })
    //   }
    // );
    this.asyncService.packageSubject.subscribe(
      {
        next: (v: any) => {
          this.allPackage = [];
          v.forEach(element => {
            this.allPackage.push({ name: element.package.name })

          })
        }
      });

    this.asyncService.downloadSubject.subscribe(
      {
        next: (v: { start: any, end: any }) => this.allPackage.forEach(el => {
          this.asyncService.getAllDownloads(v.start, v.end, el.name).subscribe(p => {
            el.donload = p.downloads;
          })
        })
      }
    );

  }
}




