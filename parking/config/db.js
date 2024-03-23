const mongoose = require("mongoose");
const express = require("express");

// ### CONNECTING DB ### //

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO);
    console.log(`### MONGO DB CONNECTED ###`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = { connectDB };
