using System;
using System.Collections.Generic;
using System.Runtime.CompilerServices;
using System.Text;

namespace BlogLab.Models.Account
{
    public class ApplicationUser
    {
        public int ApplicationUserId { get; set; }

        public string Username { get; set; }

        public string Fullname { get; set; }

        public string Email { get; set; }

        public string Token { get; set; }

    }
}
