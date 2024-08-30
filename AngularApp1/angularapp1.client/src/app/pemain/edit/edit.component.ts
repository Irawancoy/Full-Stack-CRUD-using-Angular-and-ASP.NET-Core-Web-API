import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Posisi } from '../posisi';
import { Pemain } from '../pemain';
import { PemainService } from '../pemain.service';
import { PosisiService } from '../posisi.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent {

  id: number = 0;
  pemain: Pemain = {} as Pemain;
  posisis: Posisi[] = [];
  editForm: FormGroup;

  constructor(
    private pemainService: PemainService,
    private posisiService: PosisiService,
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute) {

    this.editForm = this.formBuilder.group({
      id: [''],
      nama: ['', Validators.required],
      nomorPunggung: ['', Validators.required],
      idPosisi: ['', Validators.required],
      pertandingan: ['', Validators.required],
      gol: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['pemainId'];

    this.pemainService.getPemain(this.id).subscribe((data: Pemain) => {
      this.pemain = data;

      this.editForm.patchValue({
        id: this.pemain.id,
        nama: this.pemain.nama,
        nomorPunggung: this.pemain.nomorPunggung,
        idPosisi: this.pemain.idPosisi,
        pertandingan: this.pemain.pertandingan,
        gol: this.pemain.gol
      });
    });

    this.posisiService.getPosisi().subscribe((data: Posisi[]) => {
      this.posisis = data;
    });
  }

  onSubmit(formData: FormGroup) {
    this.pemainService.updatePemain(this.id, formData.value).subscribe(res => {
      this.router.navigate(['/pemain/list']);
    });
  }

}
