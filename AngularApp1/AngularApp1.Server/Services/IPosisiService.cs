namespace AngularApp1.Server.Services
{
    using AngularApp1.Server.Models;
    public interface IPosisiService
    {
        Task<IEnumerable<Posisi>> GetPositionList();
    }
}
