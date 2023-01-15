import React from 'react';
const imageFolder = require.context("../public/students");

const boyImage = imageFolder("./boy1.jpg");
const name = "girl1"
const girl1 = imageFolder(`./${name}.jpg`)

const AppExample25 = () => {
  const girl3 = 'girl3';
  return (
    <div>
      <h1>Example 25 - Loading Images Dynamically</h1>
      <hr />
      <img src={boyImage.default} />
      <img src={girl1.default} />
      <img src={`${process.env.PUBLIC_URL}/students/${girl3}.jpg`} />
    </div>
  );
}

export default AppExample25;