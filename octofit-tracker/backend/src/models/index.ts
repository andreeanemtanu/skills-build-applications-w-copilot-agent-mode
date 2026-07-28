import mongoose, { Schema, type Document, type Types } from 'mongoose';

export interface IUser extends Document {
  username: string;
  email: string;
  fitnessLevel: string;
  createdAt: Date;
}

export interface ITeam extends Document {
  name: string;
  description: string;
  members: Types.ObjectId[];
  createdAt: Date;
}

export interface IActivity extends Document {
  userId: Types.ObjectId;
  type: string;
  durationMinutes: number;
  calories: number;
  createdAt: Date;
}

export interface ILeaderboardEntry extends Document {
  userId: Types.ObjectId;
  score: number;
  rank: number;
  updatedAt: Date;
}

export interface IWorkout extends Document {
  title: string;
  difficulty: string;
  durationMinutes: number;
  focusArea: string;
  createdAt: Date;
}

const userSchema = new Schema<IUser>({
  username: { type: String, required: true, unique: true, trim: true },
  email: { type: String, required: true, unique: true, trim: true },
  fitnessLevel: { type: String, default: 'beginner' },
  createdAt: { type: Date, default: Date.now }
});

const teamSchema = new Schema<ITeam>({
  name: { type: String, required: true, trim: true },
  description: { type: String, default: '' },
  members: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  createdAt: { type: Date, default: Date.now }
});

const activitySchema = new Schema<IActivity>({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  type: { type: String, required: true },
  durationMinutes: { type: Number, required: true },
  calories: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now }
});

const leaderboardSchema = new Schema<ILeaderboardEntry>({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  score: { type: Number, default: 0 },
  rank: { type: Number, default: 1 },
  updatedAt: { type: Date, default: Date.now }
});

const workoutSchema = new Schema<IWorkout>({
  title: { type: String, required: true, trim: true },
  difficulty: { type: String, default: 'beginner' },
  durationMinutes: { type: Number, default: 30 },
  focusArea: { type: String, default: 'full-body' },
  createdAt: { type: Date, default: Date.now }
});

export const User = mongoose.model<IUser>('User', userSchema);
export const Team = mongoose.model<ITeam>('Team', teamSchema);
export const Activity = mongoose.model<IActivity>('Activity', activitySchema);
export const LeaderboardEntry = mongoose.model<ILeaderboardEntry>('LeaderboardEntry', leaderboardSchema);
export const Workout = mongoose.model<IWorkout>('Workout', workoutSchema);

export default {
  User,
  Team,
  Activity,
  LeaderboardEntry,
  Workout
};
