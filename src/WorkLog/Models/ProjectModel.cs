using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WorkLog.Models
{
    public class ProjectModel
    {
        public int Id { get; set; } = 0;

        [Required]
        public string Title { get; set; }

        public int TaskCount { get; set; } = 0;

    }
}
