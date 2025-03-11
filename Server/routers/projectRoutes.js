const express = require("express");
const router = express.Router();
const projectController = require("../controllers/projectController");

router.post("/addProject", projectController.createProject);

router.get("/AllProject", projectController.getAllProjects);

router.get("/AllProject/:id", projectController.getProjectById);

router.put("/:id", projectController.updateProject);

router.delete("/deleteProject:id", projectController.deleteProject);

router.put("/:projectId/status", projectController.updateProjectStatus);

module.exports = router;
