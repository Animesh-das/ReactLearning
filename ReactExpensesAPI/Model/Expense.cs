using System;

namespace ReactExpensesAPI.Model
{
    public class Expense
    {
        public int Id { get; set; }
        public float Amount { get; set; }
        public string Name { get; set; }
        public DateTime Date { get; set; }
    }
}
