import { safaricomDarajaApi } from "mds-daraja-sdk";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    console.log({url:req.url})
    try {
      const { phone, amount } = await req.json();
      const data = await safaricomDarajaApi.initiateC2bStkPush(phone, amount);
  
      return NextResponse.json({ sucess: true, data });
    } catch (error: any) {
      return NextResponse.json({ error: error }, { status: 500 });
    }
  }