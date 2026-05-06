const express = require("express");
const router = express.Router();
const Todo = require("../models/Todo");

// Create Todo
router.post("/", async (req, res) => {
   const todo = await Todo.create(req.body);
   res.json(todo);
});

// Get all Todos
router.get("/", async(req, res) => {
    const todos = await Todo.find();
    res.json(todos);
});

// Update Todo 
router.put("/:id", async(req, res) => {{
    try {
        const updatedtodo = await Todo.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new: true}
        );
        res.status(200).json(updatedtodo);
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}})

// Delete Todo
router.delete("/:id", async (req, res) => {
    try {
        await Todo.findByIdAndDelete(req.params.id);
        res.status(200).json({message: "Todo Deleted"});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
})


module.exports = router;