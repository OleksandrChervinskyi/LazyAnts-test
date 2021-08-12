import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-notations-list',
  templateUrl: './notations-list.component.html',
  styleUrls: ['./notations-list.component.css']
})
export class NotationsListComponent implements OnInit {



  constructor(
    private router:Router,
    private activatedRoute : ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  navigateToCreatePage() {
    this.router.navigate(['updateNotation'], {relativeTo : this.activatedRoute })
  }
}
