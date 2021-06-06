using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Movies.DB
{
    public class Movie
    {
        [Key]
        public int Id { get; set; }      
        public string title { get; set; }
        public string genre { get; set; }
        [Column(TypeName = "Date")]
        public DateTime releaseDate { get; set; }
    }
}
