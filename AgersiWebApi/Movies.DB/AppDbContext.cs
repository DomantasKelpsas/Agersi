using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace Movies.DB
{
    public class AppDbContext: DbContext
    {
        
            public DbSet<Movie> Movies { get; set; }
            

            protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
            {
                optionsBuilder.UseSqlServer(
                    @"Server=(localdb)\mssqllocaldb;Database=Movies;Integrated Security=True");
            }
        
    }
}
