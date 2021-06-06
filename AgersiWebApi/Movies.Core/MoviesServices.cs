using Movies.DB;
using System;

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

            return movie;
        }
    }
}
