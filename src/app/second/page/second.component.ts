import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SecondRoutes } from '../second.routing';
import { ThirdRoutes } from '../../third/third.module';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrl: './second.component.scss',
})
export class SecondComponent implements OnInit {
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
  ) {}
  ngOnInit(): void {
    // Causes Bug
    //console.log(this._route.snapshot.paramMap.get(SecondRoutes.CodeParam));
    // Causes Bug too
    //this._router.navigate(['/', SecondRoutes.Module]);
    // Using ThirdRoutes works again
    this._router.navigate(['/', ThirdRoutes.Module]);
  }
}
