import { Link } from "react-router-dom";
import { IoSparkles } from "react-icons/io5";

const BrandLogo = ({ compact = false, light = false }) => {
  const textClass = light ? "text-white" : "text-slate-900";

  return (
    <Link to="/" className="inline-flex items-center gap-2">
      <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-blue-500 to-fuchsia-600 flex items-center justify-center shadow-lg shadow-blue-500/30">
        <IoSparkles className="text-white text-lg" />
      </div>
      {!compact && (
        <div className="leading-tight">
          <p className={`text-xl font-extrabold tracking-tight ${textClass}`}>
            NebulaLink
          </p>
          <p className={`text-[11px] ${light ? "text-white/80" : "text-slate-500"}`}>
            Short links. Big reach.
          </p>
        </div>
      )}
    </Link>
  );
};

export default BrandLogo;
