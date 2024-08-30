using System;
using System.Collections.Generic;

namespace AngularApp1.Server.Models;

public partial class Posisi
{
    public int Id { get; set; }

    public string NamaPosisi { get; set; } = null!;

    public virtual ICollection<Pemain> Pemains { get; set; } = new List<Pemain>();
}
