import { connect } from "@/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import Subscriber from "@/models/subscriberModel";

connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();

    const { email } = reqBody;

    const subscriber = await Subscriber.findOne({ email });

    if (subscriber) {
      return NextResponse.json(
        { message: "Already subscribed" },
        { status: 200 },
      );
    }

    const newUser = new Subscriber({
      email,
    });

    await newUser.save();

    return NextResponse.json(
      {
        message: "Subscribed successfully",
        success: true,
      },
      { status: 201 },
    );
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
