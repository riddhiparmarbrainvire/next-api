export default function handler(req: any, res: any) {
  const params = res?.query?.params;
  console.log(params, "params");
  res.status(200).json(params);
}
