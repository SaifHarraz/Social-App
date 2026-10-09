import { Link, Outlet, useLocation } from "react-router-dom";
import BrandSection from "./../../Components/Auth/BrandSection/BrandSection";
export default function AuthLayout() {
  const { pathname } = useLocation();
  return (
    <>
      <main className="min-h-screen bg-primary-light px-4 py-8 sm:py-12 lg:flex lg:items-center">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-6 sm:gap-8 lg:flex-row lg:items-center lg:justify-between">
          {/* Section 1 */}
          <BrandSection />

          {/* Section 2 */}
          <section className="order-1 w-full max-w-107.5 lg:order-2">
            <div className="rounded-2xl bg-white p-4 sm:p-6">
              {/* Login / Register */}
              <div className="mb-5 grid grid-cols-2 rounded-xl bg-slate-100 p-1">
                <Link
                  to="/auth/login"
                  className={`rounded-lg py-2 text-center text-sm font-extrabold transition ${
                    pathname === "/auth/login"
                      ? "bg-white text-primary shadow-sm"
                      : "text-slate-600 hover:text-slate-800"
                  }`}
                >
                  Login
                </Link>

                <Link
                  to="/auth/register"
                  className={`rounded-lg py-2 text-center text-sm font-extrabold transition ${
                    pathname === "/auth/register"
                      ? "bg-white text-primary shadow-sm"
                      : "text-slate-600 hover:text-slate-800"
                  }`}
                >
                  Register
                </Link>
              </div>
              <Outlet />
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
