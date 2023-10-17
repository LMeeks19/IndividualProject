using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace IndividualProject.Models;

public class IndividualProjectContext : DbContext
{
    public IndividualProjectContext()
    {
    }

    public IndividualProjectContext(DbContextOptions<IndividualProjectContext> options)
        : base(options)
    {
    }

    public DbSet<User> Users { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        => optionsBuilder.UseSqlServer("Server=(local); DataBase=Individual Project; Integrated Security=True; TrustServerCertificate=True");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<User>(entity =>
        {
            entity.ToTable("User");
            entity.HasKey(e => e.Id);
            entity.Property(e => e.Id).HasColumnName("Id");
            entity.Property(e => e.Username).HasColumnName("Username");
            entity.Property(e => e.Password).HasColumnName("Password");
            entity.Property(e => e.Forname).HasColumnName("Forname");
            entity.Property(e => e.Surname).HasColumnName("Surname");
            entity.Property(e => e.Email).HasColumnName("Email");
            entity.Property(e => e.PhoneNumber).HasColumnName("Phone Number");
        });
    }
}
