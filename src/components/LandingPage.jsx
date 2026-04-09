import { useNavigate } from "react-router-dom";
import React from "react";
import { motion } from "motion/react";

import Card from "./Card";
import { useStoreContext } from "../contextApi/ContextApi";

const LandingPage = () => {
  const navigate = useNavigate();
  const { token } = useStoreContext();

  const dashBoardNavigateHandler = () => {
    navigate(token ? "/dashboard" : "/login");
  };
  return (
    <div className="min-h-[calc(100vh-64px)] lg:px-14 sm:px-8 px-4 bg-gradient-to-b from-white to-slate-100">
      <div className="lg:flex-row flex-col lg:py-8 pt-12 lg:gap-10 gap-8 flex justify-between items-center">
        <div className=" flex-1">
          <motion.h1
            initial={{ opacity: 0, y: -80 }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-bold font-roboto text-slate-900 md:text-5xl sm:text-4xl text-3xl md:leading-[55px] sm:leading-[45px] leading-10 lg:w-full md:w-[70%] w-full"
          >
            Make every link look clean, trackable, and share-ready.
          </motion.h1>
          <p className="text-slate-600 text-sm my-5 lg:w-[85%]">
            NebulaLink helps you create short URLs instantly, manage all your links
            in one dashboard, and monitor engagement using analytics endpoints from
            your backend.
          </p>
          <div className="flex items-center gap-3">
            <motion.button
              initial={{ opacity: 0, y: 80 }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              onClick={dashBoardNavigateHandler}
              className="bg-custom-gradient w-40 text-white rounded-md py-2"
            >
              {token ? "Open Dashboard" : "Login"}
            </motion.button>
            <motion.button
              initial={{ opacity: 0, y: 80 }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              onClick={dashBoardNavigateHandler}
              className="border-btnColor border w-40 text-btnColor rounded-md py-2"
            >
              Create Short Link
            </motion.button>
          </div>
        </div>
        <div className="flex-1 flex justify-center w-full">
          <motion.img
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
            }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="sm:w-[480px] w-[400px] object-cover rounded-2xl shadow-xl"
            src="https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&w=1200&q=80"
            alt="Dashboard preview"
          />
        </div>
      </div>
      <div className="sm:pt-12 pt-7">
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-slate-800 font-roboto font-bold lg:w-[60%] md:w-[70%] sm:w-[80%] mx-auto text-3xl text-center"
        >
          Built for creators, students, and teams who share links daily
        </motion.p>
        <div className="pt-4 pb-7 grid lg:gap-7 gap-4 xl:grid-cols-4  lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-4">
          <Card
            title="Simple URL Shortening"
            desc="Convert long URLs into compact, shareable links using your authenticated backend API."
          />
          <Card
            title="Powerful Analytics APIs"
            desc="Visualize `/totalClicks` and per-link `/analytics/{shortUrl}` performance with clean charts."
          />
          <Card
            title="Secure JWT Access"
            desc="Registration/login generate tokens, and all private URL APIs are called with Bearer auth."
          />
          <Card
            title="Fast Redirect Experience"
            desc="Your short links redirect quickly and reliably using `/s/:url` to backend resolution."
          />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;