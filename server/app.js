const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 3000;
const { User, Movie } = require("./models");
const { comparePassword, generateToken } = require("./helpers");
const authentication = require("./middleware/authentication");
const errorHandler = require("./middleware/errorHandler");

app.use(cors()); // ini kayak satpam yang menentukan siapa saja yang bisa masuk ke server yang kita buat
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post("/register", async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.create({
      email,
      password,
    });

    res.status(201).json({
      id: user.id,
      email: user.email,
    });
  } catch (error) {
    next(error);
  }
});

app.post("/login", async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email) {
      throw { name: "EmptyEmail" };
    }
    if (!password) {
      throw { name: "EmptyPassword" };
    }

    const user = await User.findOne({
      where: {
        email,
      },
    });

    if (!user) {
      throw { name: "InvalidLogin" };
    }

    const isValidPassword = comparePassword(password, user.password);

    if (!isValidPassword) {
      throw { name: "InvalidLogin" };
    }

    const token = generateToken({
      email: user.email,
      id: user.id,
    });

    res.status(200).json({
      access_token: token,
    });
  } catch (error) {
    next(error);
  }
});

app.get("/movies", async (req, res, next) => {
  try {
    const data = await Movie.findAll();

    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
});

// app.use(authentication);

app.get("/movies/:id", async (req, res, next) => {
  try {
    const data = await Movie.findOne({
      where: { id: req.params.id },
    });

    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
});

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Listening on port `, PORT);
});
