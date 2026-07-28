import mongoose from 'mongoose';
import { Activity, LeaderboardEntry, Team, User, Workout } from '../models';

const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit_db';

/**
 * Seed the octofit_db database with test data
 */
async function seedDatabase() {
  try {
    await mongoose.connect(connectionString);
    console.log('Connected to octofit_db');

    await Promise.all([
      User.deleteMany({}),
      Team.deleteMany({}),
      Activity.deleteMany({}),
      LeaderboardEntry.deleteMany({}),
      Workout.deleteMany({})
    ]);

    const users = await User.insertMany([
      {
        username: 'maria',
        email: 'maria@example.com',
        fitnessLevel: 'advanced'
      },
      {
        username: 'jordan',
        email: 'jordan@example.com',
        fitnessLevel: 'intermediate'
      },
      {
        username: 'alex',
        email: 'alex@example.com',
        fitnessLevel: 'beginner'
      }
    ]);

    const teams = await Team.insertMany([
      {
        name: 'Peak Performers',
        description: 'A team focused on endurance and strength challenges.',
        members: [users[0]._id, users[1]._id]
      },
      {
        name: 'Sunrise Striders',
        description: 'A morning workout crew that loves trail runs.',
        members: [users[2]._id]
      }
    ]);

    await Activity.insertMany([
      {
        userId: users[0]._id,
        type: 'run',
        durationMinutes: 45,
        calories: 520
      },
      {
        userId: users[1]._id,
        type: 'strength',
        durationMinutes: 60,
        calories: 430
      },
      {
        userId: users[2]._id,
        type: 'yoga',
        durationMinutes: 30,
        calories: 180
      }
    ]);

    await LeaderboardEntry.insertMany([
      {
        userId: users[0]._id,
        score: 980,
        rank: 1
      },
      {
        userId: users[1]._id,
        score: 910,
        rank: 2
      },
      {
        userId: users[2]._id,
        score: 760,
        rank: 3
      }
    ]);

    await Workout.insertMany([
      {
        title: 'HIIT Cardio Blast',
        difficulty: 'advanced',
        durationMinutes: 25,
        focusArea: 'cardio'
      },
      {
        title: 'Full Body Strength',
        difficulty: 'intermediate',
        durationMinutes: 45,
        focusArea: 'strength'
      },
      {
        title: 'Core Recovery Flow',
        difficulty: 'beginner',
        durationMinutes: 20,
        focusArea: 'mobility'
      }
    ]);

    console.log('Database seeding complete');
    console.log(`Seeded ${users.length} users, ${teams.length} teams, activities, leaderboard entries, and workouts.`);
    await mongoose.disconnect();
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();
