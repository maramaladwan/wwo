const Workout = require('../model/workoutModel')
const mongoose = require('mongoose')


const getWorkouts=async (req, res) => {
    const work = await Workout.find().sort({ createdAt: -1 })
    res.status(200).json(work)
} 

const getWorkout=async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'wrong id number' })
    }
    const work = await Workout.findById(id)
    if (!work) {
        return res.status(404).json({ error: 'No such workout' })
    }
    res.status(200).json(work)

}

const createWorkout=async (req, res) => {
    const { title, load, reps } = req.body
    try {
        const work = await Workout.create({ title, load, reps })
        res.status(200).json(work)
    } catch (e) {
        res.status(400).json({ error: e.message })
    }
}

const updateWorkout=async(req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'wrong id number' })
    }
    const work = await Workout.findById(id).updateOne({...req.body})
    if (!work) {
        return res.status(404).json({ error: 'No such workout' })
    }
    res.status(200).json(work)
}

const deleteWorkout=async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'wrong id number' })
    }
    const work = await Workout.findById(id).deleteOne()
    if (!work) {
        return res.status(404).json({ error: 'No such workout' })
    }
    res.status(200).json(work)
}
module.exports={
    getWorkout,
    getWorkouts,
    createWorkout,
    updateWorkout,
    deleteWorkout}