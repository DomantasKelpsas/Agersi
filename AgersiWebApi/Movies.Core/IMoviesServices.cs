using Movies.DB;
using System;
using System.Collections.Generic;
using System.Text;

namespace Movies.Core
{
    public interface IMoviesServices
    {
        Movie CreateMovie(Movie movie);
        Movie GetMovie(int id);
        void DeleteMovie(int id);
        void EditMovie(Movie movie);
        List<Movie> GetMovies();
    }
}
