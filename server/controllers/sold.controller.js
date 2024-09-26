import Sold from "../mongodb/models/sold";
const createSold = async (req, res) => {
    try {
      const { title } = req.body;
    

    
      const newSold = await Sold.create({
       title
      })
    
      res.status(200).json(newSold);
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  };

  
export {
   createSold
  }