using Finlex.Models;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Finlex.Services
{
    public class RecordsService
    {
        private readonly IMongoCollection<SomeDataItem> recordData;

        public RecordsService(ISomeDataDatabaseSettings settings)
        {
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);

            recordData = database.GetCollection<SomeDataItem>(settings.SomeDataCollectionName);
        }

        public async Task<List<SomeDataItem>> GetAsync() =>
           await recordData.Find(data => true).ToListAsync();

        public async Task<SomeDataItem> GetAsync(Guid id) =>
            await recordData.Find<SomeDataItem>(data => Guid.Equals(data.Id, id)).FirstOrDefaultAsync();

        public async Task<SomeDataItem> CreateAsync(SomeDataItem data)
        {
             await recordData.InsertOneAsync(data);
            return data;
        }

        public async Task UpdateAsync(Guid id, SomeDataItem updatedItem) =>
            await recordData.ReplaceOneAsync(data => data.Id == id, updatedItem);

        public async Task RemoveAsync(SomeDataItem itemToRemove) =>
            await recordData .DeleteOneAsync(data => data.Id == itemToRemove.Id);

        public async Task RemoveAsync(Guid id) =>
            await recordData .DeleteOneAsync(data => data.Id == id);
    }
}

