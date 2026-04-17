import React from 'react';
import { INITIAL_SERVICES } from '../../constants';
import { Edit2, Trash2, Plus, Check, X, ToggleLeft, ToggleRight } from 'lucide-react';

export default function AdminServices() {
  const [services, setServices] = React.useState(INITIAL_SERVICES);
  const [editingId, setEditingId] = React.useState<string | null>(null);

  const toggleService = (id: string) => {
    setServices(services.map(s => s.id === id ? { ...s, enabled: !s.enabled } : s));
  };

  const updatePrice = (id: string, newPrice: number) => {
    setServices(services.map(s => s.id === id ? { ...s, price: newPrice } : s));
    setEditingId(null);
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-serif font-bold text-purple-100">Manage Services</h1>
        <button className="glass-button flex items-center gap-2 text-sm">
          <Plus className="w-4 h-4" /> Add Service
        </button>
      </div>

      <div className="glass-card overflow-hidden border border-white/5">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-white/5 border-b border-white/10">
              <th className="p-4 text-xs font-bold uppercase tracking-widest text-purple-200/40">Service Name</th>
              <th className="p-4 text-xs font-bold uppercase tracking-widest text-purple-200/40">Price (₹)</th>
              <th className="p-4 text-xs font-bold uppercase tracking-widest text-purple-200/40">Status</th>
              <th className="p-4 text-xs font-bold uppercase tracking-widest text-purple-200/40 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {services.map((service) => (
              <tr key={service.id} className="hover:bg-white/5 transition-colors">
                <td className="p-4">
                  <p className="font-medium text-purple-100">{service.title}</p>
                  <p className="text-xs text-purple-200/40 truncate max-w-xs">{service.description}</p>
                </td>
                <td className="p-4">
                  {editingId === service.id ? (
                    <div className="flex items-center gap-2">
                      <input 
                        type="number" 
                        defaultValue={service.price}
                        className="w-24 bg-[#0a051a] border border-purple-500/30 rounded px-2 py-1 text-purple-100 focus:outline-none"
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') updatePrice(service.id, parseInt(e.currentTarget.value));
                        }}
                      />
                      <button onClick={() => setEditingId(null)} className="text-red-400"><X className="w-4 h-4" /></button>
                    </div>
                  ) : (
                    <span className="text-amber-400 font-bold">₹{service.price}</span>
                  )}
                </td>
                <td className="p-4">
                  <button 
                    onClick={() => toggleService(service.id)}
                    className={`flex items-center gap-2 text-sm ${service.enabled ? 'text-green-400' : 'text-purple-200/40'}`}
                  >
                    {service.enabled ? <ToggleRight className="w-6 h-6" /> : <ToggleLeft className="w-6 h-6" />}
                    {service.enabled ? 'Enabled' : 'Disabled'}
                  </button>
                </td>
                <td className="p-4 text-right">
                  <div className="flex items-center justify-end gap-3">
                    <button 
                      onClick={() => setEditingId(service.id)}
                      className="p-2 hover:bg-white/5 rounded-lg text-purple-200 transition-all"
                    >
                      <Edit2 className="w-4 h-4" />
                    </button>
                    <button className="p-2 hover:bg-red-500/10 rounded-lg text-red-400 transition-all">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-8 p-6 glass-card bg-amber-400/5 border-amber-400/20">
        <h4 className="text-amber-400 font-bold mb-2">Pro Tip</h4>
        <p className="text-sm text-purple-200/60">
          You can automatically generate prices based on market trends by clicking the "Auto-Generate Prices" button in settings.
        </p>
      </div>
    </div>
  );
}
