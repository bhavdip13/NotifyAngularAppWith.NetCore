using Microsoft.EntityFrameworkCore;
using NotifyAngularAppWith.Models;

namespace Employee.API
{
    public class DBContext : DbContext
    {
        public DBContext(DbContextOptions<DBContext> options) : base(options) { }
        public DbSet<MEmployee> Emp { get; set; }
    }
}