import React from "react";
import Layout from "./../components/Layout/Layout";
import { Box, Typography } from "@mui/material";
import backgroundImage from "../images/aboutbanner.PNG";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 15,
          textAlign: "center",
          p: 5,
          color: "white",
          backgroundImage: `url(${backgroundImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.5)",
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "3rem",
            textShadow: "2px 2px #000000",
            background: "-webkit-linear-gradient(white, #ff6b6b)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          },
          "& p": {
            textAlign: "justify",
            fontSize: "1.5rem",
            background: "rgba(255, 255, 255, 0.5)",
            padding: "1rem",
            borderRadius: "1rem",
            margin: "2rem 0",
            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.3)",
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4": {
              fontSize: "2rem",
            },
            "& p": {
              fontSize: "1.2rem",
              padding: "0.5rem",
              margin: "1rem 0",
            },
          },
        }}
      >
        <Typography variant="h4">Welcome To My Restaurant</Typography>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
          consectetur luctus quam a tincidunt. Integer consequat ut nibh sed
          gravida. Duis eget enim ac sapien laoreet eleifend. Phasellus quis odio
          vel arcu fringilla feugiat non sit amet erat. Suspendisse malesuada
          blandit arcu, vel eleifend purus bibendum vitae. Praesent imperdiet
          massa non magna suscipit dignissim. Etiam feugiat elit in tortor
          placerat, id dapibus elit rutrum.
        </p>
        <p>
          Maecenas vel enim in tortor laoreet elementum eget vel nulla. Sed
          bibendum urna ac velit varius hendrerit. Ut convallis neque quis nulla
          sollicitudin, sit amet posuere enim blandit. Sed consequat tellus
          nulla, eu dapibus neque sagittis ac. Integer euismod imperdiet risus,
          sed sollicitudin metus accumsan ac. Vestibulum ante ipsum primis in
          faucibus orci luctus et ultrices posuere cubilia curae; Fusce vel ex
          libero. Fusce vehicula orci nunc, vel feugiat massa dapibus eu.
        </p>
      </Box>
    </Layout>
  );
};

export default About;
