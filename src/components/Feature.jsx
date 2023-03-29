import FeatureImg from "/w4.jpg";
import { motion } from "framer-motion";

const Feature = () => {
  return (
    <section className="min-h-[60vh] md:min-h-[100vh] flex flex-col justify-center px-4">
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="w-11/12">
          <motion.img
            src={FeatureImg}
            width="900px"
            className="rounded-md opacity-0"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.8 }}
            transition={{ duration: 1, delay: 0.9 }}
          />
        </div>
        <div className="w-full">
          <motion.h1
            className="text-2xl font-medium"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Save them to WatchList
            <br /> and you'll never forget to watch
          </motion.h1>
        </div>
      </div>
    </section>
  );
};

export default Feature;
