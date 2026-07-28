"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const models_1 = require("../models");
const router = (0, express_1.Router)();
router.get('/health', (_req, res) => {
    res.json({ status: 'ok', service: 'octofit-backend' });
});
router.get('/users', async (_req, res) => {
    try {
        const users = await models_1.User.find({}).lean();
        res.json(users);
    }
    catch (error) {
        res.status(500).json({ message: 'Unable to load users', error });
    }
});
router.post('/users', async (req, res) => {
    try {
        const user = await models_1.User.create(req.body);
        res.status(201).json(user);
    }
    catch (error) {
        res.status(400).json({ message: 'Unable to create user', error });
    }
});
router.get('/teams', async (_req, res) => {
    try {
        const teams = await models_1.Team.find({}).populate('members').lean();
        res.json(teams);
    }
    catch (error) {
        res.status(500).json({ message: 'Unable to load teams', error });
    }
});
router.post('/teams', async (req, res) => {
    try {
        const team = await models_1.Team.create(req.body);
        res.status(201).json(team);
    }
    catch (error) {
        res.status(400).json({ message: 'Unable to create team', error });
    }
});
router.get('/activities', async (_req, res) => {
    try {
        const activities = await models_1.Activity.find({}).populate('userId').lean();
        res.json(activities);
    }
    catch (error) {
        res.status(500).json({ message: 'Unable to load activities', error });
    }
});
router.post('/activities', async (req, res) => {
    try {
        const activity = await models_1.Activity.create(req.body);
        res.status(201).json(activity);
    }
    catch (error) {
        res.status(400).json({ message: 'Unable to create activity', error });
    }
});
router.get('/leaderboard', async (_req, res) => {
    try {
        const leaderboard = await models_1.LeaderboardEntry.find({}).populate('userId').lean();
        res.json(leaderboard);
    }
    catch (error) {
        res.status(500).json({ message: 'Unable to load leaderboard', error });
    }
});
router.get('/workouts', async (_req, res) => {
    try {
        const workouts = await models_1.Workout.find({}).lean();
        res.json(workouts);
    }
    catch (error) {
        res.status(500).json({ message: 'Unable to load workouts', error });
    }
});
router.post('/workouts', async (req, res) => {
    try {
        const workout = await models_1.Workout.create(req.body);
        res.status(201).json(workout);
    }
    catch (error) {
        res.status(400).json({ message: 'Unable to create workout', error });
    }
});
exports.default = router;
