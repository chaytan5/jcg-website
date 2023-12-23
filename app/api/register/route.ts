import { connect } from "@/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import RegisteredUser from "@/models/registeredUserModel";

connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();

    const { email } = reqBody;

    console.log(reqBody);

    const registeredUser = await RegisteredUser.findOne({ email });

    if (registeredUser) {
      return NextResponse.json(
        { error: "User already registered!" },
        { status: 400 },
      );
    }

    const newUser = new RegisteredUser({
      email,
    });

    const savedUser = await newUser.save();

    console.log({ savedUser });

    return NextResponse.json(
      {
        message: "User registered successfully",
        success: true,
      },
      { status: 201 },
    );
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
