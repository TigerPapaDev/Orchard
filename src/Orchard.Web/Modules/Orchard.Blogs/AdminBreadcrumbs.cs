﻿using System.Web.Routing;
using Orchard.ContentManagement;
using Orchard.Core.Contents.Navigation;
using Orchard.Localization;
using Orchard.UI.Navigation;

namespace Orchard.Blogs {
    public class AdminBreadcrumbs : AdminBreadcrumbsProvider {
        public const string Name = "Orchard.Blogs.AdminBreadcrumbs";
        private readonly IOrchardServices _orchardServices;

        public AdminBreadcrumbs(IOrchardServices orchardServices) {
            _orchardServices = orchardServices;
        }

        public override string MenuName {
            get { return Name; }
        }

        protected override void AddItems(NavigationItemBuilder root) {
            var context = _orchardServices.WorkContext.Layout.Breadcrumbs.Context as RouteValueDictionary;
            var currentBlog = context != null ? context["CurrentBlog"] as IContent : default(IContent);
            
            if(currentBlog != null) {
                var blogMetadata = _orchardServices.ContentManager.GetItemMetadata(currentBlog);
                root.Add(new LocalizedString(blogMetadata.DisplayText), blog => {
                    blog.Action(blogMetadata.AdminRouteValues);
                    blog.Add(T("New Post"), newPost => newPost.Action("Create", "BlogPostAdmin", new { area = "Orchard.Blogs", blogId = currentBlog.Id }));

                    var currentBlogPost = context["CurrentBlogPost"] as IContent;

                    if(currentBlogPost != null)
                        blog.Add(T("Edit Post"), editPost => editPost.Action("Edit", "BlogPostAdmin", new { area = "Orchard.Blogs", blogId = currentBlog.Id, postId = currentBlogPost.Id }));
                });
            }
        }
    }
}