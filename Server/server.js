const express = require("express");
const cors = require("cors");
const { Project } = require("./models");
const cookieParser = require("cookie-parser");
const app = express();
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 4000;
const path = require("path");

app.use(
  cors({
    origin: "http://localhost:5173", // اسم مصدر العميل
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true, // السماح باستخدام الكوكيز
  })
);

app.use(bodyParser.json());
app.use(express.json());
app.use(cookieParser());

const articleRoutes = require("./routers/articleRoutes");
const adminRoutes = require("./routers/adminRoutes");
const contactMessagesRoutes = require("./routers/contactMessagesRoutes");
const userRoutes = require("./routers/userRoutes");
const projectRoutes = require("./routers/projectRoutes");
const authRoutes = require("./routers/authRoutes");
const bilalroutes = require("./routers/bilalroutes");
const donationRoutes = require("./routers/donation");
app.get("/api/projects", async (req, res) => {
  const projects = await Project.findAll();
  res.json(projects);
});

app.use("/api/articles", articleRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/users", authRoutes);
app.use("/api", contactMessagesRoutes);
app.use("/api", userRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/donations", donationRoutes);
app.use("/api/addproject", bilalroutes);
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

http: app.use((req, res, next) => {
  res.status(404).json({ message: "🚫 Route not found" });
});

app.use((err, req, res, next) => {
  console.error("🔥 Server Error:", err);
  res.status(500).json({ message: "❌ Internal Server Error" });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
