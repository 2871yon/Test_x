using System;
using System.Collections.Generic;
using System.Collections;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using XT_1Model;

namespace XT_1Dal
{
    public static class DB
    {
        //DataTable
        private static List<Grid_1> lg1 { get; set; }
        private static List<Grid_2> lg2 { get; set; }


        static DB()
        {
            lg1 = new List<Grid_1>() {
                new Grid_1 { amountProducts=8, name="pkgs" },
                new Grid_1 { amountProducts=2, name="bottles" },
                new Grid_1 { amountProducts=7, name="pieces" },
                new Grid_1 { amountProducts=5, name="boxes" },};
            lg2 = new List<Grid_2>() {
                new Grid_2 { sumProduct=200, name="pkgs" },
                new Grid_2 { sumProduct=500, name="bottles" },
                new Grid_2 { sumProduct=20, name="pieces" },
                new Grid_2 { sumProduct=40, name="boxes" },};
        }

        public static List<Grid_1> Dblg1()
        {
            return lg1; 
        }
        public static  List<Grid_2> Dblg2()
        {
            return lg2;
        }
    }
}
