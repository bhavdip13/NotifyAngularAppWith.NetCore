using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using NotifyAngularAppWith.Models;
using NotifyAngularAppWith.Repository;

namespace NotifyAngularAppWith.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {
        public EmployeeController(IEmployeeRepository emp)
        {
            _Emp = emp;
        }
        public IEmployeeRepository _Emp { get; set; }
        [HttpPost]
        public void Post([FromBody] MEmployee modal)
        {
            _Emp.Create(modal);
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var item = _Emp.GetById(id);
            if (item == null)
            {
                return NotFound();
            }
            return new ObjectResult(item);
        }
       
        [HttpGet]
        public List<MEmployee> Get()
        {   
            var a= _Emp.GetAll();
            return _Emp.GetAll();

        }
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] MEmployee modal)
        {
            _Emp.Update(id, modal);

        }
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            _Emp.Delete(id);

        }

    }
}