using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using XT_1Dal;
using XT_1Model;

namespace XT_Sql_data
{
    public class Sql_data_Grid_2:Sql_data_Grid
    {
        public List<Grid_2> Sql_data_Grid_2r()
        {
            return DB.Dblg2();
        }
    }
}
