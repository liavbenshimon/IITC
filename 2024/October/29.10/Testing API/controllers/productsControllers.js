import Products from "..models/productsModel.js"

export const getAllProducts = router.get('/', async (req, res) => {
    try {
      const products = await Products.find();
      res.json(products);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  
  export const getProductsByID = router.get('/:id', getProduct, (req, res) => {
    res.json(res.product);
  });
  
  async function getProduct(req, res, next) {
    let product;
    try {
      product = await Products.findById(req.params.id);
      if (product == null) {
        return res.status(404).json({ message: 'product not found' });
      }
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
    res.product = product;
    next();
  }

export const createNewProduct = router.post('/', async (req, res) => {
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
  });

  router.post('/', async (req, res) => {
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
  });

export const updateAllProduct = router.put('/:id', getProduct, async (req, res) => {
    if (req.body.setup != null) {
      res.product.setup = req.body.setup;
    }
    if (req.body.punchline != null) {
      res.joke.punchline = req.body.punchline;
    }
    try {
      const updatedProduct = await res.product.save();
      res.json(updatedProduct);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  });

  export const deleteProduct = router.delete('/:id', getProduct, async (req, res) => {
    try {
      await res.product.remove();
      res.json({ message: 'Deleted product' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  
  

  
  
  