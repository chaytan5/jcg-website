import { connect } from "@/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import Message from "@/models/messageModel";

connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();

    const { email, message } = reqBody;

    console.log(reqBody);

    const newMessage = new Message({
      email,
      message,
    });

    await newMessage.save();

    return NextResponse.json(
      {
        message: "Message sent successfully",
        success: true,
      },
      { status: 200 },
    );
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
