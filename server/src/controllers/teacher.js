import Teacher from "../models/Teacher.js";
import Lesson from "../models/Lesson.js";
import Session from "../models/Session.js";
import Class from "../models/Class.js";
import { validationResult } from "express-validator";

export const updateTeacher = async (req, res) => {
  if (req.user.role !== "teacher")
    return res.status(401).json({ success: false, error: "Unauthorized" });
  if (!req.user._id)
    return res.status(400).json({ success: false, error: "ID is required" });
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    // if (req.body._id)
    const update = { phone: req.body.phone, address: req.body.address };
    console.log("updateTeacher update: ", update);
    const teacher = await Teacher.findByIdAndUpdate(req.user._id, update, {
      new: true,
    });
    console.log("updateTeacher teacher: ", teacher);
    if (!teacher) return res.send({ success: false, errorId: 404 });
    res.send({ success: true, teacher });
    // else {
    //   const newTeacher = new Teacher.create(req.body);
    //   if (!newTeacher) return res.send({ success: false, errorId: 500 });
    //   res.send({ success: true, newTeacher });
    // }
  } catch (error) {
    console.log("updateTeacher error:", error.message);
    res.send({ success: false, error: error.message });
  }
};

export const updateLesson = async (req, res) => {
  // if (req.user.role !== "teacher")
  // add a middleware to populate the req.user object
  // return res.status(401).json({ success: false, error: "Unauthorized" });
  if (!req.body.topic)
    return res.status(400).json({ success: false, error: "Topic is required" });
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    if (req.body._id) {
      const lesson = await Lesson.findByIdAndUpdate(req.body._id, req.body, {
        new: true,
      });
      if (!lesson) return res.send({ success: false, errorId: 404 });
      res.send({ success: true, lesson });
    } else {
      const newLesson = await Lesson.create(req.body);
      if (!newLesson) return res.send({ success: false, errorId: 404 });
      res.send({ success: true, newLesson });
    }
  } catch (error) {
    console.log("updateLesson error:", error.message);
    res.send({ success: false, error: error.message });
  }
};

export const getLessons = async (req, res) => {
  if (req.user.role !== "teacher")
    return res.status(401).json({ success: false, error: "Unauthorized" });
  try {
    const lessons = await Lesson.find({ teacher: req.user._id })
      .populate({
        path: "session",
        select: "-__v",
        populate: { path: "class", select: "-__v" },
      })
      .populate({ path: "attendance", select: "name" });
    res.send(lessons);
  } catch (error) {
    console.log("getLesson error:", error.message);
    res.send({ success: false, error: error.message });
  }
};

export const getLesson = async (req, res) => {
  if (req.user.role !== "teacher")
    return res.status(401).json({ success: false, error: "Unauthorized" });
  try {
    const lesson = await Lesson.findById(req.params.id)
      .populate("session", "name")
      .select("-__v");
    if (!lesson) return res.send({ success: false, errorId: 404 });
    res.send({ success: true, lesson });
  } catch (error) {
    console.log("getLesson error:", error.message);
    res.send({ success: false, error: error.message });
  }
};

export const deleteLesson = async (req, res) => {
  if (req.user.role !== "teacher")
    return res.status(401).json({ success: false, error: "Unauthorized" });
  try {
    const lesson = await Lesson.findByIdAndDelete(req.params.id);
    if (!lesson) return res.send({ success: false, errorId: 404 });
    res.send({ success: true, lesson });
  } catch (error) {
    console.log("deleteLesson error:", error.message);
    res.send({ success: false, error: error.message });
  }
};

export const getSessions = async (req, res) => {
  if (req.user.role !== "teacher")
    return res.status(401).json({ success: false, error: "Unauthorized" });
  try {
    const sessions = await Session.find({ teacher: req.user._id }).select(
      "-__v",
    );
    if (!sessions) return res.send({ success: false, errorId: 404 });
    res.send({ success: true, sessions });
  } catch (error) {
    console.log("getSessions error:", error.message);
    res.send({ success: false, error: error.message });
  }
};

export const getSession = async (req, res) => {
  if (req.user.role !== "teacher")
    return res.status(401).json({ success: false, error: "Unauthorized" });
  try {
    const session = await Session.findById(req.params.id).select("-__v");
    if (!session) return res.send({ success: false, errorId: 404 });
    res.send({ success: true, session });
  } catch (error) {
    console.log("getSession error:", error.message);
    res.send({ success: false, error: error.message });
  }
};

export const getClasses = async (req, res) => {
  if (req.user.role !== "teacher")
    return res.status(401).json({ success: false, error: "Unauthorized" });
  try {
  } catch (error) {}
};

export const getClass = async (req, res) => {
  if (req.user.role !== "teacher")
    return res.status(401).json({ success: false, error: "Unauthorized" });
  try {
    const session = await Session.findById(req.params.id).select("-__v");
    if (!session) return res.send({ success: false, errorId: 404 });
    const classes = await Class.find({ session: session }).select("-__v");
    if (!classes) return res.send({ success: false, errorId: 404 });
    res.send({ success: true, classes });
  } catch (error) {
    console.log("getClass error:", error.message);
    res.send({ success: false, error: error.message });
  }
};
