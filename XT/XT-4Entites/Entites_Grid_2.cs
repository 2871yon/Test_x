using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using XT_1Dal;
using XT_1Model;
using XT_Sql_data;

namespace XT_4Entites
{
    public class Entites_Grid_2: BaseEntities
    {
        public Sql_data_Grid_2 sdg2 { get; set; }
        public Entites_Grid_2()
        {
            sdg2=new Sql_data_Grid_2();
        }

        public List<Grid_2> getGrid2()
        {
            return sdg2.Sql_data_Grid_2r();
        }
    }
}
