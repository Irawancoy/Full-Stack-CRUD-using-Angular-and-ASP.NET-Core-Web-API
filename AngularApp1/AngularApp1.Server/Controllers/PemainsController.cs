using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using AngularApp1.Server.Services;
using AngularApp1.Server.Models;

namespace AngularApp1.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PemainsController : ControllerBase
    {
        private readonly IPemainService _pemainService;

        public PemainsController(IPemainService pemainService)
        {
            _pemainService = pemainService;
        }

        // GET: api/Pemains
        [HttpGet]
        public async Task<IEnumerable<Pemain>> Get()
        {
            return await _pemainService.GetPemainList();
        }

        // GET: api/Pemains/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Pemain>> Get(int id)
        {
            var pemain = await _pemainService.GetPemainById(id);
            if (pemain == null)
            {
                return NotFound();
            }
            return Ok(pemain);
        }

        // POST: api/Pemains
        [HttpPost]
        public async Task<ActionResult<Pemain>> Post(Pemain pemain)
        {
            await _pemainService.CreatePemain(pemain);
            return CreatedAtAction("Post", new { id = pemain.Id }, pemain);
        }

        // PUT: api/Pemains/5
        [HttpPut("{id}")]
        public async Task<ActionResult<Pemain>> Put(int id, Pemain pemain)
        {
            if (id != pemain.Id)
            {
                return BadRequest("Not a valid pemain id");
            }
            await _pemainService.UpdatePemain(pemain);
            return NoContent();
        }

        // DELETE: api/Pemains/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Pemain>> Delete(int id)
        {
            var pemain = await _pemainService.GetPemainById(id);
            if (pemain == null)
            {
                return NotFound();
            }
            await _pemainService.DeletePemain(pemain);
            return NoContent();
        }   
    }
}
