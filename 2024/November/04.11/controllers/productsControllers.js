import Products from '../models/productsModel.js';

// Logic to get all products
async function getAllProducts(req, res) {
  try {
    const products = await Products.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// Logic to get a product by ID
async function getProductsByID(req, res) {
  res.json(res.product);
}

// Middleware to find a product by ID
async function getProduct(req, res, next) {
  let product;
  try {
    product = await Products.findById(req.params.id);
    if (product == null) {
      return res.status(404).json({ message: 'Product not found' });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
  res.product = product;
  next();
}

// Logic to create a new product
async function createNewProduct(req, res) {
  const product = new Products({
    setup: req.body.setup,
    punchline: req.body.punchline,
  });
  try {
    const newProduct = await product.save();
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

// Logic to update a product
async function updateAllProduct(req, res) {
  if (req.body.setup != null) {
    res.product.setup = req.body.setup;
  }
  if (req.body.punchline != null) {
    res.product.punchline = req.body.punchline;
  }
  try {
    const updatedProduct = await res.product.save();
    res.json(updatedProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

// Logic to delete a product
async function deleteProduct(req, res) {
  try {
    await res.product.remove();
    res.json({ message: 'Deleted product' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// Exporting functions and middleware
export {
  getAllProducts,
  getProductsByID,
  getProduct,
  createNewProduct,
  updateAllProduct,
  deleteProduct
};