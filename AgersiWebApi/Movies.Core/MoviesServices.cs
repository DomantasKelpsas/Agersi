using Movies.DB;
using System;
using System.Linq;

namespace Movies.Core
{
    public class MoviesServices : IMoviesServices
    {

        private AppDbContext _context;

        public MoviesServices(AppDbContext context) {

            _context = context;
        }

        public Movie CreateMovie(Movie movie) {
            _context.Add(movie);
            _context.SaveChanges();
            Console.WriteLine(movie);
            return movie;
        }

        public Movie GetMovie(int id)
        {
           return _context.Movies.First(n => n.Id == id);                    
        }
    }
}
