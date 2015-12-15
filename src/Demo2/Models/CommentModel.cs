using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WorkLog.Models
{
    public class CommentModel
    {
        [Required]
        public string Author { get; set; }

        [Required]
        public string Text { get; set; }
    }
}
