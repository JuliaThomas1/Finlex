using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Finlex.Models
{
    public interface ISomeDataDatabaseSettings
    {
        string SomeDataCollectionName { get; set; }
        string ConnectionString { get; set; }
        string DatabaseName { get; set; }
    }
}
