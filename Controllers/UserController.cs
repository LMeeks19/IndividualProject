using IndividualProject.Enums;
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
                Forename = retrievedUser.Forename,
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
                Forename = forename,
                Surname = surname,
                Email = email,
                PhoneNumber = phoneNumber,
            };

            _ipc.Users.Add(newUser);

            _ipc.SaveChangesAsync();
        }

        [HttpPut]
        public void UpdateUser(string username, string updatedValue, UserValueType userValueType)
        {
            var user = _ipc.Users.SingleOrDefault(u => u.Username == username) ?? throw new Exception("This user does not exist");

            if (userValueType == UserValueType.Username)
                user!.Username = updatedValue;
            else if (userValueType == UserValueType.Password)
                user!.Password = updatedValue;
            else if (userValueType == UserValueType.Forename)
                user!.Forename = updatedValue;
            else if (userValueType == UserValueType.Surname)
                user!.Surname = updatedValue;
            else if (userValueType == UserValueType.Email)
                user!.Email = updatedValue;
            else if (userValueType == UserValueType.PhoneNumber)
                user!.PhoneNumber = updatedValue;

            _ipc.SaveChangesAsync();
        }

        [HttpDelete] 
        public void DeleteUser(string username)
        {
            var user = _ipc.Users.SingleOrDefault(u => u.Username == username) ?? throw new Exception("This user does not exist");

            _ipc.Users.Remove(user);
            _ipc.SaveChangesAsync();
           
        }
    }
}