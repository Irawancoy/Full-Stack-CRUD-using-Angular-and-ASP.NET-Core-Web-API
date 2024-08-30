namespace AngularApp1.Server.Services
{

using AngularApp1.Server.Models;
    public interface IPemainService
    {
        Task<IEnumerable<Pemain>> GetPemainList();
        Task<Pemain> GetPemainById(int id);
        Task<Pemain> CreatePemain(Pemain pemain);
        Task<Pemain> UpdatePemain(Pemain pemain);
        Task DeletePemain(Pemain pemain);
    }
}
