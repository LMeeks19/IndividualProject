using IndividualProject.Models;
using Microsoft.AspNetCore.Mvc;

namespace IndividualProject.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UserController : ControllerBase
    {
        private readonly IndividualProjectContext _ipc = new();


        [HttpGet]
        public UserDto GetUser(string username, string password)
        {
            var retrievedUser = _ipc.Users.SingleOrDefault(u => u.Username == username && u.Password == password) 
                ?? throw new Exception("The username or password is incorrect");

            var user = new UserDto
            {
                Username = retrievedUser.Username,
                Password = retrievedUser.Password,
                Forname = retrievedUser.Forname,
                Surname = retrievedUser.Surname,
                Email = retrievedUser.Email,
                PhoneNumber = retrievedUser.PhoneNumber,
            };

            return user;
        }
        
        [HttpPost]
        public void CreateUser(string username, string password, string forename, string surname, string email, string phoneNumber)
        {
            var newUser = new User
            {
                Username = username,
                Password = password,
                Forname = forename,
                Surname = surname,
                Email = email,
                PhoneNumber = phoneNumber,
            };

            _ipc.Users.Add(newUser);

            _ipc.SaveChangesAsync();
        }
    }
}