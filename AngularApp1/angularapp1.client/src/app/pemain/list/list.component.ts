import { Component } from '@angular/core';
import { Pemain } from '../pemain';
import { PemainService } from '../pemain.service'; 

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  pemains: Pemain[]=[]

  constructor(private pemainService: PemainService) { }

  ngOnInit() {
    this.getPemainList();
  }

  getPemainList(): void {
    this.pemainService.getPemains().subscribe(pemains => this.pemains = pemains);

  }

  deletePemain(id: number): void {
    this.pemainService.deletePemain(id).subscribe(() => {
      this.pemains = this.pemains.filter(pemain => pemain.id !== id);
    });
  }

}
