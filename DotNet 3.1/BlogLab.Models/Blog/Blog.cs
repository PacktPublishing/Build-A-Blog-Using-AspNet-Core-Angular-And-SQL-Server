using System;
using System.Collections.Generic;
using System.Text;

namespace BlogLab.Models.Blog
{
    public class Blog : BlogCreate
    {
        public string Username { get; set; }

        public int ApplicationUserId { get; set; }

        public DateTime PublishDate { get; set; }

        public DateTime UpdateDate { get; set; }
    }
}
