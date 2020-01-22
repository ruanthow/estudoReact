const Dev = require('../model/Dev');
const parseStringAsArray = require('../utils/parseStringAsArrays')


module.exports = { 
    async index(req, res){
        //buscar dev em raio de 10km e por techs dele
        const {latitude, longitude, tech} = req.query

        const techsArrays = parseStringAsArray(tech);

        const devs = await Dev.find({
            tech: {
                $in: techsArrays,
            },
            location:{
                $near:{
                    $geometry:{
                        type:'Point',
                        coordinates:[longitude, latitude],
                    },
                    $maxDistance:10000,
                }
            }
        });

        return res.json({ devs })
}

}