using Movies.DB;
using System;
using System.Collections.Generic;
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
         
            return movie;
        }

        public Movie GetMovie(int id)
        {
           return _context.Movies.First(n => n.Id == id);                    
        }

        public void DeleteMovie(int id)
        {
            var movie =  _context.Movies.First(n => n.Id == id);
            _context.Movies.Remove(movie);
            _context.SaveChanges();
        }

        public void EditMovie(Movie movie)
        {
            var editedMovie = _context.Movies.First(n => n.Id == movie.Id);
            editedMovie.title = movie.title;
            editedMovie.releaseDate = movie.releaseDate;
            editedMovie.genre = movie.genre;
            _context.SaveChanges();
        }

        public List<Movie> GetMovies()
        {
            return _context.Movies.ToList();
        }
    }
}
