export interface MockUser {
  id: string;
  name?: string | null;
  email?: string | null;
  password?: string | null; // In a real app, this would be a hashed password
  image?: string | null; // Optional: for profile picture
}

// Initialize with some default users, similar to what was in NextAuth options
export const mockUsers: MockUser[] = [
  { id: "1", name: "Test User", email: "user1@example.com", password: "password123", image: null },
  { id: "2", name: "Admin User", email: "admin@example.com", password: "adminpass", image: null },
];

let nextUserId = mockUsers.length + 1;

export function addMockUser(name?: string, email?: string, password?: string): MockUser | null {
  if (!email || !password) {
    console.error("Email and password are required to add a mock user.");
    return null; // Or throw an error
  }

  const existingUser = mockUsers.find(user => user.email === email);
  if (existingUser) {
    console.warn(`Mock user with email ${email} already exists.`);
    return null; // Indicate email already exists
  }

  const newUser: MockUser = {
    id: String(nextUserId++),
    name: name || "Unnamed User",
    email: email,
    password: password, // Storing plain text for mock purposes ONLY
    image: null,
  };

  mockUsers.push(newUser);
  console.log("Added new mock user:", newUser.email);
  return { ...newUser, password: "" }; // Return user without password for safety, even if mock
}

// Optional: A function to find a user, could be used by NextAuth authorize
export function findMockUserByEmail(email?: string | null): MockUser | undefined {
  if (!email) return undefined;
  return mockUsers.find(user => user.email === email);
}