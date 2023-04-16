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
        private readonly MoviesDbContext context;

        public MovieController(MoviesDbContext temp)
        {
            context = temp;
        }

        public IEnumerable<MarriottMovies> Get()
        {
            var movies = context.Movies.ToArray();
            return movies;
        }

    }
}
