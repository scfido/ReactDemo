using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;
using WorkLog.Models;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace WorkLog.Controllers
{
    [Route("api/[controller]")]
    public class ProjectController : Controller
    {
        static List<ProjectModel> projects;

        static ProjectController()
        {
            projects = new List<ProjectModel>
            {
                new ProjectModel
                {
                    Id = 1,
                    Title= "VGS II",
                    TaskCount = 23
                },
                new ProjectModel
                {
                    Id = 2,
                    Title= "VIP 5000",
                    TaskCount = 63
                },
                new ProjectModel
                {
                    Id = 3,
                    Title= "数据汇集中心",
                    TaskCount = 7
                },
                new ProjectModel
                {
                    Id = 4,
                    Title= "统一应用平台",
                    TaskCount = 9
                },
            };
        }

        // GET: api/values
        [HttpGet]
        public IEnumerable<ProjectModel> Get()
        {
            return projects;
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public ProjectModel Get(int id)
        {
            return projects.Find(p=> p.Id == id);
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody]ProjectModel project)
        {
            if (project != null)
            {
                if (TryValidateModel(project))
                {
                    project.Id = projects.Count;
                    projects.Add(project);
                }
            }
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
