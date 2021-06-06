using System;
using System.ComponentModel.DataAnnotations;

namespace Movies.DB
{
    public class Movie
    {
        [Key]
        public int Id { get; set; }
        public string value { get; set; }
    }
}
