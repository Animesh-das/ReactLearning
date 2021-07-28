using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using ReactExpensesAPI.Model;
using System;
using System.Collections.Generic;
using System.Linq;

namespace ReactExpensesAPI.Controller
{
    [Route("api/[controller]")]
    [ApiController]
    public class Expenses : ControllerBase
    {
        private IEnumerable<Expense> ExpenseList = new List<Expense>
            {
                new Expense { Id = 1, Date = new DateTime(2019, 4, 4), Name = "Car Wash", Amount = 23.78F },
                new Expense { Id = 2, Date = new DateTime(2020, 3, 4), Name = "Fuel", Amount = 24.78F },
                new Expense { Id = 3, Date = new DateTime(2019, 3, 10), Name = "Grocery", Amount = 25.78F },
                new Expense { Id = 4, Date = new DateTime(2019, 5, 4), Name = "Paint", Amount = 23.78F }
            };

        [HttpGet]
        [EnableCors("AllowLocalHost3000")]
        public IEnumerable<Expense> Get() 
        {
            return ExpenseList;
        }

        //[HttpGet]
        //public Expense Get(int id)
        //{
        //    return ExpenseList.FirstOrDefault(e => e.Id == id);
        //}

        [HttpPost]
        public void Post (DateTime date, string name, float amount)
        {
            var list = ExpenseList.ToList();

            var id = ExpenseList.Max(e => e.Id);
            list.Add(new Expense { Id = id + 1 , Amount = amount, Date = date, Name = name });

            ExpenseList = list;
        }
    }
}
