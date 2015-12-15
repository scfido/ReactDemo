using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Builder;
using Microsoft.AspNet.Hosting;
using Microsoft.AspNet.Http;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.AspNet.StaticFiles;
using Microsoft.AspNet.Mvc.Formatters;
using Newtonsoft.Json.Serialization;

namespace WorkLog
{
    public class Startup
    {
        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit http://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc((option) => {
                var jsonOutput = option.OutputFormatters.OfType<JsonOutputFormatter>().Single();
                jsonOutput.SerializerSettings.ContractResolver = new CamelCasePropertyNamesContractResolver();

                var jsonInputs = option.InputFormatters.OfType<JsonInputFormatter>().ToArray();
                foreach (var json in jsonInputs)
                {
                    json.SerializerSettings.ContractResolver = new CamelCasePropertyNamesContractResolver();
                }
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app)
        {
            // Add the platform handler to the request pipeline.
            app.UseIISPlatformHandler();

            //设定静态文件的默认文档
            app.UseDefaultFiles(new DefaultFilesOptions()
            {
                DefaultFileNames = new string[] { "index.html", "index.htm" }
            });
            app.UseStaticFiles();

            // Add MVC to the request pipeline.
            app.UseMvc();
        }

        // Entry point for the application.
        public static void Main(string[] args) => WebApplication.Run<Startup>(args);
    }
}
