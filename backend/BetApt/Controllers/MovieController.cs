using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BetApt.Data;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;

namespace BetApt.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MovieController : ControllerBase
    {
        private readonly MoviesDbContext _context;

        public MovieController(MoviesDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IEnumerable<MarriottMovies> Get()
        {
            var movies = _context.Movies.ToList();
            return movies;
        }
    }
}
