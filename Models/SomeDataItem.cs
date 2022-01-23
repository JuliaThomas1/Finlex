using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;

namespace Finlex.Models
{
    public class SomeDataItem
    {
        [BsonId]
        [BsonRepresentation(BsonType.String)]
        public Guid Id { get; set; }
        public string Username {get; set;}
        public string Email { get; set; }
        public DateTime Birthdate { get; set; }
        public string Firstname { get; set; }
        public string Lastname { get; set; }
    }
}
