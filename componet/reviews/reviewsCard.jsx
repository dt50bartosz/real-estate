import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function ReviewCards() {
  return (
    <div className="w-[90%] max-w-7xl mx-auto py-10">
      <h3 className="text-3xl font-semibold mb-6 text-center text-[var(--color-primary)]">
        Opinie klientów
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="shadow-xl hover:shadow-2xl transition-shadow rounded-2xl p-4 bg-white">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-gray-800">Anna Kowalska</CardTitle>
            <CardDescription className="text-sm text-gray-500">Kupno apartamentu w Torrevieja</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700">
              Wiktoria była niesamowita! Pomogła mi znaleźć idealny apartament w Torrevieja. Jej wiedza o okolicy i zaangażowanie dały mi ogromny spokój w całym procesie.
            </p>
          </CardContent>
          <CardFooter>
            <p className="text-sm text-gray-400">5 dni temu</p>
          </CardFooter>
        </Card>

        <Card className="shadow-xl hover:shadow-2xl transition-shadow rounded-2xl p-4 bg-white">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-gray-800">Jan Nowak</CardTitle>
            <CardDescription className="text-sm text-gray-500">Wynajem mieszkania w Torrevieja</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700">
              Dzięki Wiktorii udało mi się szybko znaleźć przytulne mieszkanie w centrum Torrevieja. Była bardzo pomocna, miła i profesjonalna.
            </p>
          </CardContent>
          <CardFooter>
            <p className="text-sm text-gray-400">1 tydzień temu</p>
          </CardFooter>
        </Card>

        <Card className="shadow-xl hover:shadow-2xl transition-shadow rounded-2xl p-4 bg-white">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-gray-800">Magda Zielińska</CardTitle>
            <CardDescription className="text-sm text-gray-500">Sprzedaż nieruchomości w okolicach Torrevieja</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700">
              Wiktoria pomogła mi sprzedać dom pod Torrevieja. Cały proces przebiegł szybko i bezproblemowo – pełen profesjonalizm i zaangażowanie.
            </p>
          </CardContent>
          <CardFooter>
            <p className="text-sm text-gray-400">2 tygodnie temu</p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
