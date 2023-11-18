import React from "react";
import { Grid } from "@material-ui/core";
import Product from "./Product/Product";
const products = [
  {
    id: 1,
    name: "shoes",
    description: "shoesrunning on",
    price: "$50",
    image:
      "https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    id: 2,
    name: "MackBook",
    description: "Apple mackbook on",
    price: "$60",
    image:
      "https://images.pexels.com/photos/434346/pexels-photo-434346.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  // { id: 3, name: "Apple watch", description: "Apple watch on", price: "$60" },
];

const Products = () => {
  return (
    <main>
      <Grid container justifyContent="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
