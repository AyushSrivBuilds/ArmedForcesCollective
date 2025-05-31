import { NextResponse } from 'next/server';
import { addMockUser } from '@/lib/mock-auth-store';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, password } = body;

    if (!email || !password) {
      return NextResponse.json({ error: 'Email and password are required.' }, { status: 400 });
    }

    // Basic email format validation (can be more robust)
    if (!/\S+@\S+\.\S+/.test(email)) {
        return NextResponse.json({ error: 'Invalid email format.' }, { status: 400 });
    }

    // Basic password length validation (can be more robust)
    if (password.length < 6) {
        return NextResponse.json({ error: 'Password must be at least 6 characters long.' }, { status: 400 });
    }

    const newUser = addMockUser(name, email, password);

    if (!newUser) {
      return NextResponse.json({ error: 'Email already exists.' }, { status: 409 }); // 409 Conflict
    }

    // Exclude password from the response for security, even in mock
    const { password: _, ...userWithoutPassword } = newUser;
    return NextResponse.json({ message: 'User registered successfully.', user: userWithoutPassword }, { status: 201 });

  } catch (error) {
    console.error('Registration API Error:', error);
    if (error instanceof SyntaxError) {
      return NextResponse.json({ error: 'Invalid JSON payload.' }, { status: 400 });
    }
    return NextResponse.json({ error: 'An unexpected error occurred.' }, { status: 500 });
  }
}