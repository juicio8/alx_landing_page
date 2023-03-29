import HeroImg from "/w3.jpg";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="min-h-[79vh] md:min-h-[100vh]  flex flex-col justify-center px-4">
      <div className="flex flex-col md:flex-row items-center gap-8">
        <motion.div
          className="w-full"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-3xl font-medium">
            Search For Your Favorite Movies and Tv Shows
          </h1>
          <a href="https://watchlist-deni.netlify.app" target="_blank">
            <button className="bg-purple-500 text-white p-2 rounded font-medium hover:bg-purple-400 mt-5">
              Go To WatchList
            </button>
          </a>
        </motion.div>

        <div className="w-11/12">
          <motion.img
            src={HeroImg}
            width="900px"
            className="rounded-md opacity-80"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.8 }}
            transition={{ duration: 1, delay: 0.9 }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
