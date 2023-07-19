import React, { useEffect } from "react";
import { useMatchesSmartphone } from "../Breakpoints";
import { Box, Grid, Typography } from "@mui/material";
import Slider from "react-slick";
import {useNavigate } from "react-router-dom";
import { Footer, Navbar } from "../Resources";
import useCreateAntecipacao from "../../Network/useCreateAntecipacao";

function Home() {
  
  const navigate = useNavigate()
  const handleLogin = () => {
    navigate("/Login");
}

const [postAntecipacao, [response, error]] = useCreateAntecipacao({ "valorDesejado": 15000,"codigo": 102 });

useEffect(() => {
  postAntecipacao();
},[])

// const handleCreateIncident = async e => {
//   e.preventDefault();
  
// };

  // Settings to Carousel header in Home Page
  const settings = {
    dots: false,
    infinite: true,
    speed: 2500,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
  };

  // Custom Hook that identifies whether the resolution is in mobile
  const isMobile = useMatchesSmartphone();

  return (
    <>
      <Navbar handleLogin={handleLogin} login={true}/>
        {/* Header */}
        <Box sx={{ flexGrow: 1, mt: 2 }}>
          <Slider pauseOnHover={false} {...settings}>
            <div>
              <Grid
                container
                justifyContent="center"
                alignItems="center"
                style={{height: "100vh", alignContent: isMobile ? "center" : "inherit"}}
              >
                <Grid item xs={12} md={6}>
                  <Box sx={{ background: settings.gradientColor, p: 2 }}>
                    <Typography
                      style={{ fontSize: isMobile ? 22 : 32 }}
                      className="classText"
                      textAlign={isMobile ?  "center" : "right"}
                      variant="body1"
                      component="div"
                    >
                      experiência financeira <br></br> 
                      <span className="orange-text">descomplicada. </span>{" "} 
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: isMobile ? "center" : "left",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src="/Images/logo_on_header.png"
                      alt="Slide 2"
                      style={{
                        height: "auto",
                        // paddingTop: 64,
                        objectFit: "contain",
                        maxWidth: isMobile ? "30%" : "100%",
 
                      }}
                    />
                  </Box>
                </Grid>
              </Grid>
            </div>
            <div>
              <Grid
                container
                style={{ height: isMobile ? "50%" : "100vh" }}
                justifyContent="center"
                alignItems="center"
                spacing={2}
              >
                <Grid
                  item
                  xs={12}
                  md={6}
                  style={{ background: settings.gradientColor }}
                >
                  <Typography
                    style={{ fontSize: isMobile ? 22 : 36 }}
                    className="classText"
                    textAlign = {isMobile ? "center" : "right"}
                    variant="body1"
                    component="div"
                  >
                    
                    Crédito adaptado às {" "} <br></br>
                    <span className="orange-text"> suas necessidades </span> <br></br>
                    na CAIXA.
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={6}
                  style={{ display: "flex", justifyContent: isMobile ? "center" : "left", }}
                >
                   <Box
                    sx={{
                      display: "flex",
                      justifyContent: isMobile ? "center" : "left",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src="/Images/CAIXA+.svg"
                      alt="Slide 2"
                      style={{
                        height: "auto",
                        width: 360,
                        // paddingTop: 64,
                        objectFit: "contain",
                        maxWidth: isMobile ? "30%" : "100%",
 
                      }}
                    />
                  </Box>
                </Grid>
              </Grid>
            </div>
          </Slider>
          {/* Footer Component */}
          <Footer/>
      </Box>
    </>
  );
}

export default Home;
