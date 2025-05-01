using System;

namespace backend.Models
{
    public class Contacts
    {
        public int Id { get; set; }
        public string FullName { get; set; }
        public string Email { get; set; }
        
        public int Phone { get; set ; }
        public bool IsFavorite {get ; set;}

    }
}

//change this depending on what you are asked to do

//Contact: ID, FullName, Email, Phone, IsFavorite (boolean)