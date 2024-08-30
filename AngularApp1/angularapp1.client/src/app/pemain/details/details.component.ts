import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pemain } from '../pemain';
import { PemainService } from '../pemain.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']  // Perbaiki dari 'styleUrl' ke 'styleUrls'
})
export class DetailsComponent implements OnInit {  // Implement OnInit untuk penggunaan ngOnInit

  id!: number;
  pemain!: Pemain;

  constructor(private pemainService: PemainService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['pemainId'];

    this.pemainService.getPemain(this.id).subscribe((data: Pemain) => {
      this.pemain = data;
    });
 
  }

  
}
