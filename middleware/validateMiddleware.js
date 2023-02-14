  function validateDto(ajvValidate) {
    return (req, res, next) => {
        const valid = ajvValidate(req.body);
        
        // const valid = ajvValidate(data)
        if (!valid){
            const errors = ajvValidate.errors;
            res.status(400).json(errors);
        }
        else{
            next()
        }
    };
  }
  
  module.exports = validateDto;

