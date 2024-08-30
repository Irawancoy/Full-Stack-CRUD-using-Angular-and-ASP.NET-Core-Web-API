namespace AngularApp1.Server.Services
{

using AngularApp1.Server.Data;
using AngularApp1.Server.Models;
using Microsoft.EntityFrameworkCore;

    public class PemainService : IPemainService
    {
        private readonly FootballDbContext _context;
        public PemainService(FootballDbContext context)
        {
        _context = context;
        }

        public async Task<IEnumerable<Pemain>> GetPemainList()
        {
        return await _context.Pemains
                .Include(x=>x.Posisi)
                .OrderBy(x=>x.Id)
                .ToListAsync();
        }

        public async Task<Pemain> GetPemainById(int id)
        {
          var pemain = await _context.Pemains
                .Include(x=>x.Posisi)
                .FirstOrDefaultAsync(x=>x.Id == id);

          return pemain??new Pemain();
        }

        public async Task<Pemain> CreatePemain(Pemain pemain)
        {
            _context.Pemains.Add(pemain);
            await _context.SaveChangesAsync();
            return pemain;
        }  
        
        public async Task<Pemain> UpdatePemain(Pemain pemain)
        {
            _context.Pemains.Update(pemain);
            await _context.SaveChangesAsync();
            return pemain;
        }   

        public async Task DeletePemain(Pemain pemain)
        {
            _context.Pemains.Remove(pemain);
            await _context.SaveChangesAsync();
        }   
    }
}
