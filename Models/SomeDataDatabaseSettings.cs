using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Finlex.Models
{
    public class SomeDataDatabaseSettings : ISomeDataDatabaseSettings
    {
        public string SomeDataCollectionName { get; set; }
        public string ConnectionString { get; set ; }
        public string DatabaseName { get; set; }
    }
}
