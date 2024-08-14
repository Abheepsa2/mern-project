class userController{
    async index (req,res){
return res.json({message:"Hellow Users"});
    }

    async create(req,res){
        return res.json({message:"Create User"});
    }

    async show(req,res){
        return res.json({message:"Show User"});
    }
}
export default userController;