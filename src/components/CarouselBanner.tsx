"use client";

import React from "react";
import Slider from "react-slick";
import { Box, Typography, Button, Container } from "@mui/material";
// import logo from '../../../assets/images/logos/logo.png';


const banners = [
    {
        title: "Welcome to Our Platform",
        description: "Book appointments and manage schedules seamlessly.",
        // image: "../assets/images/staffs/banner1.jpg",
        image: "https://images.unsplash.com/photo-1588453251771-cd919b362ed4?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        buttonText: "Get Started",
    },
    {
        title: "Stay Organized",
        description: "Track all your upcoming meetings in one place.",
        image: "https://images.unsplash.com/photo-1571624436279-b272aff752b5?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        buttonText: "Learn More",
    },
    {
        title: "Boost Productivity",
        description: "Never miss an appointment again with timely reminders.",
        image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        buttonText: "Explore",
    },
];

export default function CarouselBanner() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: true,
    };

    return (
        <Slider {...settings}>
            {banners.map((banner, index) => (
                <Box
                    key={index}
                    sx={{
                        position: "relative",
                        height: { xs: 100, md: 300 },
                        backgroundImage: `url("${banner.image}")`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mt: 5,
                        borderRadius: 10,
                        overflow: "hidden",
                        
                    }}
                >
                    {/* Black overlay */}
                    <Box
                        sx={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            backgroundColor: "rgba(0, 0, 0, 0.4)", // faint black
                            zIndex: 1,
                        }}
                    />

                    {/* Content */}
                    <Container
                        sx={{
                            position: "relative",
                            zIndex: 2,
                            color: "#fff",
                            textAlign: "left",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                            justifyContent: "center",
                            height: "100%",
                            width: "100%",
                            px: 4,
                        }}
                    >
                        <Typography variant="h3" component="h2"
                         sx={{ fontWeight: "bold", 
                            fontSize: 40, 
                         mb: 2 }}>
                            {banner.title}
                        </Typography>
                        <Typography variant="h6" sx={{ mb: 4 }}>
                            {banner.description}
                        </Typography>
                        <Button variant="contained" color="primary">
                            {banner.buttonText}
                        </Button>
                    </Container>
                </Box>

            ))}
        </Slider>
    );
}
