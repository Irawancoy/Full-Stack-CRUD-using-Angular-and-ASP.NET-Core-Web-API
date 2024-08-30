using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using AngularApp1.Server.Services;
using AngularApp1.Server.Models;

namespace AngularApp1.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PosisiController : ControllerBase
    {
        private readonly IPosisiService _posisiService;

        public PosisiController(IPosisiService posisiService)
        {
            _posisiService = posisiService;
        }

        // GET: api/Posisi
        [HttpGet]
        public async Task<IEnumerable<Posisi>> Get()
        {
            return await _posisiService.GetPositionList();
        }
    }
}
