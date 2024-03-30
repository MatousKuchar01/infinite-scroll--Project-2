@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap");

html {
  box-sizing: border-box;
}

body {
  margin: 0;
  min-height: 100vh;
  font-family: Bebas Neue, sans-serif;
  background-color: whitesmoke;
}

h1 {
  text-align: center;
  margin-top: 25px;
  margin-bottom: 15px;
  font-size: 40px;
  letter-spacing: 5px;
}

.image-container {
  margin: 10px 30%;
}

.image-container img {
  width: 100%;
  margin-top: 5px;
}

@media screen and (max-width: 600px) {
  h1 {
    font-size: 20px;
  }
  .image-container {
    margin: 10px;
  }
}
