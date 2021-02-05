using BlogLab.Models.Account;
using System;
using System.Collections.Generic;
using System.Text;

namespace BlogLab.Services
{
    public interface ITokenService
    {
        public string CreateToken(ApplicationUserIdentity user);
    }
}
