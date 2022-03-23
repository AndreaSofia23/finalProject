/* eslint-disable max-len */
const funkosController = (Funko) => {
  const getFunkos = async (req, res) => {
    const {query} = req;
    const response = await Funko.find(query);
    res.json(response);
  };


  const postFunkos = async (req, res) => {
    const funko = new Funko(req.body);
    await funko.save();
    res.json(funko);
  };

  const getFunkoById = async (req, res) => {
    const response = await Funko.findById(req.params.funkoId);
    res.json(response);
  };

  const putFunkos = async (req, res) => {
    const {body} = req;
    const response = await Funko.updateOne(
        {_id: req.params.funkoId},
        {
          $set: {
            name: body.name,
            category: body.category,
            ilimited: body.ilimited,
            price: body.price,
            collection: body.collection,
          },
        });
    res.status(202).json({message: 'The Funko has been update sucessfully', response});
  };

  const deleteFunkoById = async (req, res) => {
    const id = req.params.funkoId;
    await Funko.findByIdAndDelete(id);
    res.status(202).json('The Funko has been deleted sucessfully');
  };

  return {getFunkos, getFunkoById, postFunkos, putFunkos, deleteFunkoById};
};

module.exports = funkosController;
