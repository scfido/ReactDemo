using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;
using WorkLog.Models;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace WorkLog
{
    [Route("api/[controller]")]
    public class CommentsController : Controller
    {
        private static IList<CommentModel> comments;

        static CommentsController()
        {
            comments = new List<CommentModel>
            {
                new CommentModel
                {
                    Author = "Fuyun",
                    Text = "This is *another* comment"
                },
                new CommentModel
                {
                    Author = "Daniel Lo Nigro",
                    Text = "Hello ReactJS.NET World!"
                },
                new CommentModel
                {
                    Author = "Pete Hunt",
                    Text = "This is one comment"
                },
                new CommentModel
                {
                    Author = "Jordan Walke",
                    Text = "This is *another* comment"
                },
            };
        }

        // GET: api/values
        [HttpGet]
        public IEnumerable<CommentModel> Get()
        {
            return comments;
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        [HttpPost]
        public IEnumerable<CommentModel> Post([FromBody]CommentModel comment)
        {
            if (comment != null)
            {
                if (TryValidateModel(comment))
                {
                    comments.Add(comment);
                }
            }

            return comments;
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
