using Finlex.Models;
using Finlex.Services;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Finlex.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class RecordsController : ControllerBase
    {
        private readonly RecordsService recordsService;

        public RecordsController(RecordsService recordsService) {

            this.recordsService = recordsService;
        }

        [HttpGet]
        public async Task<ActionResult<List<SomeDataItem>>> GetAsync() {

            return await recordsService.GetAsync();
        }
        [HttpGet("{id}")]
        public async  Task<ActionResult<SomeDataItem>> GetAsync(Guid id)
        {
            var someDataItem = await recordsService.GetAsync(id);

            if(someDataItem == null)
                return NotFound();

            return someDataItem;
        }

        [HttpPost]
        public async Task<ActionResult<SomeDataItem>> PostAsync([FromBody] SomeDataItem dataItem)
        {
            var createdData = await recordsService.CreateAsync(dataItem);
            if (createdData == null)
                return NotFound();

            return dataItem;
        }

        [HttpPut("{id}")]
        public async Task PutAsync(Guid id, [FromBody] SomeDataItem dataItem)
        {
            await recordsService.UpdateAsync(id, dataItem);
        }

        [HttpDelete("{id}")]
        public async Task DeleteAsync(Guid id)
        {
             await recordsService.RemoveAsync((id));
        }

    }
}
