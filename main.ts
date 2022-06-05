import { parseISO, format } from "date-fns";
import locale from "date-fns/locale/ja";

interface Parsed {
  original: string;
  parsed: Date;
}

const args = process.argv.slice(2);
const dates: Parsed[] = args.map((arg) => ({ original: arg, parsed: parseISO(arg) }));
for (const p of dates) {
  const jst = format(p.parsed, "yyyy-MM-dd'T'HH:mm:ssXXX", { locale: locale });
  console.log(`${p.original}  =>  ${jst}`);
}
