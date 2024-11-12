import { UserCircle, Activity, Weight, Ruler } from 'lucide-react';

export const UserProfile = ({ profile, onEditProfile }) => {
    if (!profile) return null;
  
    // Use optional chaining and a fallback value
    const fitnessGoal = profile.fitnessGoal?.replace('-', ' ') || 'No fitness goal set';
  
    return (
      <div className="py-2 bg-white border-b top-0 sticky p-2">
        <div className="flex items-center justify-between pb-2">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-100 rounded-full">
              <UserCircle className="w-8 h-8 text-blue-600" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-black">{profile.name}</h2>
              <p className="text-sm text-gray-600">{fitnessGoal}</p> {/* Use fitnessGoal here */}
            </div>
          </div>
          <button
            onClick={onEditProfile}
            className="px-4 py-2 text-sm font-medium text-blue-600 border border-blue-600 rounded-full
              hover:bg-blue-50 transition-colors"
          >
            Edit Profile
          </button>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div className="flex items-center gap-2">
            <Activity className="w-5 h-5 text-gray-500" />
            <div>
              <p className="text-xs text-gray-500">Activity Level</p>
              <p className="text-sm font-medium">{profile.activityLevel}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Weight className="w-5 h-5 text-gray-500" />
            <div>
              <p className="text-xs text-gray-500">Weight</p>
              <p className="text-sm font-medium">{profile.weight} kg</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Ruler className="w-5 h-5 text-gray-500" />
            <div>
              <p className="text-xs text-gray-500">Height</p>
              <p className="text-sm font-medium">{profile.height} cm</p>
            </div>
          </div>
        </div>
      </div>
    );
};
