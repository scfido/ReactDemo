using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Builder;
using Microsoft.AspNet.Http;
using Microsoft.Framework.DependencyInjection;
using React.AspNet;
using Microsoft.AspNet.Hosting;
using Microsoft.Dnx.Runtime;
using Newtonsoft.Json.Serialization;
using Microsoft.AspNet.Mvc.Formatters;

namespace AspNet5
{
    public class Startup
    {
        public Startup(IHostingEnvironment env, IApplicationEnvironment appEnv)
        {
            //var globalConfig = GlobalConfiguration.Configuration.Formatters.JsonFormatter;
            //globalConfig.SerializerSettings.ContractResolver = new CamelCasePropertyNamesContractResolver();
        }

        // For more information on how to configure your application, visit http://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc((option)=> {
                var jsonOutput= option.OutputFormatters.OfType<JsonOutputFormatter>().Single();
                jsonOutput.SerializerSettings.ContractResolver = new CamelCasePropertyNamesContractResolver();

                var jsonInputs = option.InputFormatters.OfType<JsonInputFormatter>().ToArray();
                foreach (var json in jsonInputs)
                {
                    json.SerializerSettings.ContractResolver = new CamelCasePropertyNamesContractResolver();
                }
            });
            services.AddReact();
        }

        public void Configure(IApplicationBuilder app)
        {
            // Initialise ReactJS.NET. Must be before static files.
            app.UseReact(config =>
            {
                // If you want to use server-side rendering of React components,
                // add all the necessary JavaScript files here. This includes
                // your components as well as all of their dependencies.
                // See http://reactjs.net/ for more information. Example:
                //config
                //    .AddScript("~/Scripts/First.jsx")
                //    .AddScript("~/Scripts/Second.jsx");

                // If you use an external build too (for example, Babel, Webpack,
                // Browserify or Gulp), you can improve performance by disabling
                // ReactJS.NET's version of Babel and loading the pre-transpiled
                // scripts. Example:
                //config
                //    .SetLoadBabel(false)
                //    .AddScriptWithoutTransform("~/Scripts/bundle.server.js");
            });

            // Add the platform handler to the request pipeline.
            app.UseIISPlatformHandler();
            app.UseStaticFiles();
            
            // Add MVC to the request pipeline.
            app.UseMvc();
        }
    }
}
