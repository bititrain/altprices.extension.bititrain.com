import { Component, OnInit, Input } from '@angular/core';
import { Alt } from '../../models/alt';

@Component({
  selector: 'app-alt',
  templateUrl: './alt.component.html',
  styleUrls: ['./alt.component.css']
})
export class AltComponent implements OnInit {
  @Input() alt: Alt;

  constructor() { }

  ngOnInit() { }

}
