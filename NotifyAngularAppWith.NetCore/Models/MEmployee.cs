using System.ComponentModel.DataAnnotations;

namespace NotifyAngularAppWith.Models
{
    public class MEmployee
    {
        [Key]
        public int EmpID { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        public string Gender { get; set; }
        public string Password { get; set; }
    }
}
