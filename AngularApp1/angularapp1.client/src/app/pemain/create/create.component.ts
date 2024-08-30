import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Posisi } from '../posisi';
import { Pemain } from '../pemain';
import { PemainService } from '../pemain.service';
import { PosisiService } from '../posisi.service'; 

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {

  posisis: Posisi[] = []
  createForm

  constructor(
    private pemainService: PemainService,
    private posisiService: PosisiService,
    private formBuilder: FormBuilder,
    private router: Router) {
    this.createForm = this.formBuilder.group({
      nama: ['', Validators.required],
        nomorPunggung: ['', Validators.required],
        idPosisi: ['', Validators.required],
        pertandingan: ['', Validators.required],
        gol: ['', Validators.required],
      })
  }

  ngOnInit(): void {
    this.posisiService.getPosisi().subscribe((data: Posisi[]) => {
      this.posisis = data;
    })
  }

  onSubmit(formData:any) {
    this.pemainService.createPemain(formData.value).subscribe(res => {
      this.router.navigate(['/pemain/list']);
    })
  }



}
