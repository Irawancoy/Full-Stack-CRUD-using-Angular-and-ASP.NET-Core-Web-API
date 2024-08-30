using System;
using System.Collections.Generic;

namespace AngularApp1.Server.Models;

public partial class Pemain
{
    public int Id { get; set; }

    public int NomorPunggung { get; set; }

    public string Nama { get; set; } = null!;

    public int? Pertandingan { get; set; }

    public int? Gol { get; set; }

    public int? IdPosisi { get; set; }

    public virtual Posisi? Posisi { get; set; }
}
