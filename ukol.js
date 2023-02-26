
/*const parseDate = (datum) => {
	return {
		day: Number(datum.slice(0, 2)),
		month: Number(datum.slice(3, 5)),
		year: Number(datum.slice(6)),
	}
}

console.log(parseDate('12.03.2015'))*/


function parseDate(dateString) {
    const parts = dateString.split('.');
    const day = parseInt(parts[0]);
    const month = parseInt(parts[1]);
    const year = parseInt(parts[2]);
    return {
      'day': day,
      'month':month,
      'year': year,
    };
  }

console.log(parseDate('12.03.2015'))


function formatDate(dateObj) {
    const day = dateObj.day.toString().padStart(2, '0');
    const month = dateObj.month.toString().padStart(2, '0');
    const year = dateObj.year.toString();
    return `${day}.${month}.${year}`;
  }

console.log(formatDate({ day: 6, month: 4, year: 2021 }))


function round(number) {
    const celeCislo= Math.floor(number);
    const desetinnaCast= number - celeCislo;
  
//Pokud je desetinná část menší než 0.5, zaokrouhlujeme dolů.
    if (desetinnaCast< 0.5) {
      return celeCislo;
//Pokud je desetinná část větší než 0.5, zaokrouhlujeme nahoru.
    } else if (desetinnaCast > 0.5) {
      return Math.ceil(number);
//Pokud je desetinná část přesně rovna 0.5, zaokrouhlujeme k sudému číslu.
    } else {
      // zaokrouhlení na sudé číslo
      return celeCislo % 2 === 0 ? celeCislo: celeCislo+ 1;
    }
  }

console.log(round(3.5))
console.log(round(2.5))
console.log(round(-3.5))
console.log(round(-2.5))

function max3 ( ) {

}

function max3(a, b, c) {
    let max = a; // předpokládáme, že první číslo je největší
    if (b > max) {
      max = b; // pokud druhé číslo je větší, uložíme ho jako nové maximum
    }
    if (c > max) {
      max = c; // pokud třetí číslo je větší, uložíme ho jako nové maximum
    }
    return max; // vrátíme největší číslo
  }

console.log(max3(10,4,5))