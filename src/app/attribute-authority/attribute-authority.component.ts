import { Component, OnInit } from '@angular/core';
import {AttributeAuthorityService} from "../attribute-authority.service";
import {AttributeAuthorityKeys} from "../attribute-authority-keys";

@Component({
  selector: 'app-attribute-authority',
  templateUrl: './attribute-authority.component.html',
  styleUrls: ['./attribute-authority.component.scss']
})
export class AttributeAuthorityComponent implements OnInit {
  public attributesString: string = "DOCTOR\nADMINISTRATION";
  public keys: AttributeAuthorityKeys = null;

  attributes () : string[] {
    return this.attributesString.split('\n');
  }

  constructor(private attributeAuthorityService: AttributeAuthorityService) { }

  ngOnInit() {
  }

  generateAttributeKeys(){
    this.attributeAuthorityService.generateKeys(this.attributes()).subscribe((keys: any) => {
      console.log(keys);
      this.keys = keys;
    });
  }
}
