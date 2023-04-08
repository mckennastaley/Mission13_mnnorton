using System;
using Microsoft.EntityFrameworkCore;

namespace BetApt.Data
{
	public class MoviesDbContext : DbContext
	{

		public MoviesDbContext (DbContextOptions<MoviesDbContext> options): base(options) { }

		public DbSet<MarriottMovies> Movies { get; set; }
		
	}
}

