using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Movies.Core;
using Movies.DB;

namespace AgersiWebApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MoviesController : ControllerBase
    {
      

        private readonly ILogger<MoviesController> _logger;
        private IMoviesServices _moviesServices;

        public MoviesController(ILogger<MoviesController> logger, IMoviesServices moviesServices)
        {
            _logger = logger;
            _moviesServices = moviesServices;
        }

        [HttpGet("{id}", Name = "GetMovie")]
        public IActionResult GetMovie(int id)
        {
            return Ok(_moviesServices.GetMovie(id));
        }

        [HttpPost]
        public IActionResult CreateMovie(Movie movie)
        {
            var newMovie = _moviesServices.CreateMovie(movie);
            return CreatedAtRoute("GetMovie", new { newMovie.Id }, newMovie);
        }
    }
}
