import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  selectedItem:string;
  menuItems:Array<{menuName:string,link:string}>=[
    {menuName:"Info",link:"/"},
    {menuName:"Programs",link:"/"},
    {menuName:"Support Us",link:"/"}
]


  constructor() {
      console.log("menu items are ", this.menuItems)
  }

  ngOnInit() {
    console.log("menu items are ", this.menuItems)
  }

selectMenuItem(menuItem:any){
    this.selectedItem = menuItem.menuName;
    console.log("selected item is ", this.selectedItem)
}

}
