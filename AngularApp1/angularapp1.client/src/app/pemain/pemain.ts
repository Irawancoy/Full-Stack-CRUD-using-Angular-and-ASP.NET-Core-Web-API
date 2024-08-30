import {Posisi} from './posisi';
export interface Pemain {
  id: number,
  nomorPunggung: number,
  nama: string,
  pertandingan: number,
  gol: number,
  idPosisi: number,
  posisi?:Posisi
}
