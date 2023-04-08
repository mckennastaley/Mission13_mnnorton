using System;
using System.ComponentModel.DataAnnotations;

namespace BetApt.Data
{
	public class MarriottMovies
	{
			[Key]
			public int movieID { get; set; }
			public string ? category { get; set; }
			public string ? director { get; set; }
			public string ? title { get; set; }
			public int ? year { get; set; }
			public bool ? edited { get; set; }
			public string ? rating { get; set; }
	}
}
