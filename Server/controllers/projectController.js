const { Project } = require("../models");

exports.createProject = async (req, res) => {
  try {
    const {
      name,
      description,
      goal_amount,
      department,
      organization_name,
      youtubeUrl,
      user_id,
    } = req.body;

    const mainImagePath = req.files["main_image"]
      ? req.files["main_image"][0].path
      : null;
    const photosPaths = req.files["photos"]
      ? req.files["photos"].map((file) => file.path)
      : [];

    const project = await Project.create({
      name,
      description,
      goal_amount,
      department,
      youtubeUrl,
      organization_name,
      main_image: mainImagePath,
      photos: photosPaths,
      user_id,
    });

    res.status(201).json(project);
  } catch (error) {
    res
      .status(500)
      .json({ error: "فشل إنشاء المشروع", details: error.message });
  }
};

exports.getAllProjects = async (req, res) => {
  try {
    const projects = await Project.findAll();
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ error: "فشل جلب المشاريع", details: error.message });
  }
};

exports.getProjectById = async (req, res) => {
  try {
    const project = await Project.findByPk(req.params.id);
    if (!project) return res.status(404).json({ error: "المشروع غير موجود" });
    res.status(200).json(project);
  } catch (error) {
    res.status(500).json({ error: "فشل جلب المشروع", details: error.message });
  }
};

exports.updateProject = async (req, res) => {
  try {
    const project = await Project.findByPk(req.params.id);
    if (!project) return res.status(404).json({ error: "المشروع غير موجود" });

    await project.update(req.body);
    res.status(200).json({ message: "تم تحديث المشروع بنجاح", project });
  } catch (error) {
    res
      .status(500)
      .json({ error: "فشل تحديث المشروع", details: error.message });
  }
};

exports.deleteProject = async (req, res) => {
  try {
    const project = await Project.findByPk(req.params.id);
    if (!project) return res.status(404).json({ error: "المشروع غير موجود" });

    await project.destroy();
    res.status(200).json({ message: "تم حذف المشروع بنجاح" });
  } catch (error) {
    res.status(500).json({ error: "فشل حذف المشروع", details: error.message });
  }
};

exports.updateProjectStatus = async (req, res) => {
  const { projectId } = req.params;
  const { status } = req.body;

  try {
    const project = await Project.findByPk(projectId);

    if (!project) {
      return res.status(404).json({ error: "المشروع غير موجود" });
    }

    // Update the project status
    project.status = status;
    await project.save();

    res.status(200).json({ message: "تم تحديث حالة المشروع بنجاح", project });
  } catch (error) {
    res
      .status(500)
      .json({ error: "فشل تحديث حالة المشروع", details: error.message });
  }
};
