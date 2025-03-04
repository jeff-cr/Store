

export const filterProducts = (products) => {
    const filtered = products.map(({ id, image, description, title, price }) => ({
      id,
      image,
      description,
      title,
      price,
    }));
  
    // console.log("Filtered Products: ", filtered);
    return filtered;
  };