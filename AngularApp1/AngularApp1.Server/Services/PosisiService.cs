namespace AngularApp1.Server.Services
{
    using AngularApp1.Server.Models;
    using AngularApp1.Server.Data;
    using Microsoft.EntityFrameworkCore;

    public class PosisiService : IPosisiService
    {
        private readonly FootballDbContext _context;

        public PosisiService(FootballDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Posisi>> GetPositionList()
        {
            return await _context.Posisis
                .OrderBy(x => x.Id)
                .Include(x => x.Pemains)
                .ToListAsync();
        }
    }
}
