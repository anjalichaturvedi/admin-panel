const API_URL = "http://localhost:3000/users";

export const fetchUsers = async () => {
  const res = await fetch(API_URL);
  return res.json();
};

export const addUser = async (user) => {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user)
  });
  return res.json();
};

// Assuming you're fetching users
export const getUsersCount = (users) => {
  // Check if 'users' is defined and an array
  if (!users || !Array.isArray(users)) {
    return 0; // or handle the case when users is not available
  }
  
  // Proceed with filtering if users is a valid array
  const activeUsers = users.filter(user => user.active); // Example filter condition
  return activeUsers.length;
};



export const deleteUser = async (id) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "DELETE"
  });
  return res.json();
};
