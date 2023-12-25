import { connect } from "@/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import RegisteredUser from "@/models/registeredUserModel";

connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();

    console.log(reqBody);

    const { email, packageSelected } = reqBody;

    const registeredUser = await RegisteredUser.findOne({ email });

    if (registeredUser) {
      return NextResponse.json(
        { error: "User already registered!" },
        { status: 400 },
      );
    }

    const newUser = new RegisteredUser({
      email,
      packageSelected,
    });

    await newUser.save();

    return NextResponse.json(
      {
        message: "Registered successfully",
        success: true,
      },
      { status: 201 },
    );
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
