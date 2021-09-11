const { ProjectModel } = require('../models/ProjectModel');

const ProjectController = {

    createProject:async (req,res)=>{

        let reqProject =req.body;
        let givProject = new ProjectModel(reqProject);

        try {
            await givProject.save();
            res.send(givProject)
        }
        catch (error){
            console.error(error.message)
            res.send(error.message)
        }
    },

    getProject:async (req,res)=>{
        try {
            const Projects = await ProjectModel.find();
            res.send(Projects);
        }
        catch (error){
            console.error(error.message)
            res.send(error.message)
        }
    }
}

module.exports = ProjectController;
