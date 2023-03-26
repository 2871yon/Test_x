using System;
using System.Collections.Generic;  
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using XT_1Dal;
using XT_1Model;

namespace XT_Sql_data
{
    public class Sql_data_Grid_1:Sql_data_Grid
    {
        public  List<Grid_1> Sql_data_Grid_1r()
        {
            return DB.Dblg1();
        }
        //public DataTable GetAllDepartment()
        //{
        //    string query = @"exec GetAllDepertments";
        //    DataTable table = new DataTable();
        //    SqlQuery.RunCommand(query, table.Load);

        //    return table;
        //}

        //public DataTable GetDepartment(int id)
        //{
        //    string query = $"exec getDep {id}";
        //    DataTable table = new DataTable();
        //    SqlQuery.RunCommand(query, table.Load);

        //    return table;
        //}
        //public string InsertDepartment(Departments dep)
        //{
        //    string query = $"exec insertDep '{dep.Name}','{dep.Description}'";
        //    DataTable table = new DataTable();
        //    SqlQuery.RunCommand(query, table.Load);
        //    return "Added Department Successfuly";
        //}
        //public string UpdateDepartment(int id, Departments dep)
        //{
        //    string query = $"exec updateDep {id},'{dep.Name}','{dep.Description}')";
        //    DataTable table = new DataTable();
        //    SqlQuery.RunCommand(query, table.Load);
        //    return "Updated Department Successfuly";

        //}
        //public string DeleteDepartment(int id)
        //{
        //    string query = $"exec deleteDep {id}";
        //    DataTable table = new DataTable();
        //    SqlQuery.RunCommand(query, table.Load);
        //    return "Deleted Department Successfuly";
        //}
    }
}
