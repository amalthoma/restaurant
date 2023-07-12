import React, { useState } from 'react'
import Layout from "../components/Layout/Layout";
import '../styles/single.css'
import { Link, useParams } from 'react-router-dom'


import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";



const SingleProduct = ({ MenuList }) => {
  console.log(MenuList);

  const id = useParams();
  console.log("SingleProduct", id.id);

  const filtered = MenuList?.filter((f) => {
    return f.id == id.id;
  })

  return filtered?.map((product, index) => {
    return (
      <Layout>
        <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center", padding: "10px" }} className='app__bg' >

          <div className='row'>
            <div className='left'>
              <CardMedia
                sx={{ minHeight: "350px", marginLeft: "20px" }}
                component={"img"}
                src={product.photograph}
                alt={product.name}
                key={index}
                className='img1'
              />
            </div>
            <div className='right'>
              <CardContent className='content1'>
                <Typography variant="h3" sx={{ color: "goldenrod" }} gutterBottom component={"div"}>
                  {product.name}
                </Typography>
                <Typography variant="body2" className='content' sx={{ color: "white" }}>{product.description}</Typography><br></br>
                <Typography variant="h4" sx={{ color: "goldenrod" }}>Operating Hours</Typography><br></br>
                <Typography variant="body3" className='content' sx={{ color: "white" }}> Monday: "5:30 pm - 11:00 pm<br></br>
                  Tuesday: 5:30 pm - 12:00 am<br></br>
                  Wednesday: 5:30 pm - 12:00 am<br></br>
                  Thursday: 5:30 pm - 12:00 am<br></br>
                  Friday: 5:30 pm - 12:00 am<br></br>
                  Saturday: 12:00 pm - 4:00 pm, 5:30 pm - 12:00 am<br></br>
                  Sunday: 12:00 pm - 4:00 pm, 5:30 pm - 11:00 pm</Typography>
                <br></br>
                <button type="button" className="custom__button" style={{ marginTop: '2rem' }}>{product.price}</button>
              </CardContent>
            </div>
          </div>
        </Box>
      </Layout>
    )
  })

};


export default SingleProduct