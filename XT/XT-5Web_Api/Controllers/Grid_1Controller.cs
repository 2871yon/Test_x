using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using XT_1Model;
using XT_4Entites;

namespace XT_5Web_Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class Grid_1Controller : Controller
    {
        public Entites_Grid_1 eg1 { get; set; }
        public Grid_1Controller()
        {
            eg1 = new Entites_Grid_1();
        }

        // GET: api/<DepartmentController>
        [HttpGet]
        public JsonResult GetAllDepartments()
        {
            List<Grid_1> list = eg1.getGrid1();

            return new JsonResult(list);
        }
      
    }
}
