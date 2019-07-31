using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NotifyAngularAppWith.NetCore.Repository
{
   public interface ITypedHubClient
    {
        Task BroadcastMessage(string Message);
    }
}
