import React from 'react';
const YammiTopBar = () => {
return (
<div className="topbar bg-white dark:bg-gray-800 shadow p-4 flex justify-between
items-center">
<div className="logo text-xl font-bold text-gray-900 dark:text-white">
Yammi
</div>
<div className="user-actions flex items-center space-x-4">
<button className="text-gray-700 dark:text-gray-300 hover:text-blue-
500">Login</button>
<button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-
600">Sign Up</button>
</div>
</div>
);
};
export default YammiTopBar;