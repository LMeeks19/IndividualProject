using IndividualProject.Models;
using Microsoft.AspNetCore.Mvc;

namespace IndividualProject.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UserController : ControllerBase
    {
        private readonly ILogger<UserController> _logger;
        private IndividualProjectContext _ipc = new();

        public UserController(ILogger<UserController> logger)
        {
            _logger = logger;
 
        }

        [HttpGet]
        public IEnumerable<UserDto> Get()
        {
            var user = _ipc.Users.Where(u => u.Username == "lm683" && u.Password == "pass123").Select(u => new UserDto
            {
                Username = u.Username,
                Password = u.Password,
                Forname = u.Forname,
                Surname = u.Surname,
                Email = u.Email,
                PhoneNumber = u.PhoneNumber,
            });

            return user;
        }
    }
}