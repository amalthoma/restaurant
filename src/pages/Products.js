import React from "react";
import Layout from "../components/Layout/Layout";
import { Link } from "react-router-dom";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const Products = ({ MenuList }) => {




  return (
    <Layout>
      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {MenuList.map((product, index) => (
          <Card sx={{ maxWidth: "390px", display: "flex", m: 2, pt: 2 }} key={index}>
            <CardActionArea>
              <Link to={`/products/${product.id}`}>
                <CardMedia
                  sx={{ minHeight: "400px" }}
                  component={"img"}
                  src={product.photograph}
                  alt={product.name}
                />
              </Link>
              <CardContent>
                <Typography variant="h5" sx={{ textDecorationLine: "none" }} gutterBottom component={"div"}>
                  {product.name}
                </Typography>
                <Typography variant="body2">{product.description}</Typography>

              </CardContent>
            </CardActionArea>
          </Card>

        ))}
      </Box>

    </Layout>
  );
};

export default Products;




