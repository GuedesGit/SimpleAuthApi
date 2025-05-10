using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace SimpleAuthApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class SecureController : ControllerBase
    {
        [HttpGet("hello")]
        [Authorize]
        public IActionResult Hello()
        {
            var name = User.Identity?.Name ?? "warrior";
            return Ok($"💥 Kamehameha, {name.ToUpper()}! You're now powering protected endpoints like a Super Saiyan! 🔐🔥");
        }
    }
}
