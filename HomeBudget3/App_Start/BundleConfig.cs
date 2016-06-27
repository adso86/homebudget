﻿using System.Web;
using System.Web.Optimization;

namespace HomeBudget3
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/site.css"));

            bundles.Add(new ScriptBundle("~/bundles/HomeBudget")
                .IncludeDirectory("~/Scripts/Controllers", "*.js")
                .Include("~/Scripts/HomeBudget.js"));

            BundleTable.EnableOptimizations = true;
        }
    }
}
