import { Component, OnInit } from '@angular/core';
import { AsyncService } from '../../shared/async-service.service';

@Component({
  selector: 'app-package-input',
  templateUrl: './package-input.component.html',
  styleUrls: ['./package-input.component.css']
})
export class PackageInputComponent implements OnInit {
  pckgInput: string = '';
  allPackage: any;
  constructor(private asyncService: AsyncService) { }

  ngOnInit() {
  }
  onClick() {
    this.asyncService.getAllPackages(this.pckgInput).subscribe(p => {
      this.asyncService.packageSubject.next(p);
    });
  }
}

