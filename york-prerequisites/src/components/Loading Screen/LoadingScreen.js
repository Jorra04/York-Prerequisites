import React from "react";
import { motion } from "framer-motion";
import "./LoadingScreen.css";
const loaderVariants = {
    animationOne: {
        x: [-80, 80],
        y: [0, -40],
        transition: {
            x: {
                yoyo: Infinity,
                duration: 0.8,
                backgroundColor: "red"
            },
            y: {
                yoyo: Infinity,
                duration: 0.4
            }
        }
    }
}


const LoadingScreen = () => {
    return (
        <div className="loader-container">
            <div className="loader-title">
            <h1>Please Wait...</h1>
            </div>
            <div className="loader-animation">
            <motion.div className="loader" variants={loaderVariants} animate="animationOne">
            </motion.div>
            </div>
            
        </div>
    );
};

export default LoadingScreen;