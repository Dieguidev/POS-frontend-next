import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {

  const searchParams = request.nextUrl.searchParams
  const trasactionDate = searchParams.get('transactionDate')

  console.log(request);

  return Response.json(request)
}
