import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  import { Component, OnInit } from '@angular/core';

  import { AddmenuService } from '../addmenu.service';
  import { Addtheme } from '../addtheme';
  
  @Component({
    selector: 'app-homepage',
    templateUrl: './homepage.component.html',
    styleUrls: ['./homepage.component.css']
  })
  export class HomepageComponent implements OnInit {
    themes: Addtheme[];
  
    constructor(private addthemeservice:AddmenuService) { }
  
    ngOnInit(): void {
      this.getthemes();
    }
  public getthemes()
  {
    this.addthemeservice.getAllThemes().subscribe(data =>
      {
        this.themes=data;
       // console.log(data);
      })
  }
  }
  
