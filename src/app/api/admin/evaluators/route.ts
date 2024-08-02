import type { AvaliaApiResponse } from "@/lib/models/apiResponse";
import type { Evaluator } from "@/lib/models/evaluator";
import FairSpreadsheet from "@/lib/services/fairSpreadsheets";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const sheetId = searchParams.get("sheetId");

  if (!sheetId) {
    return Response.json({
      status: "error",
      message: "Impossível retornar a feira sem especificar o ID da feira.",
    } as AvaliaApiResponse);
  }

  try {
    const evaluators: Evaluator[] = await new FairSpreadsheet({
      spreadsheetId: sheetId,
    }).getEvaluators();

    return Response.json({
      status: "success",
      message: "Science Fair found within user",
      data: evaluators,
    } as AvaliaApiResponse);
  } catch (error) {
    return Response.json({
      status: "error",
      message: (error as Error).message,
    } as AvaliaApiResponse);
  }
}
