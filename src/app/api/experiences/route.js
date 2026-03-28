import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI; // Ensure this is set in your environment variables
const client = new MongoClient(uri);

export async function GET() {
  try {
    await client.connect();
    const db = client.db("Magico-Portfolio"); // change this
    const collection = db.collection("coco-experience");
    const data = await collection.find({}).toArray();

    return NextResponse.json(data);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to fetch experiences" },
      { status: 500 },
    );
  } finally {
    await client.close();
  }
}
