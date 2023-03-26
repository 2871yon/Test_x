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
    public class Entites_Grid_1:BaseEntities
    {
        public Sql_data_Grid_1 sdg1 { get; set; }
        public Entites_Grid_1()
        {
            sdg1 = new Sql_data_Grid_1();
        }

        public List<Grid_1> getGrid1()
        {
            return sdg1.Sql_data_Grid_1r(); 
        }
    }
}
