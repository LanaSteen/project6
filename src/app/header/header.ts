import { Component } from '@angular/core';
import { RouterLink, RouterModule } from "@angular/router";
import { Button } from "../components/button/button";

@Component({
  selector: 'app-header',
  imports: [RouterModule, Button],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {

 childbtntext = "click me"

onKeyDown(event: KeyboardEvent) {
  if (event.ctrlKey && event.key === 'k') {
    console.log('Ctrl + k pressed');
  }
}


parentGetsInfo(childInfo : any){
    console.log("pront from parent but info comes from child " + childInfo);
}
  
}
