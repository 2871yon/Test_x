using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using XT_1Model;
using XT_4Entites;

namespace XT_5Web_Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class Grid_2Controller : Controller
    {
        public Entites_Grid_2 eg2 { get; set; }
        public Grid_2Controller()
        {
            eg2 = new Entites_Grid_2();
        }

        // GET: api/<DepartmentController>
        [HttpGet]
        public JsonResult GetAllDepartments()
        {
            List<Grid_2> list = eg2.getGrid2();

            return new JsonResult(list);
        }
    }
}
