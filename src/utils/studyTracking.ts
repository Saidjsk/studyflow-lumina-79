
/**
 * Utility functions for tracking study progress and habits
 */

/**
 * Calculate the current study streak (consecutive days studied)
 * @returns The current streak count
 */
export function calculateStudyStreak(): number {
  // Get today's date and format it
  const today = new Date().toISOString().split('T')[0];
  
  // Get stored study data
  const studyData = localStorage.getItem('studyData');
  
  if (!studyData) {
    // Initialize with today if no data exists
    const initialData = { lastStudyDate: today, currentStreak: 1, studyDates: [today] };
    localStorage.setItem('studyData', JSON.stringify(initialData));
    return 1;
  }
  
  const data = JSON.parse(studyData);
  
  // Already logged today
  if (data.lastStudyDate === today) {
    return data.currentStreak;
  }
  
  // Get yesterday's date
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const yesterdayFormatted = yesterday.toISOString().split('T')[0];
  
  // Check if user studied yesterday
  if (data.lastStudyDate === yesterdayFormatted) {
    // Increment streak and update last study date
    data.currentStreak += 1;
    data.lastStudyDate = today;
    data.studyDates = [...(data.studyDates || []), today];
    localStorage.setItem('studyData', JSON.stringify(data));
    return data.currentStreak;
  }
  
  // Streak broken - reset to 1
  data.currentStreak = 1;
  data.lastStudyDate = today;
  data.studyDates = [...(data.studyDates || []), today];
  localStorage.setItem('studyData', JSON.stringify(data));
  return 1;
}

/**
 * Log a completed activity to count toward daily goals
 * @param subjectId The ID of the subject
 * @param activityType The type of activity (lesson, exercise, quiz)
 */
export function logCompletedActivity(subjectId: string, activityType: 'lesson' | 'exercise' | 'quiz') {
  // Get today's date
  const today = new Date().toISOString().split('T')[0];
  
  // Get or initialize activity log
  const activityLog = JSON.parse(localStorage.getItem('activityLog') || '{}');
  
  if (!activityLog[today]) {
    activityLog[today] = {};
  }
  
  if (!activityLog[today][subjectId]) {
    activityLog[today][subjectId] = { lessons: 0, exercises: 0, quizzes: 0 };
  }
  
  // Increment the appropriate counter
  if (activityType === 'lesson') {
    activityLog[today][subjectId].lessons += 1;
  } else if (activityType === 'exercise') {
    activityLog[today][subjectId].exercises += 1;
  } else if (activityType === 'quiz') {
    activityLog[today][subjectId].quizzes += 1;
  }
  
  // Save updated log
  localStorage.setItem('activityLog', JSON.stringify(activityLog));
  
  // Update study streak
  calculateStudyStreak();
  
  return activityLog[today][subjectId];
}

/**
 * Get subject progress statistics
 * @param subjectId The ID of the subject
 * @returns Progress statistics for the subject
 */
export function getSubjectProgress(subjectId: string) {
  const progress = localStorage.getItem(`progress_${subjectId}`);
  
  if (!progress) {
    // Return default values if no progress is stored
    return {
      completion: Math.floor(Math.random() * 60),
      lessonsCompleted: 0,
      exercisesCompleted: 0,
      quizzesCompleted: 0,
      lastActivity: null
    };
  }
  
  return JSON.parse(progress);
}

/**
 * Get today's completed activities count for a subject
 * @param subjectId The ID of the subject
 * @returns The number of completed activities today
 */
export function getTodayCompletedActivities(subjectId: string) {
  const today = new Date().toISOString().split('T')[0];
  const activityLog = JSON.parse(localStorage.getItem('activityLog') || '{}');
  
  if (!activityLog[today] || !activityLog[today][subjectId]) {
    return 0;
  }
  
  const subjectActivities = activityLog[today][subjectId];
  return subjectActivities.lessons + subjectActivities.exercises + subjectActivities.quizzes;
}
