## Aktualnie posiadam dwa projekty postawione na Node JS. Są to:
* [Rezerwacja parkingu](#Rezerwacja_parkingu)
* [Quiz](#Quiz)

# Rezerwacja_parkingu
## General info
Jest to projekt strony, za pomocą której możesz zarezerwować miejsce parkingowe. Wykorzystuje ono nierelacyjną bazę danych MongoDB. Responsywność strony stworzyłem z użyciem Bootstrap. 
## Strona Glowna
Tutaj możemy zobaczyć, ile aktualnie jest wolnych miejsc ( uzależnione od zawartości bazy danych ). Wyświetlana jest również mapa google, wskazuje ona na losowy adres, ( taki parking nie istnieje ). Możemy wpisać imię i nazwisko oraz przejść dalej.

## Wyslij wniosek
Podstrona zawiera formularz, który po wprowadzeniu danych dynamicznie oblicza koszt rezerwacji. Po złożeniu wniosku, na podany adres e-mail, zostaje wysłana informacja dotycząca kodów rezerwacji potrzebnych do późniejszego odczytania danych, oraz płatności.

## Sprawdz swoja rezerwacje
Podstrona służąca do sprawdzenia aktualnego stanu rezerwacji. Czy jest ona jeszcze aktualna, czy jest opłacona, od kiedy do kiedy trwa.

## Profil
Strona mająca na celu wypisanie wszystkich rezerwacji użytkownika.

# Quiz
## General info
Jest to projekt prostej strony wykorzystujący javascript do dynamicznego rozwiązywania quizów.
Dla responsywności strony wykorzystany został Bootstrap.
Aplikacja działa na serwerze wykorzystującym Node JS, a dokładniej bibliotekę Express JS.
Do generowania wyglądu strony wykorzystywany jest EJS

Do wyboru mamy:
* Tabliczka mnozenia
* Stolice Europy
* Geografia ogolna
* Flagi świata

## Tabliczka mnozenia
Gracz wybiera ile czasu chce mieć, a następnie stara się poprawnie odpowiedzieć na dobrane losowo zadania.
	
## Stolice Europy
Gracz do wyboru ma quiz z pytaniami otwartymi oraz zamkniętymi. Wybieramy liczbę pytań i rozpoczynamy grę

## Geografia_Ogolna
Gracz do wyboru ma tryb które państwo ma większą powierzchnię, albo które ma większą liczbę ludności ( dane z 2023 r.)
Odpowiadamy kilkając na flagę.

## Flagi_Swiata
Gracz wybiera ile sekund ma trwać jego wyzwanie. Nastepnie wyświetla się flaga losowo wybranego państwa, a zadaniem użytkownika
jest dobranie do niego odpowiedniego państwa spośród 8.
