using System;
using System.Collections.Generic;
using AngularApp1.Server.Models;
using Microsoft.EntityFrameworkCore;

namespace AngularApp1.Server.Data;

public partial class FootballDbContext : DbContext
{
    public FootballDbContext(DbContextOptions<FootballDbContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Pemain> Pemains { get; set; }

    public virtual DbSet<Posisi> Posisis { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Pemain>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("pemain_pkey");

            entity.ToTable("pemain");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Gol)
                .HasDefaultValue(0)
                .HasColumnName("gol");
            entity.Property(e => e.IdPosisi).HasColumnName("id_posisi");
            entity.Property(e => e.Nama)
                .HasMaxLength(255)
                .HasColumnName("nama");
            entity.Property(e => e.NomorPunggung).HasColumnName("nomor_punggung");
            entity.Property(e => e.Pertandingan)
                .HasDefaultValue(0)
                .HasColumnName("pertandingan");

            entity.HasOne(d => d.Posisi)
                .WithMany(p => p.Pemains)
                .HasForeignKey(d => d.IdPosisi)
                .HasConstraintName("pemain_id_posisi_fkey");
        });

        modelBuilder.Entity<Posisi>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("posisi_pkey");

            entity.ToTable("posisi");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.NamaPosisi)
                .HasMaxLength(255)
                .HasColumnName("nama_posisi");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
