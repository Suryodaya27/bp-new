import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { Link } from "react-router-dom";
import { LogoLockup } from "@/components/LogoMark";
import ThemeToggle from "@/components/ThemeToggle";

const API = "/api";


export default function Admin() {
  const [password, setPassword] = useState("");
  const [token, setToken] = useState(
    () => sessionStorage.getItem("bp_admin_token") || ""
  );
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(false);

  const load = async (t) => {
    setLoading(true);
    try {
      const r = await axios.get(`${API}/admin/leads`, {
        headers: { Authorization: `Bearer ${t}` },
      });
      setLeads(r.data);
    } catch (e) {
      toast.error("Unable to load submissions");
      setToken("");
      sessionStorage.removeItem("bp_admin_token");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (token) load(token);
  }, [token]);

  const login = async (e) => {
    e.preventDefault();
    if (!password) return;
    try {
      const r = await axios.post(`${API}/admin/login`, { password });
      const t = r.data.token;
      sessionStorage.setItem("bp_admin_token", t);
      setToken(t);
      toast.success("Signed in");
    } catch {
      toast.error("Invalid password");
    }
  };

  const logout = () => {
    sessionStorage.removeItem("bp_admin_token");
    setToken("");
    setLeads([]);
  };

  if (!token) {
    return (
      <div
        className="min-h-screen flex items-center justify-center px-5"
        style={{ background: "var(--bp-bg)", color: "var(--bp-fg)" }}
        data-testid="admin-login-screen"
      >
        <form
          onSubmit={login}
          className="w-full max-w-sm p-8 rounded-sm"
          style={{ border: "1px solid var(--bp-border)", background: "var(--bp-bg-2)" }}
        >
          <div className="flex items-center justify-between mb-8">
            <LogoLockup height={52} />
            <span className="mono text-[10px] tracking-[0.2em] uppercase" style={{ color: "var(--bp-fg-3)" }}>
              Admin
            </span>
          </div>
          <label className="block text-xs tracking-[0.2em] uppercase mb-2 mono" style={{ color: "var(--bp-fg-3)" }}>
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 rounded-sm outline-none focus:border-[var(--bp-accent)]"
            style={{ background: "var(--bp-bg)", color: "var(--bp-fg)", border: "1px solid var(--bp-border)" }}
            placeholder="•••••••••"
            data-testid="admin-password-input"
            autoFocus
          />
          <button
            type="submit"
            className="mt-6 w-full btn-primary font-medium px-4 py-3 rounded-sm"
            data-testid="admin-login-submit"
          >
            Sign in
          </button>
          <Link
            to="/"
            className="mt-4 block text-center text-sm transition-colors hover:text-[var(--bp-fg)]"
            style={{ color: "var(--bp-fg-3)" }}
          >
            Back to site
          </Link>
        </form>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen"
      style={{ background: "var(--bp-bg)", color: "var(--bp-fg)" }}
      data-testid="admin-screen"
    >
      <header className="border-b" style={{ borderColor: "var(--bp-border)" }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 h-20 flex items-center justify-between">
          <LogoLockup height={52} />
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Link to="/" className="text-sm hover:text-[var(--bp-accent)]" style={{ color: "var(--bp-fg-2)" }}>
              Site
            </Link>
            <button
              onClick={logout}
              className="text-sm btn-ghost-border px-3 py-1.5 rounded-sm"
              data-testid="admin-logout"
            >
              Sign out
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-5 sm:px-8 py-10">
        <div className="flex items-end justify-between mb-6">
          <div>
            <div className="text-xs tracking-[0.2em] uppercase mono" style={{ color: "var(--bp-accent)" }}>
              Submissions
            </div>
            <h1 className="mt-2 text-3xl font-medium tracking-tight">
              {leads.length} lead{leads.length === 1 ? "" : "s"}
            </h1>
          </div>
          <button
            onClick={() => load(token)}
            className="text-sm btn-ghost-border px-3 py-2 rounded-sm"
            data-testid="admin-refresh"
          >
            Refresh
          </button>
        </div>

        <div
          className="rounded-sm overflow-x-auto"
          style={{ border: "1px solid var(--bp-border)" }}
        >
          <table className="w-full text-sm" data-testid="admin-leads-table">
            <thead style={{ background: "var(--bp-bg-2)" }}>
              <tr>
                {["Received", "Name", "Email", "Company", "Target", "Source"].map((h) => (
                  <th key={h} className="px-4 py-3 text-left text-xs tracking-[0.15em] uppercase mono font-normal" style={{ color: "var(--bp-fg-3)" }}>
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr><td colSpan={6} className="px-4 py-6" style={{ color: "var(--bp-fg-3)" }}>Loading...</td></tr>
              ) : leads.length === 0 ? (
                <tr><td colSpan={6} className="px-4 py-6" style={{ color: "var(--bp-fg-3)" }}>No submissions yet.</td></tr>
              ) : (
                leads.map((l) => (
                  <tr key={l.id} className="border-t" style={{ borderColor: "var(--bp-border)" }}>
                    <td className="px-4 py-3 mono text-xs" style={{ color: "var(--bp-fg-2)" }}>
                      {new Date(l.created_at).toLocaleString()}
                    </td>
                    <td className="px-4 py-3">{l.name}</td>
                    <td className="px-4 py-3" style={{ color: "var(--bp-fg-2)" }}>{l.email}</td>
                    <td className="px-4 py-3">{l.company}</td>
                    <td className="px-4 py-3 max-w-xs truncate" style={{ color: "var(--bp-fg-2)" }}>{l.target_market}</td>
                    <td className="px-4 py-3 mono text-xs" style={{ color: "var(--bp-fg-3)" }}>{l.source}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
