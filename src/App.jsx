import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  const [techs, setTechs] = useState([]);
  const [stack, setStack] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/technologies.json")
      .then((res) => res.json())
      .then((data) => {
        setTechs(data);
        setLoading(false);
      });
  }, []);

  const handleAdd = (tech) => {
    if (stack.find((item) => item.id === tech.id)) {
      toast.error("Already added to stack!");
      return;
    }
    setStack([...stack, tech]);
    toast.success(`${tech.name} added to your stack!`);
  };

  const handleRemove = (id) => {
    setStack(stack.filter((item) => item.id !== id));
    toast.info("Item removed from stack.");
  };

  const handleRemoveAll = () => {
    setStack([]);
    toast.error("All items removed.");
  };

  return (
    <div className="min-h-screen bg-[#faf9f6] font-sans text-gray-800">
      <ToastContainer position="top-right" autoClose={2000} />

      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm shadow-md">
            DS
          </div>
          <span className="text-xl font-bold tracking-tight text-gray-900">
            Dev <span className="text-pink-600">Stack</span>
          </span>
        </div>
        
        <div className="hidden md:flex gap-8 font-medium text-gray-600">
          <a href="#" className="text-pink-600 font-semibold hover:text-pink-700">Home</a>
          <a href="#" className="hover:text-pink-600 transition-colors">Technologies</a>
          <a href="#" className="hover:text-pink-600 transition-colors">Projects</a>
          <a href="#" className="hover:text-pink-600 transition-colors">About</a>
          <a href="#" className="hover:text-pink-600 transition-colors">Contact</a>
        </div>

        <div className="flex items-center gap-4">
          <button className="hidden md:block text-sm font-medium text-gray-600 hover:text-gray-900">Sign In</button>
          <button className="btn bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full px-6 min-h-0 h-10 border-none shadow-sm hover:opacity-95">Sign Up</button>
        </div>
      </nav>

      {/* Banner */}
      <header className="px-6 py-12 md:py-16 max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-8">
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight text-gray-900">
            Build Your Ideal <br />
            <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">Development Stack</span>
          </h1>
          <p className="text-gray-600 text-base md:text-lg max-w-lg leading-relaxed">
            Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <button className="btn bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full px-7 border-none shadow-md hover:opacity-95">
              Explore Technologies
            </button>
            <button className="btn btn-outline rounded-full px-7 bg-white text-gray-700 border-gray-300 hover:bg-gray-50 hover:border-gray-400">
              Learn More
            </button>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <div className="w-full max-w-md bg-gradient-to-tr from-pink-100/50 to-purple-100/50 p-6 rounded-3xl shadow-inner flex items-center justify-center">
            <img src="/banner-stack.png" alt="Banner" className="w-full object-contain drop-shadow-xl" onError={(e)=>{e.target.style.display='none'}} />
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
        
        {/* Technologies Grid */}
        <div className="lg:col-span-3">
          <div className="mb-8">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-2">
              Explore the <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">Technologies</span>
            </h2>
            <p className="text-gray-500 text-sm md:text-base font-medium">
              Pick one technology per category to build your ideal stack. Each one can be added only once.
            </p>
          </div>

          {loading ? (
            <div className="flex justify-center items-center h-40">
              <span className="loading loading-spinner loading-lg text-pink-500"></span>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {techs.map((tech) => {
                const isAdded = stack.find((item) => item.id === tech.id);
                return (
                  <div 
                    key={tech.id} 
                    className="card bg-white shadow-sm border border-gray-100 rounded-2xl p-5 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                  >
                    <div>
                      <div className="flex justify-between items-start mb-4">
                        <div className="w-10 h-10 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center p-1">
                          <img src={tech.icon} alt={tech.name} className="w-6 h-6 object-contain" />
                        </div>
                        <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-pink-50 text-pink-600 border border-pink-100">
                          {tech.badge}
                        </span>
                      </div>
                      <h3 className="card-title text-lg font-bold text-gray-900 mb-1">{tech.name}</h3>
                      <p className="text-xs text-gray-500 mb-4 line-clamp-2 leading-relaxed">{tech.description}</p>
                    </div>
                    <div>
                      <div className="flex justify-between items-center text-xs text-gray-400 mb-4 font-medium pt-2 border-t border-gray-50">
                        <span className="bg-gray-100 px-2 py-0.5 rounded text-gray-600">{tech.category}</span>
                        <span className="text-amber-500 font-bold flex items-center gap-1">⭐ {tech.rating}</span>
                      </div>
                      <button
                        onClick={() => handleAdd(tech)}
                        disabled={isAdded}
                        className={`btn w-full rounded-xl min-h-0 h-11 text-sm font-semibold transition-all ${
                          isAdded 
                            ? "bg-gray-100 text-gray-400 border-none cursor-not-allowed" 
                            : "bg-gray-900 text-white hover:bg-gray-800 shadow-sm"
                        }`}
                      >
                        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Your Stack Sidebar */}
        <div className="lg:col-span-1 lg:sticky lg:top-24">
          <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-1">Your Stack</h3>
            <p className="text-xs text-gray-400 mb-6 font-medium">
              {stack.length === 0 ? "No Technology Selected" : `${stack.length} Technology Selected`}
            </p>
            
            {stack.length === 0 ? (
              <div className="border-2 border-dashed border-gray-200 rounded-xl p-8 text-center text-gray-400 text-sm font-medium">
                Your stack is empty
              </div>
            ) : (
              <div className="space-y-3 mb-6 max-h-[350px] overflow-y-auto pr-1">
                {stack.map((item) => (
                  <div key={item.id} className="flex justify-between items-center p-3 border border-gray-100 rounded-xl bg-gray-50/50">
                    <div className="flex items-center gap-3">
                      <img src={item.icon} alt={item.name} className="w-7 h-7 object-contain" />
                      <div>
                        <p className="font-bold text-xs text-gray-900">{item.name}</p>
                        <p className="text-[10px] text-gray-500">{item.category}</p>
                      </div>
                    </div>
                    <button onClick={() => handleRemove(item.id)} className="text-gray-400 hover:text-red-500 text-sm font-bold px-2 py-1">
                      ✕
                    </button>
                  </div>
                ))}
              </div>
            )}
            
            {stack.length > 0 && (
              <button onClick={handleRemoveAll} className="btn btn-outline text-red-500 border-red-200 hover:bg-red-50 hover:border-red-300 w-full rounded-xl min-h-0 h-10 text-sm">
                Remove All
              </button>
            )}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white pt-16 pb-8 border-t border-gray-100 px-6 mt-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center text-white font-bold text-xs">
                DS
              </div>
              <span className="font-bold text-gray-900">Dev Stack</span>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed">Curated tools and technologies to build modern software applications.</p>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 mb-4 text-sm tracking-wide">Product</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><a href="#" className="hover:text-pink-600">Home</a></li>
              <li><a href="#" className="hover:text-pink-600">Technologies</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 mb-4 text-sm tracking-wide">Company</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><a href="#" className="hover:text-pink-600">About</a></li>
              <li><a href="#" className="hover:text-pink-600">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 mb-4 text-sm tracking-wide">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><a href="#" className="hover:text-pink-600">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-pink-600">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className="text-center text-xs text-gray-400 max-w-7xl mx-auto border-t border-gray-100 pt-8">
          © 2026 Dev Stack. All rights reserved.
        </div>
      </footer>
    </div>
  );
}"/* update 1 */"  
"/* update 2 */"  
"/* update 3 */"  
"/* update 4 */"  
"/* update 5 */"  
"/* update 6 */"  
"/* update 7 */"  
